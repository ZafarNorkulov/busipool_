"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { projects } from "@/constants";
import { Autoplay } from "swiper/modules";
import "@/assets/styles/globals.css";

import { getProjects } from "../app/api/projects/project";

import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";
import Spinner from "./Spinner";

export default function SwiperSection() {
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
    <>
      {loading && <Spinner loading={loading} />}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        mousewheel={true}
        css-mode="true"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          390: {
            slidesPerView: 1.2,
          },

          768: {
            slidesPerView: 2,
          },
          890: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1480: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper mb-[60px] !p-1 min-[750px]:h-[450px] md:h-[650px]"
      >
        {!loading &&
          projects &&
          projects?.results?.map((card, index) => (
            <SwiperSlide key={index} className="max-w-[415px]">
              <ProjectCard card={card} isGrid={true} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
