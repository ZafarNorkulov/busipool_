"use client";
import Head from "next/head";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import HalfCircleProgressBar from "@/components/HalfCircleProgressBar";
import CommentQuestions from "@/components/CommentQuestions";
import CommentQuestion from "@/components/CommentQuestions";

const MyProjects = () => {
  const [progressContent, setProgressContent] = useState([
    {
      title: "Всего собрано",
      number: "350 000 ₽",
    },
    {
      title: "Инвесторы",
      number: "10",
    },
    {
      title: "Просмотры",
      number: "43",
    },
    {
      title: "Собрано на площадке",
      number: "150 000 ₽",
    },
    {
      title: "Эшелон",
      number: "А",
    },
    {
      title: "Комментариев",
      number: "5",
    },
  ]);
  const [investors, setInvestors] = useState([
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
  ]);
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Мои проекты"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section >
        <div className="max-container">
          <div className="mx-auto flex w-max flex-col items-center gap-y-[10px] text-gray-dark">
            <h3 className="text-2xl font-bold">Ваши проекты</h3>
            <p className="text-base font-light opacity-60">
              Здесь хранятся ваши проекты
            </p>
          </div>
          <Tabs className={"mt-[100px] xl:mx-[144px]"}>
            <TabList
              className={"flex flex-wrap justify-between lg:flex-nowrap"}
            >
              <Tab className={"cursor-pointer"}>
                Hyper+ - приложение для компаний{" "}
              </Tab>
              <Tab className={"cursor-pointer"}>
                GK - Производство тепловых реле{" "}
              </Tab>
              <Tab className={"cursor-pointer"}>
                Магазин доступной Корейской Одежды
              </Tab>
            </TabList>
            <TabPanel>
              <div className="mt-[60px] flex flex-col items-center justify-center gap-y-[60px] py-[60px] shadow-md md:mt-[80px] md:flex-row md:gap-x-[40px] md:gap-y-0 lg:mt-[120px] lg:gap-x-[100px] xl:gap-x-[150px]">
                {/* progressbar with money */}
                <div className="flex flex-col items-center justify-center gap-y-[30px]">
                  <HalfCircleProgressBar percentage={90} />
                  <p className="font-light leading-[120%] text-gray-dark">
                    <span className="font-bold">350 000 ₽ </span>
                    из 600 000 ₽
                  </p>
                </div>
                <div className="grid w-max grid-cols-12 gap-y-[60px] leading-[120%] text-gray-dark">
                  {progressContent?.map((item, index) => (
                    <div
                      className="col-span-6 flex flex-col items-center gap-y-[10px] sm:col-span-4"
                      key={index}
                    >
                      <span className="w-max text-base font-light md:text-lg lg:text-xl xl:text-2xl">
                        {item?.title}
                      </span>
                      <h4
                        className={
                          "w-max text-2xl font-bold md:text-[26px] lg:text-[28px] xl:text-[32px]"
                        }
                      >
                        {item?.number}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
              <div cl assName="">
                <div className="my-[60px] flex flex-col gap-y-[10px] leading-[120%] text-gray-dark">
                  <h3 className="text-2xl font-bold">Подробная информация</h3>
                  <p className="text-base font-light opacity-60">
                    Для проекта Hyper+ - приложение для компаний
                  </p>
                </div>
                <div className="flex flex-col gap-x-5 gap-y-[30px] sm:gap-y-0 lg:flex-row">
                  <div className="flex flex-col py-[60px] shadow-md lg:w-[calc(50%-10px)]">
                    <div className="px-5 sm:mx-auto sm:w-max sm:px-0">
                      <h3 className="text-2xl font-bold leading-[120%]">
                        Инвесторы
                      </h3>
                      <div className="mt-[30px] flex w-full flex-col gap-y-5 sm:gap-y-[10px]">
                        {investors?.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between gap-x-[45px] text-base font-light leading-[120%] text-gray-dark"
                          >
                            <div className="flex flex-col gap-x-[45px] gap-y-[10px] sm:flex-row">
                              <h5>{item?.full_name}</h5>
                              <p>{item?.phone}</p>
                            </div>
                            <strong className="font-bold text-primary">
                              +{item?.paid}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col py-[60px] shadow-md lg:w-[calc(50%-10px)]">
                    <div className="px-5 sm:mx-auto sm:w-max sm:px-0">
                      <div className="mb-[30px] flex items-start gap-x-[10px]">
                        <h3 className="w-[164px] text-2xl font-bold leading-[120%] text-gray-dark sm:w-max">
                          Комментарии и вопросы
                        </h3>
                        <span className="rounded-[5px] bg-primary px-[10px] py-[5px] text-white">
                          +1
                        </span>
                      </div>
                      <CommentQuestion questions={investors} />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default MyProjects;