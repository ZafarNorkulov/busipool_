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
import { useEffect, useState } from "react";
import { getProjectCategory } from "../api/projects/project";
import Link from "next/link";
import Feedback from "../../components/Feedback";
import Head from "next/head";

const suitables = [
  {
    text: "Открыли бизнес, проработали год, бизнес работает в плюс, но хочется вернуть займы на которые открывали бизнес.",
  },
  {
    text: "Подтвердил первые продажи, нужны деньги на масштабирование бизнеса вложиться в новые станки и продажи",
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
    getProjectCategory().then((response) => {
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
      <section>
        <div className="max-container pt-[30px] md:pt-[100px]">
          <Stats />
        </div>
        <div className="mx-auto mb-[30px] mt-[60px] w-fit px-[10px] md:mb-[100px] md:mt-[50px] md:px-[20px]">
          <BusipoolLogoLarge />
        </div>
        <div className="max-container">
          <div className="flex flex-col items-center gap-x-[20px] gap-y-[30px] md:mt-[100px] xl:flex-row">
            <p className="text-lg font-light tracking-[0.01em] text-primary md:text-center lg:text-base wide:flex-1 wide:text-left 2xl:text-[24px]">
              Цель нашей краудфандинговой платформы - предоставить вам
              возможность{" "}
              <span className="text-lg text-gold lg:text-base 2xl:text-[24px]">
                увеличить свои инвестиции
              </span>{" "}
              через вложения в проекты.
            </p>
            <div className="flex w-full flex-col justify-center gap-[20px] md:shrink-0 md:flex-row md:gap-[30px] lg:w-auto">
              <Link href={"/profile/create"}>
                <button className="flex-1 text-nowrap rounded-[3px] border border-gray-dark py-[20px] text-[14px] font-bold leading-[120%] text-gray-dark transition active:scale-95 md:border-2 md:px-[70px] md:text-[20px] md:leading-[24px]">
                  Как это работает
                </button>
              </Link>
              <Link href={"/profile/create"}>
                <button className="flex-1 text-nowrap rounded-[3px] border border-primary bg-primary py-[20px] text-[14px] font-bold leading-[120%] text-white transition active:scale-95 md:border-2 md:px-[70px] md:text-[20px] md:leading-[24px]">
                  Разместить компанию
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Who is Busipool suitable for? */}
        <div className="max-container">
          <div className="pt-[100px] md:pt-[150px]">
            <h2 className="section-title mb-[30px] md:mb-[100px]">
              Кому подойдет BUSIPOOL?
            </h2>

            <div className="mb-[100px] flex flex-wrap justify-center gap-x-[60px] gap-y-[30px] text-center md:mb-[150px]">
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

        <div className="max-container">
          <div>
            <h2 className="section-title mb-[30px] text-balance md:mb-[100px]">
              Кто может разместиться на BUSIPOOL?
            </h2>

            <div className="mb-[60px] flex flex-wrap justify-evenly gap-y-[60px]">
              <div className="w-[633px]">
                <h3 className="mb-[30px] border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px]">
                  Эшелон A / до 1 млрд.₽
                </h3>

                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Набор документов аналогично Эшелону C. Также:
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
                  ценных бумаг и данные бумаги размещаются на Инвестиционной
                  платформе BUSIPOOL.
                </p>
              </div>

              <div className="w-[633px]">
                <h3 className="mb-[30px] border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px]">
                  Эшелон С / до 60 млн.₽
                </h3>

                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Документы, согласно требованиям:
                  <br />
                  - Финансовая модель;
                  <br />
                  - Инвестиционная презентация;
                  <br />- Устав, Акционерное соглашение.
                </p>

                <h4 className="mb-[10px] text-[20px] font-bold leading-[140%] text-gray-dark md:mb-[30px] md:text-[24px] md:leading-[31px]">
                  Выполнение условия:
                </h4>
                <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px]">
                  Завершена регистрация дополнительного выпуска эмиссионных
                  ценных бумаг и данные бумаги размещаются на Инвестиционной
                  платформе BUSIPOOL.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-container mb-[100px] flex flex-col items-center">
          <p className="mb-[30px] max-w-[1000px] text-center text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px]">
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
              text="Оставьте заявку и мы пришлем информацию по тарифам"
              onclick={() => setIsOpen(true)}
            />
            <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div className="bg-secondary pb-[150px] pt-[60px] md:pt-[100px]">
          <h2 className="mb-[30px] text-center text-2xl font-bold leading-normal text-gray-dark md:mb-[100px] md:text-[64px]">
            Как проходят сделки?
          </h2>

          <div className="max-container">
            <p className="mx-auto mb-[15px] max-w-[1440px] text-center text-[15px] font-light text-gray-light md:mb-[100px] md:text-left md:text-[32px]">
              Обращаем ваше внимание, что проектный менеджер BUSIPOOL или
              партнёра будет сопровождать вас на всем процессе размещения вашей
              компании и поможет вам его пройти максимально быстро.
            </p>
            <div className="mx-auto max-w-[1385px] pl-[25px] md:pl-[60px]">
              {workProcess.map((step, index, arr) => (
                <div
                  key={index}
                  className={`${
                    index == arr.length - 1 ? "pb-0" : "pb-[60px] md:pb-[100px]"
                  } ${
                    index == arr.length - 1
                      ? "border-0"
                      : "border-l md:border-l-2"
                  } relative border-primary pl-[55px] md:pl-[275px] xl:pl-[372px]`}
                >
                  <h3 className="mb-[20px] text-[18px] font-bold leading-normal text-gray-dark md:mb-[30px] md:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                    {step.text}
                  </p>
                  <span className="block text-base font-bold leading-[140%] text-gray-dark md:text-[24px]">
                    {step.deadline}
                  </span>

                  <span className="absolute left-0 top-0 flex h-[50px] w-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-primary bg-secondary text-[24px] font-light leading-[110%] text-primary md:h-[125px] md:w-[125px] md:text-[48px]">
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

          {/* <div className="hidden flex-1 flex-wrap justify-center gap-[30px] md:mb-[150px] md:flex md:flex-nowrap">
          <SignUpLink />
          <SignInLink />
        </div> */}

          <div>
            <h2 className="section-title mb-[60px] md:mb-[100px]">
              База инвесторов
            </h2>

            <div className="flex flex-wrap justify-center gap-[20px]">
              {investors.map((investor, index) => (
                <InvestorCardLink
                  key={index}
                  name={investor.name}
                  id={investor.id}
                />
              ))}
            </div>
          </div>

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

        <div className="max-container">
          <div className="mx-auto mb-[150px] max-w-[1140px]">
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
              />
            </div>
          </div>
        </div>

        <div className="max-container mb-[100px] md:mb-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Почему BUSIPOOL?
          </h2>

          <div className="flex flex-col items-center">
            <div className="mx-auto mb-[60px] flex max-w-[1430px] flex-wrap justify-center gap-y-[60px] md:mb-[80px] xl:justify-between">
              <div className="max-w-[560px]">
                <h3 className="mb-[20px] text-center text-[20px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-left md:text-[32px]">
                  Любое число участников сделки онлайн
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                  Число участников сделки может достигать 500 и более человек. В
                  виду того, что сделки на инвестиционной платформе BUSIPOOL
                  проходят в онлайн-форме, то акции вашей компании могут купить
                  инвесторы со всей России.
                </p>
              </div>
              <div className="max-w-[560px]">
                <h3 className="mb-[20px] text-center text-[20px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-left md:text-[32px]">
                  Экономия времени компании
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                  Вам не придётся долгие месяцы нагружать своих сотрудников
                  подписанием договоров с инвесторами, а потом готовить списки
                  для выпуска акций. Все это сделает BUSIPOOL.
                </p>
              </div>
              <div className="max-w-[560px]">
                <h3 className="mb-[20px] text-center text-[20px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-left md:text-[32px]">
                  Законность и безопасность
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                  Все сделки на BUSIPOOL соответствуют 259-ФЗ «О привлечении
                  инвестиций с использованием инвестиционных платформ», 208-ФЗ
                  «Об акционерных обществах», 39-ФЗ «О рынке ценных бумаг».
                </p>
              </div>
              <div className="max-w-[560px]">
                <h3 className="mb-[20px] text-center text-[20px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-left md:text-[32px]">
                  Проверка инвесторов
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                  Вы также можете быть уверены в юридической чистоте своих
                  будущих инвесторов. BUSIPOOL проверят всех инвесторов в рамках
                  115-ФЗ «О противодействии легализации (отмыванию) доходов,
                  полученных преступным путем, и финансированию терроризма» и
                  присваивает им статус «Квалифицированный инвестор», если это
                  необходимо.
                </p>
              </div>
            </div>

            <Button
              text="Оставить заявку, чтобы получить информацию об акционировании"
              onclick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default CompanyPage;
