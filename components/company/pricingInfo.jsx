"use client";
import React, { useState } from "react";
import Feedback from "../Feedback";
import Button from "../Button";

const PricingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1140px] px-5 md:!mx-[20%]">
      <div className="mx-auto flex h-screen max-w-[1140px] flex-col justify-center">
        <h2 className="section-title mb-[30px] md:mb-[100px]">
          Сколько это стоит?
        </h2>

        <div className="flex flex-col items-center border-b-2 border-gray-dark pb-7 lg:pb-[100px]">
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
      <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PricingInfo;
