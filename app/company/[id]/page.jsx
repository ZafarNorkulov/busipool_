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
import { SlMagnifier } from "react-icons/sl";
import SignUpLink from "@/components/SignUpLink";
import SignInLink from "@/components/SignInLink";
import {
  getProject,
  getProjectCategory,
  getProjectCategoryById,
  getRealization,
} from "@/app/api/projects/project";

const InvestorPage = () => {
  const [token,setToken] = useState(null);
  const router = useRouter();
  const { id } = useParams();
  const investor = investors[id - 1] || investors[0];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectCategories, setProjectCategories] = useState([]);
  const [title, setTitle] = useState("Все проекты");
  const [realization, setRealization] = useState([]);

  useEffect(() => {
    getProjectsWithId();
    getProjectCategories();
    geRealizationAPi();
  }, [loading]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token")
      setToken(storedToken)
    }
  }, []);
  

  const getProjectCategories = async () => {
    getProjectCategory()
      .then((response) => {
        setProjectCategories(response);

        setTitle(response[0].name);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const geRealizationAPi = () => {
    getRealization().then((response) => {
      setRealization(response);
    });
  };

  const getProjects = () => {
    getProject(id)
      .then((response) => {
        console.log("id", response);
        setProjects(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getProjectsWithId = () => {
    getProjectCategoryById(id)
      .then((response) => {
        console.log("id", response);
        setProjects(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section>
      <div className="max-container py-[60px] md:pb-[170px] md:pt-[100px]">
        <h2 className="section-title mb-[30px] !text-left">
          {projects?.results && projects?.results[0]?.category?.name}
        </h2>
        <p className="mb-[30px] font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
          Если вы хотите начать инвестировать в стартапы и малые бизнесы, то
          зарегристрируйтесь или войдите в аккаунт, чтобы увидеть больше
          информации о проектах.
        </p>

        <div className="flex snap-x snap-mandatory gap-[30px] overflow-x-scroll md:flex-wrap md:overflow-auto">
          {projectCategories.map((e, index) => (
            <InvestorPageButton key={index} investor={e} id={id} />
          ))}
        </div>
      </div>

      {!token && (
        <div className="mb-[60px] bg-secondary py-[30px] md:py-[60px]">
          <div className="flex flex-col justify-between max-container xl:flex-row">
            <div className="flex-1">
              <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
                Хотите больше выгоды?
              </h2>
              <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                Зарегистрируйтесь на нашей платформе и получите полную
                информацию о проектах
              </p>
              <div className="flex gap-[30px]">
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

      <div className="max-container mb-[30px] flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
        <div className="flex gap-[10px] xl:gap-[30px]">
          <Menu as="div" className="relative flex-1 text-left md:flex-none">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-nowrap rounded-[5px] border border-gray-dark bg-white py-[20px] pl-4 pr-2 text-[14px] font-bold text-gray-dark hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
                По популярности
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-dark"
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
          <Menu as="div" className="relative flex-1 text-left md:flex-none">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-nowrap rounded-[5px] border border-gray-dark bg-white py-[20px] pl-4 pr-2 text-[14px] font-bold text-gray-dark hover:bg-gray-50 md:py-[15px] md:pl-[30px] md:pr-[22px] md:text-base">
                Вся Россия
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-dark"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in md:w-52"
            >
              {realization.map((item, index) => (
                <div className="py-1" key={index}>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                </div>
              ))}

              {/* <div className="py-1">
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
              </div> */}
            </MenuItems>
          </Menu>
        </div>

        <div className="flex items-center overflow-hidden rounded-[3px] border border-gray-dark hover:bg-gray-50">
          <input
            type="search"
            placeholder="Поиск"
            className="flex-1 border-none p-[20px] text-[14px] font-bold leading-[110%] text-gray-dark outline-none"
          />
          <button className="border-l border-gray-dark p-[20px]">
            <SlMagnifier />
          </button>
        </div>
      </div>

      {loading && <Spinner loading={loading} />}
      {!loading && projects && (
        <div className="max-container mb-[60px] grid grid-cols-2 gap-[8px] md:mb-[30px] md:grid-cols-3 md:gap-[20px] wide:grid-cols-4">
          {projects?.results?.map((card, index) => (
            <div className="">
              <ProjectCard key={index} card={card} isGrid={false} />
            </div>
          ))}
        </div>
      )}

      <div className="max-container mb-[100px] flex items-center justify-center md:mb-[150px]">
        <Button text="Загрузить еще" primary />
      </div>

      <HomeBlogs />
    </section>
  );
};

export default InvestorPage;
