"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import {
  getProjectCategoryByBussinesType,
  getProjects,
} from "@/app/api/projects/project";
import { getCities } from "@/utils/request";
import Filters from "@/components/Filters";
import IsLoginModal from "@/components/IsLoginModal";

const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityRel, setCityRel] = useState([]);

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
    <div>
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
          {/* tabs   */}
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
      {projects ? (
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
      ) : (
        !loading && (
          <div className="flex h-[100px] items-center justify-center">
            <p className="text-center text-xl text-gray-dark">Не найдено</p>
          </div>
        )
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
    </div>
  );
};

export default ProjectsComponent;
