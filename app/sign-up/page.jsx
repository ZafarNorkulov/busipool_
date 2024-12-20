"use client";
import { useEffect, useState } from "react";

import BusipoolLogoSmall from "@/components/BusipoolLogoSmall";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { GetRole, registerUser } from "../api/auth/auth";
import Select from "react-select";
import Head from "next/head";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

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
      <main>
        <div className="max-container py-[27px]">
          <BusipoolLogoSmall />
        </div>
        <section className="mx-auto relative w-[calc(100%-10vw)] sm:w-[calc(100%-20vw)] md:w-[calc(100%-50vw)] lg:w-[560px] mb-[30px]">
        <Link href={"/"} className="absolute top-4 left-2 "><MdKeyboardArrowLeft size={30}className="bg-[#ccc] rounded-full" /></Link>
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
            <p className="text-[10px] font-light leading-[24px] text-gray-light opacity-75 lg:mb-[10px] lg:text-[14px]">
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

            <Button type="submit" text="Продолжить" fullWidth primary />
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
