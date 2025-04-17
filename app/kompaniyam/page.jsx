"use client";
// import Stats from "@/components/sections/Stats";
import Stats from "../../components/sections/Stats";
import BusipoolLogoLarge from "../../components/BusipoolLogoLarge";
import Button from "../../components/Button";
// import { workProcess, investors } from "@/constants";
import { workProcess } from "../../constants";
import Accordion from "../../components/Accordion";
import HomeBlogs from "../../components/sections/HomeBlogs";
import InvestorCardLink from "../../components/company/InvestorCardLink";
import SignInLink from "../../components/SignInLink";
import SignUpLink from "../../components/SignUpLink";
import { getFaqs } from "../api/blogs/blogs";
import React, { useEffect, useState } from "react";
import { getProjectSubCategory } from "../api/projects/project";
import Link from "next/link";
import Feedback from "../../components/Feedback";
import Head from "next/head";

const suitables = [
  {
    text: "Открыли бизнес, проработали год, бизнес работает в плюс, но хочется вернуть займы на которые открывали бизнес.",
  },
  {
    text: "Подтвердил первые продажи, нужны деньги на масштабирование бизнеса, чтобы вложиться в новое оборудование и увелечить продажи",
  },
  {
    text: "Уже 5 лет на рынке, работаем в плюс, но нужны деньги, чтобы выйти из малого бизнеса в средний.",
  },
  {
    text: "Запускаю новый бизнес, проект хороший, но личных средств немного не хватает.",
  },
];

const CompanyPage = () => {
  const [investors, setInvestors] = useState([]);
  const [token, setToken] = useState(null);

  const [faqs, setFaqs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getInverstors = () => {
    getProjectSubCategory().then((response) => {
      setInvestors(response);
    });
  };

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
    getInverstors();
  }, []);
  const formattedText = (text) => {
    return text
      .split(/([.:])/g) // Nuqta yoki ikki nuqtadan bo'laklarga ajratish
      .map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {part.match(/[.]/) ? <br /> : ""}
        </React.Fragment>
      ));
  };
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Компания"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[70px] sm:mt-[85px] md:mt-[100px] lg:mt-[130px]">
        <div className="mx-[9%] max-w-[1430px] px-5 pt-[30px] md:pt-[100px]">
          <Stats />
        </div>
        <div className="mx-auto mb-[30px] mt-[60px] w-fit px-[10px] md:mb-[100px] md:mt-[50px] md:px-[20px]">
          <BusipoolLogoLarge />
        </div>
        <div className="max-container">
          <div className="mb-[100px] mt-[30px] flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[60px] md:mb-[60px] md:mt-[60px] lg:flex-nowrap xl:mb-[100px] xl:mt-[100px] wide:flex-nowrap">
            <p className="text-center text-xl font-light tracking-[0.01em] text-primary md:text-lg xl:w-[55%] xl:text-left wide:flex-1 2xl:text-[24px]">
              Цель нашей краудфандинговой платформы - предоставить вам
              возможность{" "}
              <span className="text-xl text-gold md:text-lg 2xl:text-[24px]">
                увеличить свои инвестиции
              </span>{" "}
              через вложения в проекты.
            </p>
            <div className="w-full flex-col items-stretch gap-[30px] sm:flex sm:flex-row sm:items-center md:flex-nowrap xl:w-[45%]">
              <Link href={"/profil/sozdat"} className="w-full lg:w-[50%]">
                <Button
                  text="Как это работает"
                  fullWidth={true}
                  style={
                    "sm:mb-0 mb-2 text-sm !px-0 md:border-2 !py-5 xl:text-xl  leading-[24px]"
                  }
                />
              </Link>
              <Link href={"/profil/sozdat"} className="w-full lg:w-[50%]">
                <Button
                  text="Разместить компанию"
                  style={
                    "text-sm !py-5 xl:text-xl md:border-2 !px-0  leading-[24px]"
                  }
                  primary
                  fullWidth={true}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Who is Busipool suitable for? */}
        <div className="max-container">
          <div className="flex h-screen flex-col justify-center">
            <h2 className="section-title mb-[30px] md:mb-[100px]">
              Кому подойдет BUSIPOOL?
            </h2>

            <div className="flex flex-wrap justify-center gap-x-[60px] gap-y-[30px] text-center">
              {suitables.map((item, index) => (
                <p
                  key={index}
                  className="min-w-[300px] flex-1 text-balance font-light leading-[140%] text-gray-light md:text-[22px] md:leading-[140%]"
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1430px] px-5 md:mx-[9%]">
          <div>
            <h2 className="section-title mb-[30px] text-balance md:mb-[100px]">
              Кто может разместиться на BUSIPOOL?
            </h2>

            <div className="mb-[60px] flex flex-col justify-between gap-y-[60px] lg:flex-row">
              <div className="w-full md:w-[633px] lg:!w-[calc(50%-30px)]">
                <h3 className="mb-[30px] whitespace-nowrap border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px] lg:px-0 xl:px-[95px]">
                  Эшелон A / до 1 млрд.₽
                </h3>

                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Набор документов аналогично Эшелону C.
                  <br />
                  1) Отчёт аудитора;
                  <br />
                  2) Не менее 1 года работы компании.
                </p>

                <h4 className="mb-[10px] text-[20px] font-bold leading-[140%] text-gray-dark md:mb-[30px] md:text-[24px] md:leading-[31px]">
                  Выполнение условия:
                </h4>
                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Завершена регистрация дополнительного выпуска эмиссионных
                  ценных бумаг и данные бумаги размещаются на инвестиционной
                  платформе BUSIPOOL.
                </p>
              </div>

              <div className="w-full md:w-[633px] lg:!w-[calc(50%-30px)]">
                <h3 className="mb-[30px] whitespace-nowrap border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px] lg:px-0 xl:px-[95px]">
                  Эшелон С / до 60 млн.₽
                </h3>

                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Документы, согласно требованиям:
                  <br />
                  - Финансовая модель;
                  <br />
                  - Инвестиционная презентация;
                  <br />- Устав, акционерное соглашение.
                </p>

                <h4 className="mb-[10px] text-[20px] font-bold leading-[140%] text-gray-dark md:mb-[30px] md:text-[24px] md:leading-[31px]">
                  Выполнение условия:
                </h4>
                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Завершена регистрация дополнительного выпуска эмиссионных
                  ценных бумаг и данные бумаги размещаются на инвестиционной
                  платформе BUSIPOOL.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-container mb-[100px] flex flex-col items-center lg:!w-[80%] 2xl:!w-[52%]">
          <p className="mb-[30px] text-center text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px]">
            <span className="font-bold text-gray-dark md:text-[24px]">
              Размеcтиться на BUSIPOOL может любая компания,
            </span>{" "}
            соответствующая требованиям.{" "}
            <span className="font-bold text-gray-dark md:text-[24px]">
              {" "}
              Комиссия
            </span>{" "}
            оплачивается в зависимости от суммы привлеченных средств и эшелона
            акций.
          </p>
          <div className="flex-1">
            <Button
              text="Оставьте заявку, и мы пришлем информацию по тарифам"
              onclick={() => setIsOpen(true)}
              style={"!py-5 md:text-xl leading-[24px] text-base"}
            />
            <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div className="bg-secondary pb-[150px] pt-[60px] md:pt-[100px]">
          <h2 className="mb-[30px] text-center text-2xl font-bold leading-normal text-gray-dark md:mb-[100px] md:text-[64px]">
            Как это работает?
          </h2>

          <div className="max-container">
            <p className="mx-auto mb-[15px] max-w-[1440px] text-center text-[15px] font-light text-gray-dark md:mb-[100px] md:text-left md:text-2xl lg:text-[32px]">
              Обращаем ваше внимание, что проектный менеджер BUSIPOOL или
              партнёр будет сопровождать вас на всем процессе размещения вашей
              компании и поможет вам его пройти максимально быстро.
            </p>
            <div className="mx-auto max-w-[1385px] pl-[25px] md:pl-[60px]">
              {workProcess.map((step, index, arr) => (
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
                  <h3 className="mb-5 text-lg font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[26px] lg:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-[140%] text-gray-light md:text-xl lg:text-2xl">
                    {formattedText(step.text)}
                  </p>
                  <span className="block text-base font-bold leading-[140%] text-gray-dark md:text-[24px]">
                    {step.deadline}
                  </span>

                  <span className="absolute left-0 top-0 flex size-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-primary bg-secondary text-[24px] font-light leading-[110%] text-primary md:h-[80px] md:w-[80px] md:text-[32px] lg:h-[125px] lg:w-[125px] lg:text-[48px]">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Base startups */}
        <div className="max-container pb-[150px] pt-[60px] md:pt-[100px]">
          {!token && (
            <div className="hidden flex-1 flex-wrap justify-center gap-[30px] md:mb-[150px] md:flex md:flex-nowrap">
              <SignUpLink />
              <SignInLink />
            </div>
          )}

          <div>
            <h2 className="section-title mb-[60px] md:mb-[100px]">
              База инвесторов
            </h2>

            <div className="grid grid-cols-12 gap-[30px] md:gap-[20px]">
              {investors.map((investor, index) => (
                <div className="col-span-6 sm:col-span-4 md:col-span-4">
                  <InvestorCardLink
                    key={index}
                    name={investor.name}
                    id={investor.id}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <h2 className="section-title mb-[30px] mt-[100px] 2xl:mb-[100px]">
              Финансовые инструменты
            </h2>

            <div className="mx-auto max-w-[1140px] gap-3 md:mx-[8%]">
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

        <div className="mx-auto max-w-[1140px] px-5 md:!mx-[20%]">
          <div className="mx-auto mb-[150px] flex h-screen max-w-[1140px] flex-col justify-center">
            <h2 className="section-title mb-[30px] md:mb-[100px]">
              Сколько это стоит?
            </h2>

            <div className="flex flex-col items-center border-b-2 border-gray-dark pb-[100px]">
              <div className="mb-[30px] flex w-full justify-between">
                <p className="text-base leading-[120%] text-gray-light md:text-[24px]">
                  Фиксированные затраты на подготовку к сделке
                </p>
                <p className="min-w-[135px] text-nowrap text-right text-base font-bold leading-[120%] text-gray-dark md:text-[24px]">
                  500 000 ₽
                </p>
              </div>
              <div className="mb-[60px] flex w-full justify-between md:mb-[90px]">
                <p className="text-base leading-[120%] text-gray-light md:text-[24px]">
                  Общая стоимость привлечения денег
                </p>
                <p className="min-w-[135px] text-nowrap text-right text-base font-bold leading-[120%] text-gray-dark md:text-[24px]">
                  5% - 9% <br className="md:hidden" /> от суммы сделки
                </p>
              </div>

              <Button
                text="Получить информацию о процессе и стоимости"
                onclick={() => setIsOpen(true)}
                style={"!py-5 md:text-xl leading-[24px] text-base"}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mb-[100px] max-w-[1430px] md:mx-[9%] md:mb-[150px]">
          <h2 className="section-title mb-[30px] md:mb-10 2xl:mb-[100px]">
            Почему BUSIPOOL?
          </h2>

          <div className="flex flex-col items-center">
            <div className="mb-[60px] flex w-[calc(100%-20px)] max-w-[1430px] flex-col gap-x-[10%] gap-y-[20px] px-5 md:mb-[80px] md:grid md:w-[calc(100%-80px)] md:grid-cols-12">
              <div className="col-span-12 lg:col-span-6">
                <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[32px]">
                  Любое число участников сделки онлайн
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[24px]">
                  Число участников сделки может достигать 500 и более человек. В
                  виду того, что сделки на инвестиционной платформе BUSIPOOL
                  проходят в онлайн-форме, акции вашей компании могут купить
                  инвесторы со всей России.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[32px]">
                  Экономия времени компании
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[24px]">
                  Вам не придётся долгие месяцы нагружать своих сотрудников
                  подписанием договоров с инвесторами, а потом готовить списки
                  для выпуска акций. Все это сделает BUSIPOOL.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[32px]">
                  Законность и безопасность
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[24px]">
                  Все сделки на BUSIPOOL соответствуют <br />
                  259-ФЗ: «О привлечении инвестиций с использованием
                  инвестиционных платформ»,
                  <br /> 208-ФЗ: «Об акционерных обществах», <br />
                  39-ФЗ: «О рынке ценных бумаг».
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[32px]">
                  Проверка инвесторов
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[24px]">
                  Вы также можете быть уверены в юридической чистоте своих
                  будущих инвесторов. BUSIPOOL проверяет всех инвесторов в
                  рамках <br />
                  115-ФЗ: «О противодействии легализации (отмыванию) доходов,
                  полученных преступным путем, и финансированию терроризма» и
                  присваивает им статус «Квалифицированный инвестор», если это
                  необходимо.
                </p>
              </div>
            </div>

            <div className="max-container">
              <Button
                text="Оставить заявку, чтобы получить информацию об акционировании"
                onclick={() => setIsOpen(true)}
                style={"!py-5 md:text-xl leading-[24px] text-base"}
              />
            </div>
          </div>
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default CompanyPage;
