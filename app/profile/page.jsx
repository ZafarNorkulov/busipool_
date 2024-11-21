"use client";
import Image from "next/image";
import Link from "next/link";
import UserPageCard from "@/components/UserPageCard";
import { profileIcons } from "@/constants";
import buildProjectImage from "@/assets/images/build-project.png";
import HomeBlogs from "@/components/sections/HomeBlogs";

const ProfilePage = () => {
  return (
    <section>
      <div className="max-container mb-[60px] mt-[100px] grid grid-cols-1 gap-[30px] md:mb-[150px] md:grid-cols-2 xl:grid-cols-3">
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
              href="/profile/create"
              className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
            >
              создать
            </Link>{" "}
            свой первый проект.
          </p>
        </UserPageCard>

        <UserPageCard
          cardStyles="rounded-[3px] md:rounded-[5px] p-[20px] md:p-[30px]"
          title="Поддержанные проекты проекты"
          subtitle="Проекты, которые вы поддержали"
          icon={profileIcons.check}
        >
          <h2 className="mb-[10px] text-base font-bold leading-[120%] text-gray-dark md:text-[18px]">
            Вы не поддержали еще ни одного проекта.
          </h2>
          <p className="mb-[10px] text-[18px] font-light leading-[120%] text-gray-light">
            <Link
              href="#"
              className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
            >
              Найдите
            </Link>{" "}
            проект, в который можно инвестировать.
          </p>
        </UserPageCard>

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
              href="#"
              className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
            >
              Поддерживайте
            </Link>{" "}
            проекты, чтобы получить награды, акции и дивиденды.
          </p>
        </UserPageCard>
      </div>

      <div className="bg-secondary py-[30px] md:py-[100px]">
        <div className="max-container flex flex-col justify-between md:flex-row">
          <div className="mb-[60px] flex flex-col items-start md:mb-0 md:items-center md:text-center xl:items-start xl:text-left">
            <h2 className="mb-[10px] text-[28px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[64px]">
              Создай собственный проект
            </h2>
            <p className="wrap-balance mb-[30px] max-w-[550px] text-base font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
              Создание собственного проекта на такой платформе - это шаг,
              который может привести вас к успеху.
            </p>
            <Link
              href="/profile/create"
              className="rounded-[3px] border-2 border-primary bg-primary px-[60px] py-[20px] text-[14px] font-bold leading-[120%] text-white transition active:scale-95 md:px-[47px] md:text-base"
            >
              Создать проект
            </Link>
          </div>
          <Image
            src={buildProjectImage}
            alt="image"
            priority={true}
            width={0}
            height={0}
            sizes="100%"
            className="w-full object-contain xl:max-w-[700px]"
          />
        </div>
      </div>

      <div className="mt-[100px]">
        <HomeBlogs />
      </div>
    </section>
  );
};

export default ProfilePage;
