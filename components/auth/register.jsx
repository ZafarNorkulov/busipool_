"use client";
import { useEffect, useState } from "react";

import BusipoolLogoSmall from "@/components/BusipoolLogoSmall";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { GetRole, registerUser } from "../api/auth/auth";
import Select from "react-select";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import img1 from "@/assets/images/login-images/img1.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const router = useRouter();
    const [roles, setRoles] = useState([]);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [user, setUser] = useState({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      groups: "",
    });
  
    const isStrongPassword = (password) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasMinLength = password.length >= 8;
  
      return hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
    };
  
    const register = (e) => {
      e.preventDefault();
  
      const requiredFields = [
        user.first_name,
        user.last_name,
        user.username,
        user.email,
        user.password,
        user.confirm_password,
        user.groups,
      ];
  
      if (requiredFields.some((field) => !field)) {
        toast.error("Заполните форму");
        return;
      }
  
      if (!isStrongPassword(user.password)) {
        toast.error(
          "Пароль должен содержать минимум 8 символов, включая заглавные, строчные буквы, цифры и спец. символы",
        );
        return;
      }
  
      registerUser(user)
        .then((response) => {
          localStorage.setItem("access_token", response?.token?.access);
          localStorage.setItem("refresh_token", response?.token?.refresh);
          router.push("/registratsiya/podtverdit");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Никнейм и E-mail должен быть уникальным");
        });
    };
    useEffect(() => {
      GetRole().then((response) => setRoles(response));
    }, []);

  return (
    <main className={`relative`}>
      <Link href={"/"} className="absolute right-2 top-0 md:top-4">
        <IoMdClose size={30} />
      </Link>
      <ToastContainer />
      <div className="max-container hidden py-[27px] md:block">
        <BusipoolLogoSmall />
      </div>
      <section className="max-container relative mx-auto mt-[30px] sm:w-[calc(100%-20vw)] md:w-[calc(100%-50vw)] lg:w-[560px]">
        <h1 className="mb-[20px] text-center text-[32px] font-bold leading-[120%] text-gray-dark lg:mb-[60px] lg:text-[48px] extraWide:text-[64px]">
          Регистрация
        </h1>
        <form onSubmit={(e) => register(e)}>
          <div className="mb-2 lg:mb-[30px]">
            <label htmlFor="username" className="label-text">
              Имя
            </label>
            <input
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
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
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
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
            <label
              htmlFor="email"
              className="label-text focus-visible:border-none focus-visible:outline-none"
            >
              E-mail
            </label>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              id="email"
              className="login-input"
            />
          </div>
          <div className="mb-2 lg:mb-[10px]">
            <label htmlFor="password" className="label-text">
              Пароль
            </label>
            <input
              onChange={(e) => {
                const val = e.target.value;
                setUser({ ...user, password: val });
                if (!isStrongPassword(val)) {
                  setPasswordMessage("Пароль слабый");
                } else {
                  setPasswordMessage("");
                }
              }}
              type="password"
              id="email"
              className="login-input"
            />
            {passwordMessage === "Пароль слабый" && (
              <p className="mt-1 text-sm text-red-600">{passwordMessage}</p>
            )}
          </div>

          <div className="mb-2 lg:mb-[10px]">
            <label htmlFor="confirn_password" className="label-text">
              Подтверждения пароля
            </label>
            <input
              onChange={(e) => {
                const val = e.target.value;
                setUser({ ...user, confirm_password: val });
                if (user.password !== val) {
                  setConfirmPasswordMessage("Пароли не совпадают");
                } else {
                  setConfirmPasswordMessage("");
                }
              }}
              type="password"
              id="email"
              className="login-input"
            />
            {confirmPasswordMessage === "Пароли не совпадают" && (
              <p className="mt-1 text-sm text-red-600">
                {confirmPasswordMessage}
              </p>
            )}
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

          <Button
            type="submit"
            text="Продолжить"
            style={"!py-5 my-[30px] text-xs"}
            fullWidth
            primary
          />
        </form>
      </section>
      <section className="mt-[30px] flex w-auto flex-[2] flex-col gap-[20px] bg-secondary p-[24px] md:hidden md:gap-[20px] lg:w-[calc(-560px+100vw)] extraWide:w-[calc(-560px+100vw)] extraWide:gap-[60px] extraWide:p-[60px]">
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
          className="h-[220px] w-[250px] object-contain sm:mx-auto md:mx-0 md:w-[600px] lg:h-[75%] xl:w-max extraWide:w-[1140px]"
        />
      </section>
    </main>
  );
};

export default Register;
