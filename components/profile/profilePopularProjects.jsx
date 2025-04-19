
import React from "react";
import Button from "../Button";
import PopularProjects from "../popularProjects";
import Link from "next/link";

const ProfilePopularProjects = () => {
  return (
    <div className="mt-[100px]">
      <PopularProjects />
      <div className="mb-[100px] flex flex-nowrap justify-center gap-[10px] md:gap-[30px]">
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

export default ProfilePopularProjects;
