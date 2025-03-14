"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import Button from "../../components/Button";
import Image from "next/image";
import buildProjectImage from "../../assets/images/build-project.png";
import HomeBlogs from "../../components/sections/HomeBlogs";
import Spinner from "../../components/Spinner";
import {
  getProjectCategoryByBussinesType,
  getProjects,
} from "../api/projects/project";
import { getCities } from "../../utils/request";
import Filters from "../../components/Filters";
import Link from "next/link";
import Head from "next/head";
import IsLoginModal from "@/components/IsLoginModal";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityRel, setCityRel] = useState([]);
  const [role, setRole] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCatalog, setSelectedCatalog] = useState(null); // null for "Все проекты"
  const [catalogTheme, setCatalogTheme] = useState([]);
  const [is_active, setIsActive] = useState(true);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });

  const [condition, setCondition] = useState([
    { text: "Действующие", isClick: true, i: 1 },
    { text: "Завершенные", isClick: false, i: 2 },
  ]);

  useEffect(() => {
    fetchInitialData();
  }, []);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole || ""); // Set the role or an empty string if not found
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [selectedCity, selectedCatalog, is_active, filters, nextUrl]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const cities = await getCities();
      setCityRel(cities);

      const categories = await getProjectCategoryByBussinesType();
      const allProjectsOption = {
        id: null,
        name: "Все проекты",
        active: true,
      };
      setCatalogTheme([allProjectsOption, ...categories]);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const activeFilters = Object.keys(filters).reduce((acc, key) => {
        if (filters[key].value) acc[key] = true;
        return acc;
      }, {});
      const response = await getProjects({
        ...activeFilters,
        city_realization: selectedCity?.id,
        business_category_type: selectedCatalog || undefined,
        is_active,
        next: nextUrl,
      });
      setProjects(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };
  const chooseCatalog = (index) => {
    const updatedCatalog = catalogTheme.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setCatalogTheme(updatedCatalog);
    const selectedId = updatedCatalog.find((item) => item.active)?.id || null;
    setSelectedCatalog(selectedId);
  };

  const handleClick = (index) => {
    const updatedCondition = condition.map((item, i) => ({
      ...item,
      isClick: i === index,
    }));
    setCondition(updatedCondition);
    setIsActive(updatedCondition.some((item) => item.i === 1 && item.isClick));
  };

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Проекты"}</title>
        <meta
          name="description"
          content="Сбор денег для бизнеса, технологических, творческих и социальных проектов"
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[80px] sm:mt-[90px] lg:mt-[100px]">
        {/* Catalog buttons and dropdowns */}
        <div className="max-container mb-[30px] flex flex-col justify-between gap-y-5 pt-[30px] md:mb-[100px] md:pt-[100px] lg:flex-row">
          <div className="pt-3 md:pt-0">
            <ul className="lg:gap-15 mb-[20px] flex flex-wrap gap-1 md:mb-[30px] md:gap-10">
              {catalogTheme.map((item, index) => (
                <li
                  onClick={() => chooseCatalog(index)}
                  key={index}
                  className={`cursor-pointer text-nowrap border-b-2 border-b-transparent px-2 pb-[2px] text-[14px] leading-[110%] text-gray-dark md:px-[21.5px] md:text-base ${
                    item.active && "!border-b-primary text-primary"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="flex flex-row items-center gap-4">
              {condition.map((item, index) => (
                <div
                  key={index}
                  className="custom-radio flex cursor-pointer items-center gap-x-2"
                  onClick={() => handleClick(index)}
                >
                  <div
                    className={`h-[17px] w-[17px] rounded-full border-[1px] ${
                      item.isClick ? "border-[#7aa371]" : "border-[#ebebeb]"
                    }`}
                  >
                    <span
                      className={`block h-full w-full rounded-full ${
                        item.isClick ? "bg-[#7aa371]" : "bg-[#c7c7c7]"
                      }`}
                    ></span>
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:mr-5 sm:w-max">
            <Filters
              filters={filters}
              setFilters={setFilters}
              cityName={selectedCity?.name || "Регион"}
              cities={cityRel}
              setSelectedCity={setSelectedCity}
            />
          </div>
        </div>

        {loading && <Spinner loading={loading} />}
        {!loading && projects && (
          <div className="max-container mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
            <IsLoginModal
              isActive={isActiveModal}
              setIsActive={setIsActiveModal}
            />
            {projects?.results?.map((card, index) => (
              <ProjectCard
                key={index}
                card={card}
                isGrid={true}
                setIsActive={setIsActiveModal}
              />
            ))}
          </div>
        )}
        {projects?.results?.length > 0 ? (
          <div className="max-container mb-[100px] flex items-center justify-center md:mb-[150px]">
            <Button
              text="Загрузить еще"
              onclick={() => setNextUrl(projects.next)}
              primary
              style={"!py-5 text-sm w-[230px] font-light leading-[24px]"}
            />
          </div>
        ) : (
          ""
        )}

        <div className="bg-secondary py-[30px] md:py-[100px]">
          <div className="max-container flex flex-col justify-between gap-[30px] lg:flex-row">
            <div className="flex flex-col lg:items-start lg:text-left">
              <h2 className="mb-[10px] text-[28px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[36px] lg:text-[42px] xl:text-[64px]">
                Создай собственный проект
              </h2>
              <p className="wrap-balance mb-[30px] max-w-[550px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:!text-[26px] lg:text-[32px]">
                Создание собственного проекта на такой платформе - это шаг,
                который может привести вас к успеху.
              </p>
              {role.toLowerCase() === "business" && (
                <Link href={"/profile/create"}>
                  <Button
                    text="Создать проект"
                    style={"font-light text-sm !py-5 w-[230px]"}
                    primary
                    extraSmall
                  />
                </Link>
              )}
            </div>
            <Image
              src={buildProjectImage}
              alt="image"
              priority={true}
              width={0}
              height={0}
              className="md:h-80max-w-full object-contain lg:h-auto lg:!max-w-[500px] 2xl:max-w-[700px]"
            />
          </div>
        </div>

        <div className="max-container mt-[60px] md:mt-[150px]">
          <HomeBlogs />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
