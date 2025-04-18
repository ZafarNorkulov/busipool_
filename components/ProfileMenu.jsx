"use client";
import { profileIcons } from "@/constants";
import { useAppDispatch } from "@/store";
import { AUTH_ACTIONS } from "@/store/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ProfileMenu = ({ closeProfileMenu, large }) => {
  const dispatch = useAppDispatch();
  const [role, setRole] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);
  useEffect(() => {
    if (role) {
      setIsBusiness(role.toLowerCase() === "Компания");
    }
  }, [role]);

  return (
    <div
      id="profile-menu"
      className={`${large ? "h-full w-full" : `${isBusiness ? "w-[350px]" : "w-[250px]"} `} profile-menu-desktop select-none border-[#78a371] bg-headerColor py-[30px] lg:rounded-md lg:border-2`}
    >
      {isBusiness && (
        <Link href="/profil/sozdat">
          <button
            onClick={closeProfileMenu}
            className="mx-5 mb-[30px] flex w-[calc(100%-40px)] justify-center rounded-[5px] border-2 border-primary bg-primary px-5 py-[10px] text-center text-[14px] font-bold leading-6 text-white transition active:scale-95"
          >
            Создать проект +
          </button>
        </Link>
      )}
      <ul>
        {/* <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.idea}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profil"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Созданные проекты
          </Link>
        </li> */}

        {isBusiness && (
          <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
            <Image
              width={0}
              height={0}
              sizes="100%"
              src={profileIcons.check}
              alt="icon"
              className="block h-[30px] w-[30px]"
            />

            <Link
              href="/profil/statistiki"
              className="menu-link"
              onClick={closeProfileMenu}
            >
              Поддержанные проекты
            </Link>
          </li>
        )}
        {/* <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.favorite}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href=""
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Мои заказы
          </Link>
        </li>
        <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.ruble}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href=""
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Баланс
          </Link>
        </li> */}
        <li className="mx-4 ml-[19px] flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <IoChatboxEllipsesOutline size={28} color="#79A471" />
          <Link
            href="/profil/chat"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Чат
          </Link>
        </li>
        <li
          className={`mx-4 ${isBusiness && "mb-5"} flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200`}
        >
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.profile}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profil"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Мой профиль
          </Link>
        </li>
        <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.settings}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profil/nastroyki"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Настройки
          </Link>
        </li>
        <li className="mx-4 flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-[5px] hover:bg-lime-200">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.shutdown}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <div
            className="menu-link"
            onClick={() => {
              closeProfileMenu();
              dispatch(AUTH_ACTIONS.signOut());
            }}
          >
            Выход
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
