"use client";
import { getProjects } from "@/app/api/projects/project";
import { useEffect, useState } from "react";
import SwiperSection from "./SwiperSection";

const PopularProjects = () => {
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
  return (
    <div className="max-container">
      <h2 className="section-title mb-[30px] lg:mb-[60px] 2xl:mb-[100px]">
        Популярные проекты
      </h2>

      <SwiperSection projects={projects} loading={loading} />
    </div>
  );
};

export default PopularProjects;
