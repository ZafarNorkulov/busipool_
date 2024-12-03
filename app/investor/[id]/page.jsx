"use client";
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
import { getCities, getProjectTypes } from "@/utils/request";
import { getProjectBusinessType } from "@/app/api/projects/project";
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

const BusinessType = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [cityRel, setCityRel] = useState(null);
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("Выберите город"); // Default placeholder
  const { id } = useParams();
  const [businessType, setBusinessType] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchProjectsFromDB = async () => {
      try {
        const projectsFromDB = await getProjectBusinessType({
          search,
          cityRel,
          id,
        });
        setProjects(projectsFromDB?.results);
      } catch (error) {
        console.error("Error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };

    if (!projects?.length && loading) {
      fetchProjectsFromDB();
    }
  }, [projects?.length, loading]);
  useEffect(() => {
    getCities().then((res) => setCities(res));
    getProjectTypes().then((res) => setBusinessType(res));
  }, []);

  useEffect(() => {
    if (businessType && id) {
      const selectedBusiness = businessType.find((item) => item.id == id);
      if (selectedBusiness) {
        setSelectedType(selectedBusiness.name);
      }
    }
  }, [businessType, id]);

  useEffect(() => {
    if (cities?.length) {
      setCityRel(cities[0]?.id); // Birinchi shahar ID sini o'rnatish
      setSelectedCity(cities[0]?.name); // Birinchi shahar nomini o'rnatish
    }
  }, [cities]);

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
      <section className="mt-[30px] md:mt-[90px] lg:mt-[100px]">
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

        <div className="mb-[60px] bg-secondary py-[30px] md:py-[60px]">
          <div className="max-container flex flex-col justify-between xl:flex-row">
            <div className="flex-1">
              <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
                Хотите попасть в каталог?
              </h2>
              <p className="mb-[30px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:text-[32px]">
                Заполните форму и создайте проект на нашем сайте
              </p>
              <Link href={"/profile/create"}>
                <Button text="Создать проект" primary />
              </Link>
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
                  {selectedCity}
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
                  {cities?.map((city, idx) => (
                    <MenuItem key={idx}>
                      <span
                        onClick={() => {
                          setCityRel(city?.id); // Tanlangan shahar ID sini o'rnatish
                          setSelectedCity(city?.name); // Tanlangan shahar nomini o'rnatish
                        }}
                        className="block px-2 py-1 text-[8px] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 md:px-4 md:py-2 md:text-sm"
                      >
                        {city?.name}
                      </span>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>

          <div className="flex items-center overflow-hidden rounded-[3px] border border-gray-dark hover:bg-gray-50">
            <input
              type="search"
              placeholder="Поиск"
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none p-[20px] text-[14px] font-bold leading-[110%] text-gray-dark outline-none"
            />
            <button className="border-l border-gray-dark p-[20px]">
              <SlMagnifier />
            </button>
          </div>
        </div>

        {loading && <Spinner loading={loading} />}
        {!loading && projects && (
          <div className="max-container mb-[60px] grid grid-cols-12 gap-[8px] md:mb-[30px] md:gap-[20px]">
            {projects?.map((card, index) => (
              <div
                className="col-span-6 sm:col-span-4 lg:col-span-3"
                key={index}
              >
                <ProjectCard key={index} card={card} isGrid={false} />
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

export default BusinessType;
