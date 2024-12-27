"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { projects } from "@/constants";
import { Autoplay, Scrollbar } from "swiper/modules";
import "@/assets/styles/globals.css";

import { getProjects } from "../app/api/projects/project";

import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";
import Spinner from "./Spinner";
import useWindowSize from "@/hooks/useWindowSize";
import IsLoginModal from "@/components/IsLoginModal";

export default function SwiperSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const { width } = useWindowSize();

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
      <IsLoginModal isActive={isActiveModal} setIsActive={setIsActiveModal} />
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        grabCursor={true}
        mousewheel={true}
        css-mode="true"
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
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
        modules={[width < 768 ? Scrollbar : Autoplay]}
        className="mySwiper mb-[60px] !p-1 min-[750px]:h-[450px] md:h-[650px]"
      >
        {!loading &&
          projects &&
          projects?.results?.slice(0, 4)?.map((card, index) => (
            <SwiperSlide key={index} className="max-w-[415px]">
              <ProjectCard
                card={card}
                isGrid={true}
                setIsActive={setIsActiveModal}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
