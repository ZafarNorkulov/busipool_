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
  useEffect(() => {
    if (typeof window != "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);
  return (
    <div
      id="profile-menu"
      className={`${large ? "h-full w-full" : "w-[370px]"} select-none rounded-b-md bg-headerColor px-[20px] py-[30px]`}
    >
      <Link href="/profile/create">
        <button
          onClick={closeProfileMenu}
          className={
            "mb-[30px] flex w-full justify-center rounded-[5px] border-2 border-primary bg-primary px-[20px] py-[10px] text-center text-[14px] font-bold leading-6 text-white transition active:scale-95"
          }
        >
          Создать проект +
        </button>
      </Link>
      <ul>
        <li className="mb-[10px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.idea}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Созданные проекты
          </Link>
        </li>
        <li className="mb-[10px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.check}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile/statistics"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Поддержанные проекты
          </Link>
        </li>
        <li className="mb-[10px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.favorite}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Мои заказы
          </Link>
        </li>
        <li className="mb-[10px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.ruble}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Баланс
          </Link>
        </li>
        <li className="mb-[10px] ml-[3px] flex items-center gap-[10px]">
          <IoChatboxEllipsesOutline size={28} color="#79A471" />
          <Link
            href="/profile/chat"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Чат
          </Link>
        </li>
        <li className="my-[30px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.profile}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Мой профиль
          </Link>
        </li>
        <li className="mb-[10px] flex items-center gap-[10px]">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={profileIcons.settings}
            alt="icon"
            className="block h-[30px] w-[30px]"
          />
          <Link
            href="/profile/settings"
            className="menu-link"
            onClick={closeProfileMenu}
          >
            Настройки
          </Link>
        </li>
        <li className="mb-[10px] flex items-center gap-[10px]">
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
