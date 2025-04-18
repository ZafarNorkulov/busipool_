"use client";
import React, { useState } from "react";
import Button from "../Button";
import Feedback from "../Feedback";

const WhoCanJoin = () => {

 const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="max-container">
        <h2 className="section-title mb-[30px] text-balance md:mb-[100px]">
          Кто может разместиться на BUSIPOOL?
        </h2>
      </div>
      <div className="max-w-[1430px] px-5 md:mx-[9%]">
        <div>
          <div className="mb-[60px] flex flex-col justify-between gap-y-[60px] lg:flex-row">
            <div className="w-full md:w-[633px] lg:!w-[calc(50%-30px)]">
              <h3 className="mb-[30px] whitespace-nowrap border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px] lg:px-0 xl:px-[95px]">
                Эшелон A / до 1 млрд.₽
              </h3>

              <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px] lg:h-[190px] xl:h-auto">
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
                Завершена регистрация дополнительного выпуска эмиссионных ценных
                бумаг и данные бумаги размещаются на инвестиционной платформе
                BUSIPOOL.
              </p>
            </div>

            <div className="w-full md:w-[633px] lg:!w-[calc(50%-30px)]">
              <h3 className="mb-[30px] whitespace-nowrap border-b border-gray-dark px-[60px] pb-[20px] text-center text-[20px] font-bold leading-[120%] text-gray-dark md:mb-[60px] md:border-b-2 md:px-[95px] md:pb-[10px] md:text-left md:text-[32px] lg:px-0 xl:px-[95px]">
                Эшелон С / до 60 млн.₽
              </h3>

              <p className="mb-[30px] text-base font-light leading-[140%] text-gray-light md:mb-[60px] md:text-[24px] md:leading-[31px] lg:h-[190px] xl:h-auto">
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
                Завершена регистрация дополнительного выпуска эмиссионных ценных
                бумаг и данные бумаги размещаются на инвестиционной платформе
                BUSIPOOL.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-container mb-20 flex flex-col items-center lg:!w-[80%] 2xl:!w-[52%]">
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
    </div>
  );
};

export default WhoCanJoin;
