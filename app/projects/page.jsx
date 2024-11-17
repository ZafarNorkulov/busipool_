"use client";
import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProjectCard from "../../components/ProjectCard";
import Button from "../../components/Button";
import Image from "next/image";
// import buildProjectImage from "@/assets/images/build-project.png";
import buildProjectImage from "../../assets/images/build-project.png";
// import HomeBlogs from "@/components/sections/HomeBlogs";
import HomeBlogs from "../../components/sections/HomeBlogs";
// import { fetchProjects } from "@/utils/requests";
import { fetchProjects } from "../../utils/requests";
// import Spinner from "@/components/Spinner";
import Spinner from "../../components/Spinner";
import { getProjects } from "../api/projects/project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsWithFromAPI()
  }, [loading]);

  function fetchProjectsWithFromAPI() {
    getProjects().then((response) => {
      setProjects(response);
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }
    ).finally(() => {
      setLoading(false);
    });
  }

  // const [catalogTheme, setCatalogTheme] = useState([
  //   { label: "Все проекты", active: true },
  //   { label: "Технологии", active: false },
  //   { label: "Бизнес", active: false },
  //   { label: "Инвестиции", active: false },
  // ]);

  // const chooseCatalog = (index) => {
  //   const updatedCatalog = catalogTheme.map((item, i) => ({
  //     ...item,
  //     active: i === index,
  //   }));
  //   setCatalogTheme(updatedCatalog);
  // };

  return (
    <section>
      {/* Catalog buttons and dropdowns */}
      <div className="max-container mb-[30px] mt-[30px] flex flex-wrap-reverse justify-between gap-y-5 md:mb-[100px] md:mt-[100px]">
        {/* <div className="pt-3 md:pt-0">
          <ul className="mb-[20px] flex gap-1 md:mb-[30px] md:gap-[50px]">
            {catalogTheme.map((item, index) => (
              <li
                onClick={() => chooseCatalog(index)}
                key={index}
                className={`cursor-pointer text-nowrap px-2 pb-[2px] text-[8px] leading-[110%] md:px-[21.5px] md:text-base ${item.active && "border-b-2 border-primary font-bold text-primary"}`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 md:gap-[30px]">
            <div className="flex items-center gap-[8px]">
              <input
                type="radio"
                name="project"
                id="processing"
                className="peer h-[6px] w-[6px] border-0 accent-primary outline-0 md:h-[17px] md:w-[17px]"
              />
              <label
                htmlFor="processing"
                className="cursor-pointer text-[8px] leading-[110%] peer-checked:font-bold peer-checked:text-gray-dark md:text-base"
              >
                Действующие
              </label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="radio"
                name="project"
                id="finished"
                className="peer h-[6px] w-[6px] border-0 accent-primary outline-0 md:h-[17px] md:w-[17px]"
              />
              <label
                htmlFor="finished"
                className="cursor-pointer text-[8px] leading-[110%] peer-checked:font-bold peer-checked:text-gray-dark md:text-base"
              >
                Завершенные
              </label>
            </div>
          </div>
        </div> */}

        <div className="flex gap-1 sm:flex-col xl:flex-row xl:gap-[30px]">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-[5px] bg-white py-2 pl-4 pr-2 text-[10px] font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
                По популярности
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-3 w-3 text-gray-light md:h-5 md:w-5"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-[5px] bg-white py-2 pl-4 pr-2 text-[10px] font-bold text-gray-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
                Вся Россия
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-3 w-3 text-gray-light md:h-5 md:w-5"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                  >
                    Lorem, ipsum.
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>

      {loading && <Spinner loading={loading} />}
      {!loading && projects && (
        <div className="max-container mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
          {projects?.results?.map((card, index) => (
            <ProjectCard key={index} card={card} isGridItem />
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
