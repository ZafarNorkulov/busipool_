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
import { getCompanySubCategoryByType } from "@/app/api/company/company";
import { getProjects } from "@/app/api/projects/project";
import IsLoginModal from "@/components/IsLoginModal";

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
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });

  // Fetch token and initial data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }

    fetchCitiesWithFromAPI();
    fetchProjectsWithFromAPI();
  }, []);

  // Fetch projects on filter change
  useEffect(() => {
    fetchProjectsWithFromAPI();
  }, [selectedCity, search, filters, selectedSub]);

  // Fetch subcategories
  useEffect(() => {
    if (id) {
      getCompanySubCategoryByType(id)
        .then((res) => setSubCategories(res))
        .catch((error) => console.error(error));
    }
  }, [id]);

  useEffect(() => {
    if (subCategories.length > 0) {
      setSelectedSub(subCategories[0]);
    }
  }, [subCategories]);

  const fetchProjectsWithFromAPI = () => {
    setLoading(true);
    const cityRealization = selectedCity?.id || null;
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
      .then((response) => setProjects(response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const fetchCitiesWithFromAPI = () => {
    getCities()
      .then((response) => setCityRel(response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>BUSIPOOL | Компания</title>
        <meta
          name="description"
          content="Сбор денег для бизнеса, технологических, творческих и социальных проектов"
        />
        <link rel="icon" href="/Fav.png" />
      </Head>

      <section className="mt-[130px] sm:mt-[150px] md:mt-[170px] lg:mt-[185px]">
        <div className="max-container mb-[70px] sm:mb-[100px]">
          <h2 className="section-title mb-[30px] !text-left">
            {selectedSub?.name || "Подкатегории"}
          </h2>
          <p className="mb-[30px] font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
            Если вы хотите начать инвестировать в стартапы и малые бизнесы, то
            зарегристрируйтесь или войдите в аккаунт, чтобы увидеть больше
            информации о проектах.
          </p>

          <div className="company-subs flex gap-[30px] overflow-x-auto pb-[30px] sm:pb-0">
            {subCategories.map((e, index) => (
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
              <div className="w-full">
                <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] lg:text-[52px] 2xl:text-[64px]">
                  Хотите больше выгоды?
                </h2>
                <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                  Зарегистрируйтесь на нашей платформе и получите полную
                  информацию о проектах
                </p>
                <div className="flex w-full flex-nowrap gap-[30px] lg:w-[50%] xl:w-full">
                  <SignUpLink styles="lg:w-[60%] sm:w-[230px] py-5 w-[60%] !px-0 !justify-center" />
                  <SignInLink styles="lg:w-[40%] sm:w-[150px] py-5 w-[40%] !px-0 !justify-center" />
                </div>
              </div>
              <Image
                src={buildProjectImage}
                alt="image"
                width={600}
                height={400}
                className="mx-auto flex-1 object-contain lg:max-w-[600px] 2xl:max-w-[650px]"
              />
            </div>
          </div>
        )}

        <div className="max-container">
          <Filters
            filters={filters}
            setFilters={setFilters}
            cityName={selectedCity?.name || "Регион"}
            cities={cityRel}
            setSelectedCity={setSelectedCity}
            activeSearch={true}
            setSearch={setSearch}
            search={search}
          />

          {loading ? (
            <Spinner loading={loading} />
          ) : projects?.results?.length > 0 ? (
            <div className="mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
              <IsLoginModal
                isActive={isActiveModal}
                setIsActive={setIsActiveModal}
              />
              {projects.results.map((card, index) => (
                <ProjectCard
                  key={index}
                  card={card}
                  setIsActive={setIsActiveModal}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-light">
              Проекты не найдены.
            </p>
          )}

          {projects?.results?.length > 0 && token && (
            <div className="mb-[100px] flex items-center justify-center md:mb-[150px]">
              <Button text="Загрузить еще" primary />
            </div>
          )}
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default InvestorPage;
