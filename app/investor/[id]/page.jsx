"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard";
import Button from "@/components/Button";
import Image from "next/image";
import buildProjectImage from "@/assets/images/build-project.png";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Spinner from "@/components/Spinner";
import { getCities, getProjectTypes } from "@/utils/request";
import { getProjectBusinessType } from "@/app/api/projects/project";
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import Filters from "@/components/Filters";
import { useAppSelector } from "@/store";
import IsLoginModal from "@/components/IsLoginModal";

const BusinessType = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [cityRel, setCityRel] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Выберите город"); // Default placeholder
  const { id } = useParams();
  const [businessType, setBusinessType] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [role, setRole] = useState("");
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });
  const [nextUrl, setNextUrl] = useState(null);

  const auth = useAppSelector((state) => state.auth);

  const fetchProjectsFromDB = async () => {
    try {
      setLoading(true);
      const activeFilters = Object.keys(filters).reduce((acc, key) => {
        if (filters[key].value) acc[key] = true;
        return acc;
      }, {});
      const options = {
        ...activeFilters,
        search,
        city_realization: selectedCity?.id,
        next: nextUrl,
      };
      const response = await getProjectBusinessType({
        options,
        id,
      });
      setProjects(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectsFromDB();
  }, [selectedCity, search, filters, nextUrl]);
  useEffect(() => {
    fetchCitiesFromDB();
    getProjectTypes().then((res) => setBusinessType(res));
    fetchProjectsFromDB();

    if (typeof window !== "undefined") {
      setRole(localStorage.getItem("role") ?? "");
      localStorage.getItem("role");
    }
  }, []);
  const fetchCitiesFromDB = async () => {
    try {
      setLoading(true);
      const cities = await getCities();
      setCityRel(cities);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (businessType && id) {
      const selectedBusiness = businessType.find((item) => item.id == id);
      if (selectedBusiness) {
        setSelectedType(selectedBusiness.name);
      }
    }
  }, [businessType, id]);
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Инвестор"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[70px] sm:mt-[90px] md:mt-[95px] lg:mt-[105px]">
        <div className="max-container pb-[30px] pt-[60px] md:py-[100px]">
          <h2 className="section-title mb-[20px] !text-left md:mb-[30px]">
            {selectedType}
          </h2>
          <p className="text-base font-light leading-[130%] text-gray-light md:text-[32px] md:leading-[120%]">
            Если вы хотите найти инвестиции для запуска своего бизнеса,
            разместите информацию о вашем проекте в каталоге, чтобы инвесторы
            могли увидеть его.
          </p>
        </div>
        {auth?.isAuthenticated && (
          <div className="mb-[60px] bg-secondary px-5 py-[30px] md:py-[60px]">
            <div className="max-container flex flex-col justify-between xl:flex-row">
              <div className="flex-1">
                <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
                  Хотите попасть в каталог?
                </h2>
                <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                  Заполните форму и создайте проект на нашем сайте
                </p>
                {role.toLowerCase() === "business" && (
                  <Link href={"/profile/create"}>
                    <Button text="Создать проект" primary />
                  </Link>
                )}
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
        <div className="max-container">
          <Filters
            search={search}
            setSearch={setSearch}
            activeSearch
            filters={filters}
            setFilters={setFilters}
            cityName={selectedCity?.name || "Регион"}
            cities={cityRel}
            setSelectedCity={setSelectedCity}
          />
        </div>
        <div className="max-container">
          {loading && <Spinner loading={loading} />}
          {!loading && projects?.results?.length > 0 && (
            <div className="mb-[60px] mt-[30px] grid grid-cols-12 gap-[8px] md:mb-[30px] md:mt-[100px] md:gap-[20px]">
              <IsLoginModal
                isActive={isActiveModal}
                setIsActive={setIsActiveModal}
              />
              {projects.results.map((card, index) => (
                <div
                  className="col-span-6 sm:col-span-4 lg:col-span-3"
                  key={index}
                >
                  <ProjectCard
                    key={index}
                    card={card}
                    isGrid={false}
                    setIsActive={setIsActiveModal}
                  />
                </div>
              ))}
            </div>
          )}
          {projects?.results?.length > 9 ? (
            <div className="max-container mb-[100px] flex items-center justify-center md:mb-[150px]">
              <Button
                text="Загрузить еще"
                primary
                onclick={() => setNextUrl(projects.next)}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default BusinessType;
