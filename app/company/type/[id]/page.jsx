"use client";
import { useParams } from "next/navigation";
import InvestorPageButton from "@/components/company/InvestorPageButton";
import { useState, useEffect } from "react";
import ProjectCard from "../../../../components/ProjectCard";
import Button from "@/components/Button";
import Image from "next/image";
import buildProjectImage from "@/assets/images/build-project.png";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Spinner from "@/components/Spinner";
import SignUpLink from "@/components/SignUpLink";
import SignInLink from "@/components/SignInLink";
import Filters from "../../../../components/Filters";
import { getCities } from "@/utils/request";
import Head from "next/head";
import {
  getCompanySubCategoryByType,
  getCompanySubCategoryProjects,
} from "@/app/api/company/company";
import { getProjects } from "@/app/api/projects/project";

const InvestorPage = () => {
  const [token, setToken] = useState(null);
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityRel, setCityRel] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }

    fetchCitiesWithFromAPI();
    fetchProjectsWithFromAPI();
  }, []);

  useEffect(() => {
    fetchProjectsWithFromAPI();
  }, [selectedCity, search, filters, selectedSub]);

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
      category: selectedSub?.id,
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

  useEffect(() => {
    (() => {
      getCompanySubCategoryByType(id).then((res) => setSubCategories(res));
    })();
  }, []);

  useEffect(() => {
    if (subCategories.length > 0) {
      setSelectedSub(subCategories[0]);
    }
  }, [subCategories]);

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
      <section className="mt-[130px] sm:mt-[150px] md:mt-[170px] lg:mt-[185px]">
        <div className="max-container mb-[70px] sm:mb-[100px]">
          <h2 className="section-title mb-[30px] !text-left">
            {selectedSub?.name}
          </h2>
          <p className="mb-[30px] font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
            Если вы хотите начать инвестировать в стартапы и малые бизнесы, то
            зарегристрируйтесь или войдите в аккаунт, чтобы увидеть больше
            информации о проектах.
          </p>

          <div
            className={
              "company-subs flex gap-[30px] overflow-x-auto pb-[30px] sm:pb-0"
            }
          >
            {subCategories?.map((e, index) => (
              <InvestorPageButton
                key={index}
                selected={selectedSub}
                investor={e}
                onClick={() => setSelectedSub(e)}
              />
            ))}
          </div>
        </div>

        {!token && (
          <div className="mb-[60px] bg-secondary py-[30px] md:py-[60px]">
            <div className="max-container flex flex-col justify-between gap-y-[60px] xl:flex-row">
              <div className="flex-1">
                <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] lg:text-[52px] 2xl:text-[64px]">
                  Хотите больше выгоды?
                </h2>
                <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                  Зарегистрируйтесь на нашей платформе и получите полную
                  информацию о проектах
                </p>
                <div className="flex w-full flex-nowrap gap-[30px] lg:w-1/2 xl:w-[40%]">
                  <SignUpLink
                    styles={
                      "lg:w-[60%] sm:w-[230px] py-5  w-[60%] !px-0 !justify-center"
                    }
                  />
                  <SignInLink
                    styles={
                      "lg:w-[40%] sm:w-[150px] py-5  w-[40%] !px-0 !justify-center"
                    }
                  />
                </div>
              </div>
              <Image
                src={buildProjectImage}
                alt="image"
                priority={true}
                width={0}
                height={0}
                sizes="100%"
                className="flex-1 object-contain lg:max-w-[600px] 2xl:max-w-[650px]"
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
