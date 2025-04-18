"use client";
import Image from "next/image";
import Link from "next/link";
import x from "@/assets/images/svg/x.svg";
import burger from "@/assets/images/svg/burger.svg";
import { navLinks } from "@/constants";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BusipoolLogoSmall from "./BusipoolLogoSmall";
import profileImageDefault from "@/assets/images/profileImageDefault.png";
import ProfileMenu from "@/components/ProfileMenu";
import { FaChevronDown } from "react-icons/fa";
import NavLink from "./NavLink";
import { useAppDispatch, useAppSelector } from "@/store";
import { getProfile } from "@/app/api/profile/profile";
import { AUTH_ACTIONS } from "@/store/auth";
import useWindowSize from "@/hooks/useWindowSize";
import Whatsapp from "@/assets/images/social/Whatsapp-white.png";
import VK from "@/assets/images/social/VK.png";
import Telegram from "@/assets/images/social/Telegram.png";

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [mobileNavbarMenu, setMobileNavbarMenu] = useState(false);
  const [extraLinksMenu, setExtraLinksMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const path = usePathname();
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  useEffect(() => {
    setMobileNavbarMenu(false);
    setExtraLinksMenu(false);
  }, [path]);
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    getProfile(storedToken).then((res) => setUser(res));
    if (typeof window != "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);
  const socials = [
    { src: Whatsapp, alt: "whatsapp logo", href: "https://wa.me/79265828518" },
    { src: VK, alt: "vk logo", href: "https://vk.com/busipool" },
    { src: Telegram, alt: "telegram logo", href: "https://t.me/busipool" },
    // { src: Instagram, alt: "instagram logo", href: "" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-40 w-full bg-headerColor">
      <nav className="max-container relative flex h-20 items-center justify-between sm:py-[20px]">
        {/* Logo */}
        <Link href="/">
          {" "}
          <BusipoolLogoSmall />
        </Link>

        {/* Desktop Links */}
        <div className="relative">
          <ul className="hidden flex-wrap items-center gap-x-5 text-gray-dark lg:flex wide:gap-x-[60px]">
            <NavLink href="">Главная</NavLink>
            <NavLink href="investoru">Инвестору</NavLink>
            <NavLink href="kompaniyam">Компаниям</NavLink>
            <NavLink href="stat-partnerom">Стать партнером</NavLink>
            <li
              className={`relative flex cursor-pointer items-center text-sm font-bold uppercase !leading-5 hover:text-primary xl:text-base ${path.includes("/o-nas") && "text-primary"}`}
              onClick={() => setExtraLinksMenu((prev) => !prev)}
            >
              О нас
              <FaChevronDown className="ml-1 inline-block text-[14px] font-[900]" />
            </li>
          </ul>
          <div
            className={`${extraLinksMenu ? "scale-100" : "scale-y-0"} absolute right-0 top-full z-10 flex origin-top flex-col border bg-headerColor px-[30px] py-[10px] transition`}
          >
            <Link className="drop-menu-link" href="/o-nas/">
              Видение
            </Link>
            <Link className="drop-menu-link" href="/o-nas/partneri">
              Партнеры
            </Link>
            <Link className="drop-menu-link" href="/o-nas/kontakty">
              Контакты
            </Link>
            <Link className="drop-menu-link" href="/o-nas/faq">
              Q&A
            </Link>
            <Link className="drop-menu-link" href="/o-nas/blog">
              Блог
            </Link>
          </div>
        </div>

        {/* Right Side Menu (Logged In) */}
        {auth.isAuthenticated && (
          <div
            className="hidden cursor-pointer items-center gap-[10px] px-1 lg:flex"
            onClick={() => {
              setIsProfileMenuOpen((prev) => !prev);
            }}
          >
            <Image
              src={user?.avatar || profileImageDefault}
              width={0}
              height={0}
              sizes="100%"
              objectFit="cover"
              className="h-[60px] w-[60px] rounded-full"
              alt="profile image"
            />
            <div className="flex select-none items-center gap-2">
              <h3 className="text-base font-bold leading-none text-gray-dark md:text-xl xl:text-[24px]">
                {user?.username}
              </h3>
              <FaChevronDown
                className={`${isProfileMenuOpen && "rotate-180"} transition-transform`}
              />
            </div>
          </div>
        )}

        {/* Right Side Menu (Logged Out) */}
        {!auth.isAuthenticated && (
          <div className="hidden gap-x-[30px] xl:flex">
            <Button
              text="Создать проект"
              onclick={() => router.push(`/voyti`)}
            />

            <Button
              text="Войти"
              primary
              onclick={() => router.push(`/voyti`)}
            />
          </div>
        )}
        {/* Profile Menu */}
        {width > 1023 && (
          <div
            className={`${isProfileMenuOpen ? "block" : "hidden"} fixed -right-5 top-[80px] z-40 transition lg:absolute`}
          >
            <ProfileMenu
              closeProfileMenu={() => {
                setIsProfileMenuOpen(false);
              }}
              shutdown={() => {
                dispatch(AUTH_ACTIONS.signOut());
              }}
            />
          </div>
        )}

        {/* Mobile navbar burger */}
        <div className="lg:hidden">
          <Image
            src={mobileNavbarMenu ? x : burger}
            width={0}
            height={0}
            sizes="100%"
            alt="menu"
            className="h-[50px] w-[44px] cursor-pointer object-contain transition-all"
            onClick={() => {
              setMobileNavbarMenu((prev) => !prev);
              setIsProfileMenuOpen((prev) => !prev);
            }}
          />
        </div>
      </nav>
      {/* Mobile navbar menu */}
      <div
        className={`${
          mobileNavbarMenu ? "block" : "hidden"
        } fixed bottom-0 left-0 right-0 top-[70px] z-10 w-screen overflow-hidden overflow-y-scroll bg-headerColor px-[20px] pb-[30px] sm:top-[80px]`}
      >
        {/* Right Side Menu Mobile (Logged Out) */}
        {!auth.isAuthenticated && (
          <div
            className={`mb-[60px] flex flex-col gap-y-[20px] ${width < 1024 && "mt-9 block"}`}
          >
            <Button
              text="Войти"
              primary
              onclick={() => router.push(`/voyti`)}
              style="!py-5 text-sm"
            />
            <Button
              text="Зарегистрироваться"
              onclick={() => router.push(`/registratsiya`)}
              style="!py-5 text-sm"
            />
          </div>
        )}
        {/* Right Side Menu Mobile (Logged In) */}
        {auth.isAuthenticated && (
          <>
            <div
              className={`mt-[40px] flex items-center gap-[30px] lg:hidden ${path.includes("/profil") && "px-[20px]"}`}
            >
              <Image
                src={user?.avatar || profileImageDefault}
                width={0}
                height={0}
                sizes="100%"
                objectFit="cover"
                className="size-[45px] rounded-full"
                alt="profile image"
              />
              <div className="flex-1">
                <h3 className="mb-[10px] text-sm font-bold leading-none text-gray-dark xl:text-base">
                  {user?.username}
                </h3>
                <div className="flex items-center gap-x-4 sm:gap-[30px]">
                  <Link
                    href="/profil/nastroyki"
                    className="border-b border-primary py-[2px] text-base font-light leading-[120%] text-primary"
                  >
                    Настройки
                  </Link>
                  <Link
                    href="/profil"
                    className="border-b border-gray-dark py-[2px] text-base font-light leading-[120%] text-gray-dark"
                  >
                    Профиль
                  </Link>
                </div>
              </div>
            </div>
            {role?.toLowerCase() === "Компания" &&
              !path.includes("/profil") && (
                <Link href={"/profil/sozdat"} className="mt-7 block">
                  <Button text="Создать проект" fullWidth primary />
                </Link>
              )}
          </>
        )}
        {auth.isAuthenticated && path.includes("/profil") && (
          <div className="block">
            <ProfileMenu
              large={true}
              closeProfileMenu={() => {
                setIsProfileMenuOpen(false);
              }}
            />
          </div>
        )}

        {width < 1024 && !path.includes("/profil") && (
          <ul className="mb-[60px] mt-[30px] text-gray-dark">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`mb-[30px] font-bold hover:text-primary focus:text-primary focus-visible:text-primary active:text-primary ${path == item.href && "text-primary"}`}
              >
                <Link
                  href={item.href}
                  className="text-[24px] font-bold leading-[110%]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {/* Social media icons */}
        {width < 1024 && (
          <ul className="mx-auto flex w-[238px] items-center justify-between">
            {socials.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.src}
                    width={37}
                    height={37}
                    sizes="100%"
                    className="h-[37px] w-[37px]"
                    alt={item.alt}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
