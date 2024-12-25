"use client";
import { useEffect, useState } from "react";

import BusipoolLogoSmall from "@/components/BusipoolLogoSmall";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { GetRole, registerUser } from "../api/auth/auth";
import Select from "react-select";
import Head from "next/head";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import img1 from "@/assets/images/login-images/img1.png";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

const SignUpPage = () => {
  const router = useRouter();
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    groups: "",
  });

  const { width } = useWindowSize();

  const register = (e) => {
    e.preventDefault();
    registerUser(user)
      .then((response) => {
        router.push("/sign-up/confirm");
        localStorage.setItem("access_token", response?.token?.access);
        localStorage.setItem("refresh_token", response?.token?.refresh);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetRole().then((response) => setRoles(response));
  }, []);

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Регистрация"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <main className={`relative flex flex-col gap-y-[30px] pt-[60px]`}>
        <Link href={"/"} className="absolute right-2 top-4">
          <IoMdClose size={30} />
        </Link>
        <div className="max-container hidden py-[27px] md:block">
          <BusipoolLogoSmall />
        </div>
        <section className="max-container relative mx-auto  sm:w-[calc(100%-20vw)] md:w-[calc(100%-50vw)] lg:w-[560px]">
          <h1 className="mb-[20px] text-center text-[32px] font-bold leading-[120%] text-gray-dark lg:mb-[60px] lg:text-[48px] extraWide:text-[64px]">
            Регистрация
          </h1>
          <form onSubmit={(e) => register(e)}>
            <div className="mb-2 lg:mb-[30px]">
              <label htmlFor="username" className="label-text">
                Имя
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, first_name: e.target.value })
                }
                type="text"
                id="username"
                className="login-input"
                required
              />
            </div>
            <div className="mb-2 lg:mb-[30px]">
              <label htmlFor="surname" className="label-text">
                Фамилия
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, last_name: e.target.value })
                }
                type="text"
                id="surname"
                className="login-input"
              />
            </div>
            <div className="mb-2 lg:mb-[30px]">
              <label htmlFor="username" className="label-text">
                Никнейм
              </label>
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
                id="username"
                className="login-input"
              />
            </div>
            <div className="mb-2 lg:mb-[10px]">
              <label htmlFor="email" className="label-text">
                E-mail
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                id="email"
                className="login-input"
              />
            </div>
            <div className="mb-2 lg:mb-[70px]">
              <Select
                className="h-full active:h-full"
                classNamePrefix="select"
                name="role"
                options={roles?.map((role) => ({
                  value: role?.id,
                  label: role?.name,
                }))}
                onChange={(e) => setUser({ ...user, groups: [e?.value] })}
                placeholder="Выберите роль"
              />
            </div>
            <p className="text-[14px] font-light leading-[24px] text-gray-light opacity-75 lg:mb-[10px]">
              На эту почту придет код для подтверждения
            </p>

            <div className="mb-2 lg:mb-[10px]">
              <label htmlFor="password" className="label-text">
                Пароль
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                id="email"
                className="login-input"
              />
            </div>

            <div className="mb-2 lg:mb-[10px]">
              <label htmlFor="confirn_password" className="label-text">
                Подтверждения пароля
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, confirm_password: e.target.value })
                }
                type="password"
                id="email"
                className="login-input"
              />
            </div>

            <Button
              type="submit"
              text="Продолжить"
              style={"!py-5 my-[30px] text-xs"}
              fullWidth
              primary
            />
          </form>
        </section>
        <section className="flex h-[100vh] w-auto flex-[2] flex-col gap-[20px] bg-secondary p-[24px] md:hidden md:gap-[20px] lg:w-[calc(-560px+100vw)] extraWide:w-[calc(-560px+100vw)] extraWide:gap-[60px] extraWide:p-[60px]">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Logo"
              height={0}
              width={0}
              sizes="100%"
              priority={true}
              className="h-[26px] w-[187px] object-contain sm:mx-auto sm:h-[30px] sm:w-[220px] md:mx-0"
            />
          </Link>

          <h1 className="wrap-balance text-[28px] font-bold leading-[120%] text-gray-dark sm:text-center md:text-left md:text-[32px] lg:text-[44px] extraWide:text-[64px]">
            Добро пожаловать на площадку, где инвестируют
          </h1>
          <Image
            src={img1}
            alt="image"
            width={0}
            height={0}
            priority={true}
            className="h-full w-[250px] object-contain sm:mx-auto md:mx-0 md:w-[600px] lg:h-[75%] xl:w-max extraWide:w-[1140px]"
          />
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
