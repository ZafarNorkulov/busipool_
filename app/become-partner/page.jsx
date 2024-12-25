"use client";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import Button from "@/components/Button";
import SwiperSection from "../../components/SwiperSection";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import Stats from "@/components/sections/Stats";
import Stats from "../../components/sections/Stats";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Feedback from "@/components/Feedback";

const roles = [
  {
    title: "Организатор",
    text: "Подготовка компании к привлечению и сопровождение- ответы на вопросы, консультации, доработка материалов, участие во встрече с инвесторами в качестве консультанта.",
  },
  {
    title: "Синдикатор",
    text: "Вы собираете синдикат из заинтересованных инвесторов, и инвестируете все вместе. А далее сопровождаете компанию до нового раунда.",
  },
  {
    title: "Лид-инвестор",
    text: "Вы инвестируете в интересные вам компании от 10% раунда. За это вы располагаете преференциями от компании по инвестиционной оценке в ходе сделки и можете обсудить с компанией особые условия сделки.",
  },
  {
    title: "Брокер",
    text: "Вы не делаете ничего из сказанного ранее, а только привлекаете Эмитентов или Инвесторов в сделку получая за это вознаграждение.",
  },
];

const BecomePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Стать парнтером"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section className="mt-[100px] sm:mt-[140px] lg:mt-[200px]">
        <div className="max-w-[1430px] px-5 md:mx-[9%]">
          <Stats />
        </div>
        <div className="max-container mb-[30px] mt-[60px] md:mt-[100px]">
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
              <Link href={"/profile/create"} className="w-full lg:w-[50%]">
                <Button
                  text="Как это работает"
                  fullWidth={true}
                  style={
                    "sm:mb-0 mb-2 text-sm !px-0 md:border-2 !py-5 xl:text-xl  leading-[24px]"
                  }
                />
              </Link>
              <Link href={"/profile/create"} className="w-full lg:w-[50%]">
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

        <div className="max-container mb-[100px] md:mb-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Какие возможности для вас?
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-col">
          <div>
            <div className="max-container mb-[100px] flex flex-col flex-wrap justify-between md:mb-[150px] lg:flex-row lg:gap-x-[30px]">
              <div className="w-full flex-1 lg:max-w-[850px]">
                <h2 className="mb-[30px] !text-left text-2xl font-bold leading-[120%] text-primary md:text-4xl lg:text-[42px] xl:text-[64px] xl:leading-[130%]">
                  Что такое BUSIPOOL и как проходят сделки на платформе?
                </h2>
                <p className="text-base font-light leading-[120%] text-gray-light md:text-[22px]">
                  Несколько слов о ключевых ролях
                </p>
              </div>
              <div className="w-full flex-1 lg:max-w-[700px]">
                <p className="mb-[30px] text-base font-light leading-[120%] text-gray-light md:text-[24px]">
                  BUSIPOOL - это онлайн-платформа для совершения сделок с{" "}
                  <span className="text-base font-bold text-gray-dark md:text-[24px]">
                    внебиржевыми ценными бумагами (акциями и облигациями)
                  </span>
                  . Основной смысл BUSIPOOL - дать компании возможность
                  привлекать инвесторов в капитал (долю в компании) в
                  онлайн-формате, а инвестору дать возможность приобрести долю в
                  перспективной компании на preSeed, Seed, Series A, B, C - до
                  начала её публичного размещения.
                </p>
                <p className="mb-[30px] text-base font-light leading-[120%] text-gray-light md:text-[24px]">
                  BUSIPOOL реализует идею создания в России C Corp и
                  OTC-markets,
                  <span className="text-base font-bold text-gray-dark md:text-[24px]">
                    {" "}
                    но наша основная логика - российские деньги для российских
                    компаний в российской юрисдикции в легальной конструкции,
                    онлайн и без налогов
                  </span>
                  . Деньги, полученные от продажи акций, компания может сразу
                  использовать для финансирования своего развития.
                </p>
                <p className="mb-[30px] text-base font-light leading-[120%] text-gray-light md:text-[24px]">
                  В рамках сделок на BUSIPOOL существует{" "}
                  <span className="text-base font-bold text-gray-dark md:text-[24px]">
                    экосистема из партнёров, которые участвуют в подготовке
                    компаний к размещению акций
                  </span>
                  . Ниже вы найдёте основные роли, также вам будет предложено
                  оставить заявку, чтобы получить более детальное описание
                  процесса.
                </p>
              </div>
            </div>

            <div className="max-container">
              <h2 className="section-title mb-[30px] md:mb-[100px]">
                Основные роли в сделках
              </h2>

              <div className="mb-[100px] flex flex-wrap justify-center gap-[20px]">
                {roles.map((role, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >
                    <h2 className="mb-[30px] w-[230px] border-b-2 border-gray-dark pb-[10px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:w-full md:pb-[20px] md:text-[32px]">
                      {role.title}
                    </h2>
                    <p className="wrap-balance text-base font-light leading-[140%] text-gray-light md:text-[24px] md:leading-[31px]">
                      {role.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-container mb-[100px] flex justify-center md:mb-[150px]">
              <Button
                text="Оставить заявку, чтобы получить информацию об акционировании"
                onclick={() => setIsOpen(true)}
                style={"py-5 md:text-xl leading-[24px] text-base"}
              />
              <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="max-container">
            <SwiperSection />
            <div className="mb-[100px] flex flex-nowrap justify-center gap-[10px] md:gap-[30px]">
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
        </div>

        <HomeBlogs />
      </section>
    </>
  );
};

export default BecomePartnerPage;
