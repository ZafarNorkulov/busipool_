"use client";
import CommentQuestion from "@/components/CommentQuestions";
import Head from "next/head";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CommentQuestionsPage = () => {
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
      <section className="mb-[150px] mt-[100px]">
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
            <TabList className={"mx-auto flex w-max gap-x-[30px]"}>
              <Tab className={"cursor-pointer"}>Требуется ответ</Tab>
              <Tab className={"cursor-pointer"}>Ответ получен</Tab>
            </TabList>
            <TabPanel>
              <CommentQuestion />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default CommentQuestionsPage;
