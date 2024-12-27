"use client";
import Button from "@/components/Button";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import img1 from "@/assets/images/login-images/img1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store";
import SignIn from "@/store/auth/service";
import Head from "next/head";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token && auth.isAuthenticated) {
      router.push("/profile");
    }
  }, [auth.isAuthenticated, router]);

  const login = async (values) => {
    values.preventDefault();
    try {
      await dispatch(SignIn({ data: user }));
      toast.success("Добро пожаловать на платформу");
      router.push("/profile");
    } catch (err) {
      toast.error("Неправильный логин или пароль");
      console.error("Login failed", err);
    }
  };

  {
    /* {loading && <Spinner loading={loading} />} */
  }
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Авторизоваться"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <main className="relative flex flex-col gap-y-[60px] overflow-hidden pt-[30px] md:flex-row md:pt-0">
        <Link href={"/"} className="absolute right-2 top-4">
          <IoMdClose size={30} />
        </Link>
        <ToastContainer />
        <section
          className={`relative flex flex-1 flex-col justify-center pt-3 lg:w-[560px] extraWide:w-[760px]`}
        >
          <div className="max-container">
            <h1 className="mb-[20px] text-center text-[32px] font-bold leading-[120%] text-gray-dark lg:mb-[60px] lg:text-[48px] extraWide:text-[64px]">
              Войти
            </h1>
            <form onSubmit={login}>
              <div className="mb-2 lg:mb-[30px]">
                <label
                  htmlFor="email-phone"
                  className="mb-[10px] text-[10px] font-light leading-[24px] lg:text-[14px]"
                >
                  E-mail или телефон
                </label>
                <input
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  type="text"
                  id="email-phone"
                  className="login-input"
                />
              </div>
              <div className="mb-4 lg:mb-[30px]">
                <label
                  htmlFor="password"
                  className="mb-[10px] text-[10px] font-light leading-[24px] lg:text-[14px]"
                >
                  Пароль
                </label>
                <input
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  type="password"
                  id="password"
                  className="login-input"
                />
              </div>

              <div className="mb-4 lg:mb-[30px]">
                <Button
                  text="Войти"
                  fullWidth
                  primary
                  style={"!py-5 text-sm"}
                />
                <p className="mb-[10px] mt-4 text-center text-[10px] font-light leading-[120%] lg:mt-[30px] xl:text-[14px]"></p>
                {/* {Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className={`w-full rounded-[5px] border-2 border-gray-dark px-[30px] py-[10px] text-[12px] font-bold leading-6 text-gray-dark transition active:scale-95 md:px-[47px] md:py-[20px] md:text-base`}
                >
                  Google
                </button>
              ))} */}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[10px] font-light leading-[120%] xl:text-[14px]">
                  У вас еще нет аккаунта?
                </p>

                <Link
                  href="/sign-up"
                  className="text-[12px] font-bold leading-[120%] text-primary lg:text-[14px]"
                >
                  Зарегистрироваться
                </Link>
              </div>
            </form>
          </div>
        </section>

        <section className="flex h-[100vh] w-auto flex-[2] flex-col gap-[20px] bg-secondary p-[24px] md:gap-[20px] lg:w-[calc(-560px+100vw)] extraWide:w-[calc(-560px+100vw)] extraWide:gap-[60px] extraWide:p-[60px]">
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

export default SignInPage;
