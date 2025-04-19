"use client";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ForCompany from "@/components/profile/statistics/forCompany";

const StatisticsComponent = () => {
  return (
    <section>
      <div className="max-container">
        <div className="mx-auto flex w-max flex-col items-center gap-y-[10px] text-gray-dark">
          <h3 className="text-2xl font-bold">Ваши проекты</h3>
          <p className="text-base font-light opacity-60">
            Здесь хранятся ваши проекты
          </p>
        </div>
        <Tabs className={"mt-[100px]"}>
          <TabList
            className={
              "mx-[100px] flex flex-wrap justify-between lg:flex-nowrap"
            }
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
          <TabPanel className={"xl:mx-[144px]"}>
            <ForCompany />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default StatisticsComponent;
