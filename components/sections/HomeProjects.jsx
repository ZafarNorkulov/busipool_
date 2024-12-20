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

      <div className="flex w-full items-center justify-center gap-[10px] md:gap-[30px]">
        <Link href={"/projects"}>
          <Button text="Все проекты" primary fullWidth />
        </Link>
        <Link href={"/profile/create"}>
          <Button text="Создать свой" fullWidth />
        </Link>
      </div>
    </section>
  );
};

export default HomeProjects;
