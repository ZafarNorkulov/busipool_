"use client";
import React from "react";
import Button from "@/components/Button";
import CommentQuestion from "@/components/CommentQuestions";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProfileComments = () => {
  return (
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
        <TabPanel className={"mx-auto flex w-max flex-col"}>
          <CommentQuestion />
          <div className="mt-[30px] flex w-full justify-center md:mt-[60px]">
            <Button
              text={"Показать еще"}
              primary
              style={"sm:w-[415px] w-[300px] text-sm !py-5"}
            />
          </div>
        </TabPanel>
        <TabPanel className={"mx-auto flex w-max flex-col"}>
          <CommentQuestion received={true} />
          <div className="mt-[30px] flex w-full justify-center md:mt-[60px]">
            <Button
              text={"Показать еще"}
              primary
              style={"sm:w-[415px] w-[300px] text-sm !py-5"}
            />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ProfileComments;
