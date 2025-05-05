"use client";
import React, { useState } from "react";
import Button from "../Button";
import Feedback from "../Feedback";

const WhyBusipool = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-container mb-[100px] md:mb-[150px]">
      <h2 className="section-title mb-[30px] md:mb-10 2xl:mb-[100px]">
        Почему BUSIPOOL?
      </h2>

      <div className="flex flex-col items-center">
        <div className="mb-[60px] flex w-[calc(100%-20px)] max-w-[1430px] flex-col gap-x-[10%] gap-y-[20px] px-5 md:mb-[80px] md:grid md:w-[calc(100%-80px)] md:grid-cols-10">
          <div className="col-span-10 lg:col-span-5">
            <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[30px]">
              Любое число участников сделки онлайн
            </h3>
            <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[22px]">
              Число участников сделки может достигать 500 и более человек. В
              виду того, что сделки на инвестиционной платформе BUSIPOOL
              проходят в онлайн-форме, акции вашей компании могут купить
              инвесторы со всей России.
            </p>
          </div>
          <div className="col-span-10 lg:col-span-5">
            <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[30px]">
              Экономия времени компании
            </h3>
            <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[22px]">
              Вам не придётся долгие месяцы нагружать своих сотрудников
              подписанием договоров с инвесторами, а потом готовить списки для
              выпуска акций. Все это сделает BUSIPOOL.
            </p>
          </div>

          <div className="col-span-10 lg:col-span-5">
            <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[30px]">
              Законность и безопасность
            </h3>
            <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[22px]">
              Все сделки на BUSIPOOL соответствуют <br />
              259-ФЗ: «О привлечении инвестиций с использованием инвестиционных
              платформ»,
              <br /> 208-ФЗ: «Об акционерных обществах», <br />
              39-ФЗ: «О рынке ценных бумаг».
            </p>
          </div>
          <div className="col-span-10 lg:col-span-5">
            <h3 className="mb-3 text-center text-[20px] font-bold leading-[110%] text-gray-dark md:text-left md:text-2xl 2xl:mb-[30px] 2xl:text-[30px]">
              Проверка инвесторов
            </h3>
            <p className="text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[22px]">
              Вы также можете быть уверены в юридической чистоте своих будущих
              инвесторов. BUSIPOOL проверяет всех инвесторов в рамках 
              115-ФЗ: «О противодействии легализации (отмыванию) доходов,
              полученных преступным путем, и финансированию терроризма» и
              присваивает им статус «Квалифицированный инвестор», если это
              необходимо.
            </p>
          </div>
        </div>

        <div className="max-container">
          <div className="flex justify-center">
            <Button
              text="Оставить заявку, чтобы получить информацию об акционировании"
              onclick={() => setIsOpen(true)}
              style={"!py-5 md:text-xl leading-[24px] text-base"}
            />
          </div>
        </div>
      </div>
      <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default WhyBusipool;
