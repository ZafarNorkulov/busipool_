"use client";
import Image from "next/image";
import Link from "next/link";
import x from "@/assets/images/svg/x.svg";
import burger from "@/assets/images/svg/burger.svg";
import { navLinks, socialMedia } from "@/constants";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BusipoolLogoSmall from "./BusipoolLogoSmall";
import profileImageDefault from "@/assets/images/profileImageDefault.png";
import { signOut, useSession, getProviders } from "next-auth/react";
import ProfileMenu from "@/components/ProfileMenu";
import { FaChevronDown } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [mobileNavbarMenu, setMobileNavbarMenu] = useState(false);
  const [extraLinksMenu, setExtraLinksMenu] = useState(false);
  const [providers, setProviders] = useState(null);

  const path = usePathname();
  const router = useRouter();
  const [token,setToken] = useState(null)
  useEffect(() => {
    setMobileNavbarMenu(false);
    setExtraLinksMenu(false);
  }, [path]);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    const setAuthProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setAuthProvider();
  }, []);

  return (
    <header className="relative bg-headerColor">
      <nav className="max-container relative flex items-center justify-between pt-[56px] sm:py-[20px]">
        {/* Logo */}
        <BusipoolLogoSmall />

        {/* Desktop Links */}
        <div className="relative py-3">
          <ul className="hidden flex-wrap items-center gap-x-5 text-gray-dark xl:flex wide:gap-x-[60px]">
            <NavLink href="/">Главная</NavLink>
            <NavLink href="/investor">Инвестору</NavLink>
            <NavLink href="/company">Компаниям</NavLink>
            <NavLink href="/become-partner">Стать парнером</NavLink>
            <li
              className={`relative flex cursor-pointer items-center font-bold uppercase leading-normal hover:text-primary ${path.includes("/about-us") && "text-primary"}`}
              onClick={() => setExtraLinksMenu((prev) => !prev)}
            >
              О нас
              <FaChevronDown className="ml-1 inline-block text-[14px] font-[900]" />
            </li>
          </ul>
          <div
            className={`${extraLinksMenu ? "scale-100" : "scale-y-0"} absolute right-0 top-full z-10 flex origin-top flex-col border bg-headerColor px-[30px] py-[10px] transition`}
          >
            <Link className="drop-menu-link" href="/about-us/">
              Видение
            </Link>
            <Link className="drop-menu-link" href="/about-us/partners">
              Партнеры
            </Link>
            <Link className="drop-menu-link" href="/about-us/contacts">
              Контакты
            </Link>
            <Link className="drop-menu-link" href="/about-us/faq">
              Q&A
            </Link>
            <Link className="drop-menu-link" href="/about-us/blog">
              Блог
            </Link>
          </div>
        </div>

        {/* Right Side Menu (Logged In) */}
        {token && (
          <div
            className="hidden cursor-pointer items-center gap-[30px] px-1 xl:flex"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            <Image
              src={profileImage || profileImageDefault}
              width={0}
              height={0}
              sizes="100%"
              className="h-[60px] w-[60px] rounded-full"
              alt="profile image"
            />
            <div className="flex items-center gap-2 select-none">
              <h3 className="text-[24px] font-bold leading-none text-gray-dark">
                {profileName}
              </h3>
              <FaChevronDown
                className={`${isProfileMenuOpen && "rotate-180"} transition-transform`}
              />
            </div>
          </div>
        )}

        {/* Right Side Menu (Logged Out) */}
        {!token && (
          <div className="hidden gap-x-[30px] xl:flex">
            <Button
              text="Создать проект"
              onclick={() => router.push(`/sign-in`)}
            />
            <Button
              text="Войти"
              primary
              onclick={() => router.push(`/sign-in`)}
            />
          </div>
        )}

        <div
          className={`${isProfileMenuOpen ? "scale-100" : "scale-y-0"} absolute right-0 top-[100px] z-50 origin-top transition`}
        >
          <ProfileMenu
            closeProfileMenu={() => {
              setIsProfileMenuOpen(false);
            }}
            shutdown={() => {
              signOut({ callbackUrl: "/" });
            }}
          />
        </div>

        {/* Mobile navbar burger */}
        <div className="xl:hidden">
          <Image
            src={mobileNavbarMenu ? x : burger}
            width={0}
            height={0}
            sizes="100%"
            alt="menu"
            className="h-[50px] w-[44px] cursor-pointer object-contain transition-all"
            onClick={() => setMobileNavbarMenu((prev) => !prev)}
          />
        </div>
      </nav>
      {/* Mobile navbar menu */}
      <div
        className={`${mobileNavbarMenu ? "block" : "hidden"
          } absolute left-0 right-0 top-full z-10 bg-headerColor px-[20px] py-[60px]`}
      >
        {/* Right Side Menu Mobile (Logged Out) */}
        {!token && (
          <div className="mb-[60px] flex flex-col gap-y-[20px]">
            <Button
              text="Войти"
              primary
              onclick={() => router.push(`/sign-in`)}
            />
            <Button
              text="Зарегистрироваться"
              onclick={() => router.push(`/sign-in`)}
            />
          </div>
        )}

        {/* Right Side Menu Mobile (Logged In) */}
        {token && (
          <>
            <div className="mb-[30px] flex items-center gap-[30px] xl:hidden">
              <Image
                src={profileImage || profileImageDefault}
                width={0}
                height={0}
                sizes="100%"
                className="size-[45px] rounded-full"
                alt="profile image"
              />
              <div className="flex-1">
                <h3 className="mb-[10px] text-base font-bold leading-none text-gray-dark">
                  {session?.user?.name}
                </h3>
                <div className="flex items-center justify-between sm:justify-start sm:gap-[30px]">
                  <Link
                    href="/profile/settings"
                    className="border-b border-primary py-[2px] text-base font-light leading-[120%] text-primary"
                  >
                    Настройки
                  </Link>
                  <Link
                    href="/profile"
                    className="border-b border-gray-dark py-[2px] text-base font-light leading-[120%] text-gray-dark"
                  >
                    Профиль
                  </Link>
                  <Link
                    href="#!"
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                    }}
                    className="border-b border-gray-dark py-[2px] text-base font-light leading-[120%] text-gray-dark"
                  >
                    Выход
                  </Link>
                </div>
              </div>
            </div>
            <Button
              text="Создать проект"
              onclick={() => router.push("/profile/create")}
              fullWidth
              primary
            />
          </>
        )}

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

        {/* Social media icons */}
        <ul className="mx-auto flex w-[238px] items-center justify-between">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
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
      </div>
    </header>
  );
};

export default Navbar;
