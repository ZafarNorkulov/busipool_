"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import SwiperSection from "../../components/SwiperSection";
import Link from "next/link";
import { getProjects } from "@/app/api/projects/project";
import useWindowSize from "@/hooks/useWindowSize";

const HomeProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchProjectsFromAPI() {
    getProjects({ is_popular: true }) //
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

  useEffect(() => {
    fetchProjectsFromAPI();
  }, [loading]);

  const { width } = useWindowSize();

  return (
    <section className="max-container pb-[100px] pt-[100px] md:pb-[150px] md:pt-[150px]">
      <h2 className="section-title mb-[30px] lg:mb-[60px] 2xl:mb-[100px]">
        Популярные проекты
      </h2>

      <SwiperSection projects={projects} loading={loading} />
      {!loading &&
        ((width >= 1480 && projects?.length >= 4) ||
          (width < 1480 && width >= 1024 && projects?.length >= 3) ||
          (width < 1024 && projects?.length >= 2)) && (
          <div className="mb-[100px] flex flex-1 flex-nowrap justify-center gap-[10px] sm:gap-[30px]">
            <Link href={"/projects"} className="w-[calc(50%-5px)] sm:w-max">
              <Button
                text="Все проекты"
                primary
                fullWidth
                style={"!py-5 text-sm"}
              />
            </Link>
            <Link
              href={"/sign-in"}
              className="w-[calc(50%-5px)] sm:w-max"
            >
              <Button text="Создать свой" fullWidth style={"!py-5 text-sm"} />
            </Link>
          </div>
        )}
    </section>
  );
};

export default HomeProjects;
