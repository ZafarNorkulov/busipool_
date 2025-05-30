"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "../../../components/ProjectCard";
import Button from "@/components/Button";
import Filters from "@/components/Filters";
import Spinner from "@/components/Spinner";
import IsLoginModal from "@/components/IsLoginModal";
import HomeBlogs from "@/components/sections/HomeBlogs";

import { getCities, getProjectTypes } from "@/utils/request";
import { getProjectBusinessType } from "@/app/api/projects/project";
import { useAppSelector } from "@/store";

const BusinessType = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [selectedTypeName, setSelectedTypeName] = useState("");
  const [filters, setFilters] = useState({
    is_popular: { value: false, title: "По популярности" },
    price_max: { value: false, title: "Подороже" },
    price_min: { value: false, title: "Подешевле" },
    start_date: { value: false, title: "Новейший" },
    end_date: { value: false, title: "Самый первый" },
  });
  const [page, setPage] = useState(1);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [role, setRole] = useState("");

  const auth = useAppSelector((state) => state.auth);

  const { slug } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Функция загрузки проектов с учётом фильтров и пагинации
  const fetchProjects = async (append = false, pageNumber = 1) => {
    try {
      setLoading(true);

      // Собираем активные фильтры
      const activeFilters = Object.keys(filters).reduce((acc, key) => {
        if (filters[key].value) acc[key] = true;
        return acc;
      }, {});

      const options = {
        ...activeFilters,
        search: search || null,
        city_realization: selectedCity?.id || null,
        page: pageNumber,
      };

      const response = await getProjectBusinessType({
        options,
        slug,
      });

      if (append && projects?.results) {
        setProjects({
          ...response,
          results: [...projects.results, ...response.results],
        });
      } else {
        setProjects(response);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Загрузка городов
  const fetchCities = async () => {
    try {
      const cities = await getCities();
      setCities(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Загрузка типов бизнеса
  const fetchBusinessTypes = async () => {
    try {
      const types = await getProjectTypes();
      setBusinessTypes(types);
    } catch (error) {
      console.error("Error fetching business types:", error);
    }
  };

  // Инициализация при монтировании компонента
  useEffect(() => {
    // Получаем page из query
    const pageFromQuery = Number(searchParams.get("page")) || 1;
    setPage(pageFromQuery);

    fetchProjects(false, pageFromQuery);
    fetchCities();
    fetchBusinessTypes();

    if (typeof window !== "undefined") {
      setRole(localStorage.getItem("role") || "");
    }
  }, []);

  // Обновляем выбранное имя типа бизнеса при смене slug или businessTypes
  useEffect(() => {
    if (businessTypes.length > 0 && slug) {
      const selected = businessTypes.find((b) => b.slug === slug);
      if (selected) setSelectedTypeName(selected.name);
    }
  }, [businessTypes, slug]);

  // Перезагружаем проекты при смене фильтров, города или поиска (сброс на 1-ю страницу)
  useEffect(() => {
    setPage(1);
    fetchProjects(false, 1);
    updatePageQuery(1);
  }, [filters, selectedCity, search]);

  // Обновление page из query параметров при навигации
  useEffect(() => {
    const currentPage = Number(searchParams.get("page")) || 1;
    setPage(currentPage);
    fetchProjects(false, currentPage);
  }, [searchParams]);

  // Функция обновления query параметра page в URL
  const updatePageQuery = (newPage) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", newPage.toString());
    const newPath = `?${params.toString()}`;
    console.log("Navigating to:", newPath);
    router.push(newPath);
  };

  // Обработчик нажатия "Загрузить еще"
  const handleLoadMore = () => {
    const nextPage = page + 1;
    updatePageQuery(nextPage);
    setPage(nextPage);
    fetchProjects(true, nextPage);
  };

  return (
    <section className="mt-[80px] sm:mt-[90px] md:mt-[95px] lg:mt-[80px]">
      <div
        className={`flex ${
          auth?.isAuthenticated && "h-screen lg:h-[calc(100vh-30px)]"
        } flex-col justify-between`}
      >
        <div className="max-container py-[30px] lg:pt-[50px] 2xl:pb-[100px]">
          <h2 className="section-title mb-[20px] !text-left md:mb-[30px]">
            {selectedTypeName}
          </h2>
          <p className="text-base font-light leading-[130%] text-gray-light md:text-xl md:leading-[120%] lg:text-2xl 2xl:text-[32px]">
            Если вы хотите найти инвестиции для масштабирования своего бизнеса,
            разместите информацию о вашем проекте в каталоге, чтобы инвесторы
            могли увидеть его.
          </p>
        </div>

        {auth?.isAuthenticated && role === "Компания" && (
          <div className="mb-[60px] bg-secondary px-5 py-[30px] lg:py-[60px]">
            <div className="max-container flex flex-col justify-between lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] xl:text-[40px] 2xl:text-[64px]">
                  Хотите попасть в каталог?
                </h2>
                <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light lg:mb-[60px] xl:text-[28px] 2xl:text-[32px]">
                  Заполните форму и создайте проект на нашем сайте
                </p>
                <Link href={"/profil/sozdat"}>
                  <Button text="Создать проект" primary />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-container">
        <Filters
          search={search}
          setSearch={setSearch}
          activeSearch={true}
          filters={filters}
          setFilters={setFilters}
          cityName={selectedCity?.name || "Регион"}
          cities={cities}
          setSelectedCity={setSelectedCity}
        />
      </div>

      <div className="max-container">
        <div className="mb-[100px] md:mb-[150px]">
          {loading && <Spinner loading={loading} />}
          {!loading && projects?.results?.length > 0 ? (
            <>
              <div className="mb-[60px] mt-[30px] grid grid-cols-12 gap-[8px] md:mb-[30px] md:mt-[100px] md:gap-[20px]">
                <IsLoginModal
                  isActive={isActiveModal}
                  setIsActive={setIsActiveModal}
                />
                {projects.results.map((card, idx) => (
                  <div
                    key={idx}
                    className="col-span-6 sm:col-span-4 lg:col-span-3"
                  >
                    <ProjectCard
                      card={card}
                      isGrid={false}
                      setIsActive={setIsActiveModal}
                    />
                  </div>
                ))}
              </div>

              {projects.next && (
                <div className="flex items-center justify-center">
                  <Button
                    text="Загрузить еще"
                    primary
                    onclick={handleLoadMore}
                  />
                </div>
              )}
            </>
          ) : (
            !loading && (
              <div className="flex h-[100px] items-center justify-center">
                <p className="text-center text-xl text-gray-dark">Не найдено</p>
              </div>
            )
          )}
        </div>
      </div>

      <HomeBlogs />
    </section>
  );
};

export default BusinessType;
