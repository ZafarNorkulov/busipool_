import { profileIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ProfileMenu = ({ shutdown, closeProfileMenu }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location("/");
  };

  return (
    <div
      id="profile-menu"
      className="w-[370px] select-none bg-headerColor px-[60px] py-[30px]"
    >
      <Link
        href="/profile/create"
        onClick={closeProfileMenu}
        className="mb-[30px] block w-full rounded-[5px] border-2 border-primary bg-primary px-[20px] py-[10px] text-center text-[14px] font-bold leading-6 text-white transition active:scale-95"
      >
        Создать проект +
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
            href="/profile"
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
          <Link
            href="#!"
            className="menu-link"
            onClick={() => {
              shutdown();
              closeProfileMenu();
              logOut();
            }}
          >
            Выход
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
