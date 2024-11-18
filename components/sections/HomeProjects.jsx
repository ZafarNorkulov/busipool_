"use client";
import Button from "@/components/Button";
import SwiperSection from "../../components/SwiperSection";
import Link from "next/link";


const HomeProjects = () => {
  return (
    <section className="max-container pb-[100px] pt-[100px] md:pb-[150px] md:pt-[150px]">
      <h2 className="section-title mb-[30px] sm:mb-[100px]">
        Популярные проекты
      </h2>

      <SwiperSection />

      <div className="flex flex-wrap items-center justify-center gap-[30px] sm:gap-[20px]">
      <Link href={"/projects"}>
      <Button
          text="Все проекты"
          primary
        />
        </Link>

        <Button text="Создать свой" />
      </div>
    </section>
  );
};

export default HomeProjects;
