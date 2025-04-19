"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import buildProjectImage from "@/assets/images/build-project.png";

const ProjectsBanner = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole || ""); // Set the role or an empty string if not found
    }
  }, []);

  return (
    <div className="bg-secondary py-[30px] md:py-[100px]">
      <div className="max-container flex flex-col justify-between gap-[30px] lg:flex-row">
        <div className="flex flex-col lg:items-start lg:text-left">
          <h2 className="mb-[10px] text-[28px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[36px] lg:text-[42px] xl:text-[64px]">
            Создай собственный проект
          </h2>
          <p className="wrap-balance mb-[30px] max-w-[550px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:!text-[26px] lg:text-[32px]">
            Создание собственного проекта на такой платформе - это шаг, который
            может привести вас к успеху.
          </p>
          {role === "Компания" && (
            <Link href={"/profil/sozdat"}>
              <Button
                text="Создать проект"
                style={"font-light text-sm !py-5 w-[230px]"}
                primary
                extraSmall
              />
            </Link>
          )}
        </div>
        <Image
          src={buildProjectImage}
          alt="image"
          priority={true}
          width={0}
          height={0}
          className="md:h-80max-w-full object-contain lg:h-auto lg:!max-w-[500px] 2xl:max-w-[700px]"
        />
      </div>
    </div>
  );
};

export default ProjectsBanner;
