"use client";
import { useParams, useRouter } from "next/navigation";
import { investors } from "@/constants";
import InvestorPageButton from "@/components/company/InvestorPageButton";

import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProjectCard from "../../../components/ProjectCard";
import Button from "@/components/Button";
import Image from "next/image";
import buildProjectImage from "@/assets/images/build-project.png";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Spinner from "@/components/Spinner";
import SignUpLink from "@/components/SignUpLink";
import SignInLink from "@/components/SignInLink";
import { getProjectCategory, getProjects } from "@/app/api/projects/project";
import Filters from "../../../components/Filters";
import { getCities } from "@/utils/request";
import Head from "next/head";

const InvestorPage = () => {
  const [token, setToken] = useState(null);
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectCategories, setProjectCategories] = useState([]);
  const [cityRel, setCityRel] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });

  useEffect(() => {
    fetchProjectsWithFromAPI();
    getProjectCategories();
    fetchCitiesWithFromAPI();
  }, []);
  useEffect(() => {
    fetchProjectsWithFromAPI();
  }, [selectedCity, search, filters]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }
  }, []);

  const getProjectCategories = async () => {
    getProjectCategory()
      .then((response) => {
        setProjectCategories(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function fetchProjectsWithFromAPI() {
    setLoading(true);
    const cityRealization = selectedCity?.id || null;
    setLoading(true);
    const activeFilters = Object.keys(filters).reduce((acc, key) => {
      if (filters[key].value) acc[key] = true;
      return acc;
    }, {});
    getProjects({
      ...activeFilters,
      category: id,
      city_realization: cityRealization,
      search,
    })
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function fetchCitiesWithFromAPI() {
    getCities()
      .then((response) => {
        setCityRel(response);
        setSelectedCity(response[0]); // Default to the first city
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Компания"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[65px] md:mt-[90px] lg:mt-[100px]">
        <div className="max-container py-[60px] md:pb-[170px] md:pt-[100px]">
          <h2 className="section-title mb-[30px] !text-left">
            {projects?.results && projects?.results[0]?.category?.name}
          </h2>
          <p className="mb-[30px] font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
            Если вы хотите начать инвестировать в стартапы и малые бизнесы, то
            зарегристрируйтесь или войдите в аккаунт, чтобы увидеть больше
            информации о проектах.
          </p>

          <div className="flex snap-x snap-mandatory flex-wrap gap-[30px] overflow-x-scroll md:flex-wrap md:overflow-auto">
            {projectCategories?.map((e, index) => (
              <InvestorPageButton key={index} investor={e} id={id} />
            ))}
          </div>
        </div>

        {!token && (
          <div className="mb-[60px] bg-secondary py-[30px] md:py-[60px]">
            <div className="max-container flex flex-col justify-between xl:flex-row">
              <div className="flex-1">
                <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
                  Хотите больше выгоды?
                </h2>
                <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                  Зарегистрируйтесь на нашей платформе и получите полную
                  информацию о проектах
                </p>
                <div className="flex flex-col gap-[30px] sm:flex-row">
                  <SignUpLink />
                  <SignInLink />
                </div>
              </div>
              <Image
                src={buildProjectImage}
                alt="image"
                priority={true}
                width={0}
                height={0}
                sizes="100%"
                className="flex-1 object-contain md:max-w-[650px]"
              />
            </div>
          </div>
        )}

        <Filters
          filters={filters}
          setFilters={setFilters}
          cityName={selectedCity?.name || "Город"}
          cities={cityRel}
          setSelectedCity={setSelectedCity}
          activeSearch={true}
          setSearch={setSearch}
          search={search}
        />

        {loading && <Spinner loading={loading} />}
        {!loading && projects && (
          <div className="max-container mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
            {projects?.results?.map((card, index) => (
              <div className="">
                <ProjectCard key={index} card={card} />
              </div>
            ))}
          </div>
        )}
        {projects?.results?.length ? (
          <div className="max-container mb-[100px] flex items-center justify-center md:mb-[150px]">
            <Button text="Загрузить еще" primary />
          </div>
        ) : (
          ""
        )}

        <HomeBlogs />
      </section>
    </>
  );
};

export default InvestorPage;
