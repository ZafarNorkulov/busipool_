"use client";
import Accordion from "@/components/Accordion";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import Button from "@/components/Button";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import Stats from "@/components/sections/Stats";
import Stats from "../../components/sections/Stats";
import { dealsSteps } from "@/constants";
import SwiperSection from "../../components/SwiperSection";
import Link from "next/link";
// import scrollToTop from "@/utils/scrollToTop";
import scrollToTop from "../../utils/scrollToTop";
import { BsArrowDownRight } from "react-icons/bs";
import SignUpLink from "@/components/SignUpLink";
import SignInLink from "@/components/SignInLink";
import { getFaqs } from "../api/blogs/blogs";
import { useEffect, useState } from "react";
import { getProjectTypes } from "@/utils/request";
import Head from "next/head";

const InvestorPage = () => {
  const [token, setToken] = useState(null);
  const [businessType, setTypeBusiness] = useState([]);
  const [faqs, setFaqs] = useState([]);

  function fetchFaqsApi() {
    getFaqs().then((response) => {
      setFaqs(response);
    });
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }
    fetchFaqsApi();
    getProjectTypes().then((res) => setTypeBusiness(res));
  }, []);

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Инвестор"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[60px] md:mt-[100px] lg:mt-[130px]">
        <div className="max-container pt-[30px] md:pt-[100px]">
          <div className="max-w-[1430px] px-5 md:mx-[9%]">
            <Stats />
          </div>

          <div className="mb-[30px] mt-[50px] w-fit px-[10px] md:mt-[100px] md:px-[20px]">
            <BusipoolLogoLarge />
          </div>

          <div className="max-container">
            <div className="flex flex-col items-center gap-x-5 gap-y-[30px] lg:flex-row">
              <p
                className={`text-center text-xl font-light tracking-[0.01em] text-primary md:text-lg ${!token && "lg:w-[50%] xl:w-[60%]"} xl:text-left 2xl:text-[24px]`}
              >
                Цель нашей краудфандинговой платформы - предоставить вам
                возможность{" "}
                <span className="text-xl text-gold md:text-lg xl:text-left 2xl:text-[24px]">
                  увеличить свои инвестиции
                </span>{" "}
                через вложения в проекты, с которых можно заработать.
              </p>

              {!token && (
                <div className="flex w-full flex-nowrap justify-center gap-[30px] lg:w-1/2 xl:w-[40%]">
                  <SignUpLink
                    styles={
                      "lg:w-[60%] sm:w-[230px] w-[60%] py-5 !px-0 !justify-center"
                    }
                  />
                  <SignInLink
                    styles={
                      "lg:w-[40%] sm:w-[150px] py-5  w-[40%] !px-0 !justify-center"
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-[80px] flex h-screen max-w-[1430px] flex-col items-center justify-center px-5 md:mx-[9%] 2xl:mt-[150px]">
            <h2 className="section-title mb-[30px] md:mb-[100px] lg:text-[64px]">
              Кратко о сделках
            </h2>

            <div className="mb-[100px] flex flex-wrap justify-center gap-y-[60px] text-center md:mb-[140px] lg:gap-x-[100px] xl:flex-nowrap 2xl:gap-x-[160px]">
              <div className="flex min-w-min flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
                <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
                  Онлайн-сделки
                </h3>
                <p className="text-balance text-base leading-[120%] text-gray-dark md:text-xl md:leading-[140%] lg:text-[22px] 2xl:text-[24px]">
                  Благодаря BUSIPOOL вы можете приобретать доли в интересных вам
                  компаниях без посещения нотариуса. Документы подписываются в
                  онлайн-формате.
                </p>
              </div>
              <div className="flex min-w-min flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
                <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
                  Аудит отчетности
                </h3>
                <p className="text-balance text-base leading-[120%] text-gray-dark md:text-xl md:leading-[140%] lg:text-[22px] 2xl:text-[24px]">
                  Для размещения на платформе компания должна предоставить
                  аудиторское заключение на предмет корректности своей
                  финансовой отчетности.
                </p>
              </div>
              <div className="flex min-w-min flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
                <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
                  Законность
                </h3>
                <p className="text-balance text-base leading-[120%] text-gray-dark md:text-xl md:leading-[140%] lg:text-[22px] 2xl:text-[24px]">
                  Сделки соответствуют 259-ФЗ «О привлечении инвестиций с
                  использованием инвестиционных платформ», 208-ФЗ «Об
                  акционерных обществах», 39-ФЗ «О рынке ценных бумаг».
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary pb-[100px] pt-[60px] md:pb-[150px] md:pt-[100px]">
          <h2 className="mb-[30px] text-center text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[100px] md:text-[64px]">
            Как проходят сделки?
          </h2>

          <div className="max-container">
            <div className="max-w-[1430px] px-5 md:mx-[9%]">
              <div className="mx-auto w-full pl-[25px] md:pl-[40px] lg:pl-[60px]">
                {dealsSteps.map((step, index, arr) => (
                  <div
                    key={index}
                    className={`${
                      index == arr.length - 1
                        ? "pb-0"
                        : "pb-[60px] md:pb-[80px] lg:pb-[100px]"
                    } ${
                      index == arr.length - 1
                        ? "border-0"
                        : "border-l md:border-l-2"
                    } relative border-primary pl-[55px] md:pl-[140px] lg:pl-[275px] xl:pl-[372px]`}
                  >
                    <h3 className="text-lg font-bold leading-[110%] text-grad:mb-[30px] md:text-[26px] ">
                      {step.title}
                    </h3>
                    <p className="text-base font-light leading-[140%] text-gray-light md:text-xl lg:text-[24px]">
                      {step.text}
                    </p>

                    <span className="absolute left-0 top-0 flex size-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-primary bg-secondary text-[24px] font-light leading-[110%] text-primary md:h-[80px] md:w-[80px] md:text-[32px] lg:h-[125px] lg:w-[125px] lg:text-[48px]">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-container pb-[150px] md:pt-[100px]">
          {!token && (
            <div className="my-[30px] hidden flex-1 flex-wrap justify-center gap-[30px] sm:flex md:flex-nowrap">
              <SignUpLink />
              <SignInLink />
            </div>
          )}

          <div className="flex max-w-[1400px] flex-col-reverse gap-[100px] px-5 md:mx-[9%] md:flex-col">
            <div>
              <h3 className="section-title mb-[30px] md:mb-[100px] md:mt-[150px] md:text-[64px]">
                База стартапов
              </h3>

              <div className="flex flex-wrap justify-center gap-[30px] md:gap-[20px]">
                {/*  */}
                <Link
                  href={`/investor/${businessType[0]?.id}`}
                  onClick={scrollToTop}
                  className="flex w-[230px] flex-col items-end justify-between rounded-[10px] p-[20px] shadow md:w-[calc(50%-10px)] md:p-[30px]"
                >
                  <div>
                    <h2 className="mb-[10px] text-lg font-light leading-[110%] text-gray-dark md:mb-[20px] md:text-[32px] lg:text-[48px]">
                      {businessType[0]?.name}
                    </h2>
                    <p className="md:wrap-balance mb-[20px] text-[15px] font-light leading-[120%] text-gray-light opacity-70 md:mb-[30px] md:max-w-[85%] md:text-xl xl:text-[22px] 2xl:text-2xl">
                      Посмотрите нашу базу интересных проектов для
                      инвестирования
                    </p>
                  </div>

                  <div
                    className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
                  >
                    Подробнее
                    <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
                  </div>
                </Link>
                <Link
                  href={`/investor/${businessType[1]?.id}`}
                  onClick={scrollToTop}
                  className="flex w-[230px] flex-col items-end justify-between rounded-[10px] p-[20px] shadow md:w-[calc(50%-10px)] md:p-[30px]"
                >
                  <div>
                    <h2 className="mb-[10px] text-lg font-light leading-[110%] text-gray-dark md:mb-[20px] md:text-[32px] lg:text-[48px]">
                      {businessType[1]?.name}
                    </h2>
                    <p className="md:wrap-balance mb-[20px] text-[15px] font-light leading-[120%] text-gray-light opacity-70 md:mb-[30px] md:max-w-[85%] md:text-xl xl:text-[22px] 2xl:text-2xl">
                      Посмотрите нашу базу интересных малых бизнесов для
                      инвестирования
                    </p>
                  </div>

                  <div
                    className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
                  >
                    Подробнее
                    <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="section-title mt-[100px] md:mb-[100px]">
                Финансовые инструменты
              </h2>

              <div className="mx-auto max-w-[1140px]">
                {faqs?.map((faq) => (
                  <Accordion
                    key={faq.id}
                    title={faq.title}
                    description={faq.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-container">
          <h2 className="section-title mb-[30px] 2xl:mb-[100px]">
            Актуальные проекты
          </h2>

          <SwiperSection />

          <div className="mb-[100px] flex flex-1 flex-nowrap justify-center gap-[10px] md:hidden md:gap-[30px]">
            <Link href={"/projects"} className="w-[calc(50%-5px)] sm:w-max">
              <Button
                text="Все проекты"
                primary
                fullWidth
                style={"!py-5 text-sm"}
              />
            </Link>
            <Link
              href={"/profile/create"}
              className="w-[calc(50%-5px)] sm:w-max"
            >
              <Button text="Создать свой" fullWidth style={"!py-5 text-sm"} />
            </Link>
          </div>
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default InvestorPage;
