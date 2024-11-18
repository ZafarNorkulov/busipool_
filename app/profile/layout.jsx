"use client";
import Image from "next/image";
import profileImageDefault from "@/assets/images/profileImageDefault.png";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Router } from "next/router";

const ProfilePageLayout = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;


  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
      console.log("error")
    } else {
      console.log("succes")
    }
  }, [token, router]);


  return (
    <section>
      <div className="max-container mt-[40px] flex flex-col items-center justify-between gap-5 sm:flex-row md:mt-[100px]">
        <div className="flex items-center gap-[20px] md:gap-[30px]">
          <Image
            src={profileImage || profileImageDefault}
            width={0}
            height={0}
            sizes="100%"
            className="size-[45px] rounded-full md:size-[60px]"
            alt="profile image"
          />
          <div>
            <h3 className="mb-[10px] text-base font-bold leading-none text-gray-dark md:mb-3 md:text-[24px]">
              {profileName}
            </h3>
            <Link
              href="/profile/settings"
              className="text-[14px] font-light leading-[120%] text-primary underline md:text-base md:leading-[24px]"
            >
              Настройки
            </Link>
          </div>
        </div>

        <ul className="hidden flex-wrap items-center gap-x-[45px] gap-y-0 md:gap-x-[90px] 2xl:flex">
          <li className="font-bold leading-[120%] text-gray-light">
            Созданные проекты
          </li>
          <li className="font-bold leading-[120%] text-gray-light">
            Поддержанные проекты
          </li>
          <li className="font-bold leading-[120%] text-gray-light">
            Вознаграждения и дивиденды
          </li>
        </ul>

        <div>
          <div className="mb-[10px] flex items-center justify-end gap-5 md:mb-3">
            <h3 className="text-base font-bold leading-none text-gray-dark md:text-[24px]">
              Баланс: 0 ₽
            </h3>
            <CiSquarePlus className="hidden text-[36px] md:block" />
          </div>
          <Link
            href="#"
            className="text-[14px] font-light leading-[120%] text-primary underline md:text-base md:leading-[24px]"
          >
            Управление балансом
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
};

export default ProfilePageLayout;
