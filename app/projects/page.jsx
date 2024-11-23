"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import Button from "../../components/Button";
import Image from "next/image";
// import buildProjectImage from "@/assets/images/build-project.png";
import buildProjectImage from "../../assets/images/build-project.png";
// import HomeBlogs from "@/components/sections/HomeBlogs";
import HomeBlogs from "../../components/sections/HomeBlogs";
// import Spinner from "@/components/Spinner";
import Spinner from "../../components/Spinner";
import {
  getProjectCategoryByBussinesType,
  getProjects,
} from "../api/projects/project";
import { getCities } from "@/utils/request";
import Filters from "../../components/Filters";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityRel, setCityRel] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCatalog, setSelectedCatalog] = useState(null); // null for "Все проекты"
  const [catalogTheme, setCatalogTheme] = useState([]);
  const [is_active, setIsActive] = useState(true);

  useEffect(() => {
    fetchProjectsWithFromAPI();
    fetchCitiesWithFromAPI();
    fetchBussinesCategoryWithFromAPI();
  }, []);

  useEffect(() => {
    fetchProjectsWithFromAPI();
  }, [selectedCity, selectedCatalog, is_active]);

  function fetchProjectsWithFromAPI() {
    setLoading(true);
    getProjects({
      city_realization: selectedCity?.id,
      business_category_type: selectedCatalog || undefined, // Omit if null
      is_active,
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

  function fetchBussinesCategoryWithFromAPI() {
    getProjectCategoryByBussinesType()
      .then((response) => {
        // Add "Все проекты" as the first option
        const allProjectsOption = {
          id: null,
          name: "Все проекты",
          active: true,
        };
        const updatedCatalog = [
          allProjectsOption,
          ...response.map((item) => ({
            ...item,
            active: false,
          })),
        ];
        setCatalogTheme(updatedCatalog);
        setSelectedCatalog(null); // Default to "Все проекты"
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const chooseCatalog = (index) => {
    const updatedCatalog = catalogTheme.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setCatalogTheme(updatedCatalog);
    const selectedId = updatedCatalog.find((item) => item.active)?.id || null;
    setSelectedCatalog(selectedId);
  };

  const [condition, setCondition] = useState([
    { text: "Действующие", isClick: true, i: 1 },
    { text: "Завершенные", isClick: false, i: 2 },
  ]);

  const handleClick = (index) => {
    const updatedCondition = condition.map((item, i) => ({
      ...item,
      isClick: i === index,
    }));
    setCondition(updatedCondition);

    // Update is_active based on `i === 1`
    setIsActive(updatedCondition.some((item) => item.i === 1 && item.isClick));
  };

  return (
    <section>
      {/* Catalog buttons and dropdowns */}
      <div className="max-container mb-[30px] mt-[30px] flex flex-col flex-wrap-reverse justify-between gap-y-5 md:mb-[100px] md:mt-[100px] lg:flex-row">
        <div className="pt-3 md:pt-0">
          <ul className="lg:gap-15 mb-[20px] flex gap-1 md:mb-[30px] md:gap-10">
            {catalogTheme.map((item, index) => (
              <li
                onClick={() => chooseCatalog(index)}
                key={index}
                className={`cursor-pointer text-nowrap border-b-2 border-b-transparent px-2 pb-[2px] text-[8px] leading-[110%] md:px-[21.5px] md:text-base ${item.active && "border-b-2 border-b-primary text-primary"}`}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-row items-center gap-4">
            {condition.map((item, index) => (
              <>
                {item.isClick ? (
                  <div
                    className="custom-radio flex cursor-pointer items-center gap-x-2"
                    onClick={() => handleClick(index, false)}
                  >
                    <div
                      className={`flex h-[17px] w-[17px] items-center justify-center rounded-full border-[1px] border-[#ebebeb]`}
                    >
                      <span className="block h-full w-full rounded-full bg-[#7aa371]"></span>
                    </div>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div
                    className="custom-radio flex cursor-pointer items-center gap-x-2"
                    onClick={() => handleClick(index, true)}
                  >
                    <div
                      className={`h-[17px] w-[17px] rounded-full border-[1px] border-[#ebebeb]`}
                    >
                      <span className="block h-full w-full rounded-full bg-[#c7c7c7]"></span>
                    </div>
                    <span>{item.text}</span>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        <Filters
          cityName={selectedCity?.name || "Город"}
          cities={cityRel}
          setSelectedCity={setSelectedCity}
         
        />
      </div>

      {loading && <Spinner loading={loading} />}
      {!loading && projects && (
        <div className="max-container mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
          {projects?.results?.map((card, index) => (
            <ProjectCard key={index} card={card} isGrid={false} />
          ))}
        </div>
      )}

      <div className="max-container mb-[100px] flex items-center justify-center md:mb-[150px]">
        <Button text="Загрузить еще" primary />
      </div>

      <div className="bg-secondary py-[60px]">
        <div className="max-container flex justify-between md:flex-col xl:flex-row">
          <div className="flex flex-col items-start md:items-center md:text-center xl:items-start xl:text-left">
            <h2 className="mb-[6px] text-[12px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
              Создай собственный проект
            </h2>
            <p className="wrap-balance mb-[12px] max-w-[550px] text-[6px] font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
              Создание собственного проекта на такой платформе - это шаг,
              который может привести вас к успеху.
            </p>
            <Button
              text="Создать проект"
              // onclick={() => router.push("/profile/create")}
              primary
              extraSmall
            />
          </div>
          <Image
            src={buildProjectImage}
            alt="image"
            priority={true}
            width={0}
            height={0}
            sizes="100%"
            className="max-w-[128px] flex-1 object-contain md:h-80 md:max-w-full lg:h-auto xl:max-w-[700px]"
          />
        </div>
      </div>

      <div className="max-container mt-[60px] md:mt-[150px]">
        <HomeBlogs />
      </div>
    </section>
  );
};

export default ProjectsPage;
