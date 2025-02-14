"use client";
import Button from "@/components/Button";
import SwiperSection from "../../components/SwiperSection";
import Link from "next/link";

const HomeProjects = () => {
  return (
    <section className="max-container pb-[100px] pt-[100px] md:pb-[150px] md:pt-[150px]">
      <h2 className="section-title mb-[30px] sm:mb-[30px] 2xl:mb-[100px]">
        Популярные проекты
      </h2>

      <SwiperSection />

      <div className="mb-[100px] flex flex-1 flex-nowrap justify-center gap-[10px] sm:gap-[30px]">
        <Link href={"/projects"} className="w-[calc(50%-5px)] sm:w-max">
          <Button
            text="Все проекты"
            primary
            fullWidth
            style={"!py-5 text-sm"}
          />
        </Link>
        <Link href={"/profile/create"} className="w-[calc(50%-5px)] sm:w-max">
          <Button text="Создать свой" fullWidth style={"!py-5 text-sm"} />
        </Link>
      </div>
    </section>
  );
};

export default HomeProjects;
