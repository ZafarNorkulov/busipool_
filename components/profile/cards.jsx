"use client";
import React, { useEffect, useState } from "react";
import { profileIcons } from "@/constants";
import Link from "next/link";
import UserPageCard from "@/components/UserPageCard";

const ProfileCards = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole || ""); // Set the role or an empty string if not found
    }
  }, []);

  return (
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
            href="/profil/sozdat"
            className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
          >
            создать
          </Link>{" "}
          свой первый проект.
        </p>
      </UserPageCard>
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
            href="/proyekti"
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
            href="/proyekti"
            className="border-b border-primary text-base font-light leading-[120%] text-primary md:leading-[24px]"
          >
            Поддерживайте
          </Link>{" "}
          проекты, чтобы получить награды, акции и дивиденды.
        </p>
      </UserPageCard>
    </div>
  );
};

export default ProfileCards;
