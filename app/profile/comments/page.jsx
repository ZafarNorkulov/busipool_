"use client";
import Button from "@/components/Button";
import CommentQuestion from "@/components/CommentQuestions";
import Head from "next/head";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CommentQuestionsPage = () => {
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
        <title>{"BUSIPOOL | Комментарии и вопросы"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <div>
        <div className="max-container">
          <div className="flex flex-col items-center gap-y-[10px]">
            <div className="flex items-start gap-x-[10px] text-gray-dark">
              <h3 className="w-[164px] text-2xl font-bold leading-[120%] sm:w-max">
                Комментарии и вопросы
              </h3>
              <span className="rounded-[5px] bg-primary px-[10px] py-[5px] text-white">
                +1
              </span>
            </div>
            <p className="text-base font-light leading-[120%] opacity-60">
              Здесь хранятся вопросы
            </p>
          </div>
          <Tabs className={"mt-[100px]"}>
            <TabList
              className={
                "mx-auto flex w-max gap-x-[30px] text-lg font-bold text-gray-dark"
              }
            >
              <Tab className={"cursor-pointer opacity-60"}>Требуется ответ</Tab>
              <Tab className={"cursor-pointer opacity-60"}>Ответ получен</Tab>
            </TabList>
            <div className="my-[60px] md:mx-[20px] lg:mx-[144px]">
              <TabPanel>
                <CommentQuestion questions={investors} />
                <div className="w-full flex justify-center">
                  <Button
                    text={"Показать еще"}
                    primary
                    style={"sm:w-[415px] w-[300px] text-sm !py-5"}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <CommentQuestion questions={investors} received={true} />
                <div className="w-full flex justify-center">
                  <Button
                    text={"Показать еще"}
                    primary
                    style={"sm:w-[415px] w-[300px] text-sm !py-5"}
                  />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default CommentQuestionsPage;
