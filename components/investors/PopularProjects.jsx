import React from "react";
import SwiperSection from "../SwiperSection";
import Button from "../Button";
import Link from "next/link";

const PopularProjects = () => {
  return (
    <div className="max-container">
      <h2 className="section-title mb-[30px] 2xl:mb-[100px]">
        Актуальные проекты
      </h2>

      <SwiperSection />

      <div className="mb-[100px] flex flex-1 flex-nowrap justify-center gap-[10px] md:hidden md:gap-[30px]">
        <Link href={"/proyekti"} className="w-[calc(50%-5px)] sm:w-max">
          <Button
            text="Все проекты"
            primary
            fullWidth
            style={"!py-5 text-sm"}
          />
        </Link>
        <Link href={"/profil/sozdat"} className="w-[calc(50%-5px)] sm:w-max">
          <Button text="Создать свой" fullWidth style={"!py-5 text-sm"} />
        </Link>
      </div>
    </div>
  );
};

export default PopularProjects;
