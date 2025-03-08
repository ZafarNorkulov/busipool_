"use client";
import Image from "next/image";
import Link from "next/link";
import UserPageCard from "@/components/UserPageCard";
import { profileIcons } from "@/constants";
import buildProjectImage from "@/assets/images/build-project.png";
import HomeBlogs from "@/components/sections/HomeBlogs";
import SwiperSection from "@/components/SwiperSection";
import { useEffect, useState } from "react";
import Head from "next/head";
import Button from "@/components/Button";

const ProfilePage = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole || ""); // Set the role or an empty string if not found
    }
  }, []);
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Профиль"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section>
        <div className="max-container mb-[60px] mt-[100px] grid grid-cols-1 gap-[30px] md:mb-[150px] md:grid-cols-2 xl:grid-cols-3">
          {role?.toLowerCase() === "business" ? (
            <UserPageCard
              cardStyles="rounded-[3px] md:rounded-[5px] p-[20px] md:p-[30px]"
              title="Созданные проекты"
              subtitle="Список ваших проектов"
              icon={profileIcons.idea}
            >
              <h2 className="mb-[10px] text-base font-bold leading-[120%] text-gray-dark md:text-[18px]">
                Вы не создали еще ни одного проекта.
              </h2>
              <p className="mb-[10px] text-[18px] font-light leading-[120%] text-gray-light">
                Можете{" "}
                <Link
                  href="/projects"
                  className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
                >
                  создать
                </Link>{" "}
                свой первый проект.
              </p>
            </UserPageCard>
          ) : (
            <UserPageCard
              cardStyles="rounded-[3px] md:rounded-[5px] p-[20px] md:p-[30px]"
              title="Поддержанные проекты"
              subtitle="Проекты, которые вы поддержали"
              icon={profileIcons.check}
            >
              <h2 className="mb-[10px] text-base font-bold leading-[120%] text-gray-dark md:text-[18px]">
                Вы не поддержали еще ни одного проекта.
              </h2>
              <p className="mb-[10px] text-[18px] font-light leading-[120%] text-gray-light">
                <Link
                  href="/projects"
                  className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
                >
                  Найдите
                </Link>{" "}
                проект, в который можно инвестировать.
              </p>
            </UserPageCard>
          )}

          <UserPageCard
            cardStyles="rounded-[3px] md:rounded-[5px] p-[20px] md:p-[30px]"
            title="Вознаграждения и дивиденды"
            subtitle="Список ваших проектов"
            icon={profileIcons.reward}
          >
            <h2 className="mb-[10px] text-base font-bold leading-[120%] text-gray-dark md:text-[18px]">
              Вы не получили еще ни одного вознаграждения.
            </h2>
            <p className="mb-[10px] text-[18px] font-light leading-[120%] text-gray-light">
              <Link
                href="/projects"
                className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
              >
                Поддерживайте
              </Link>{" "}
              проекты, чтобы получить награды, акции и дивиденды.
            </p>
          </UserPageCard>
        </div>

        <div className="flex h-screen flex-col justify-center bg-secondary py-5 sm:h-auto sm:py-[30px] lg:h-[calc(100vh-80px)] lg:py-0">
          <div className="max-container flex flex-col justify-between gap-5 md:gap-[30px] lg:flex-row">
            <div className="flex flex-col lg:items-start lg:text-left">
              <h2 className="mb-[10px] text-[26px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[36px] lg:text-[42px] xl:text-[64px]">
                Создай собственный проект
              </h2>
              <p className="wrap-balance mb-6 max-w-[550px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:!text-[26px] lg:text-[32px]">
                Создание собственного проекта на такой платформе - это шаг,
                который может привести вас к успеху.
              </p>
              {role.toLowerCase() === "business" && (
                <Link href={"/profile/create"}>
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
              className="max-w-full object-contain md:h-80 lg:h-auto lg:!max-w-[500px] 2xl:max-w-[700px]"
            />
          </div>
        </div>
        {role?.toLowerCase() === "business" && (
          <div className="mt-[100px]">
            <SwiperSection />
          </div>
        )}
        <div className="mt-[100px]">
          <HomeBlogs />
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
