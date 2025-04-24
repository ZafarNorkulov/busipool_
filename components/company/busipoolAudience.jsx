import React from "react";

const BusipoolAudience = () => {
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

  return (
    <div className="mb-[100px] md:mb-[150px]">
      <div className="max-container">
        <div className="flex flex-col justify-center">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Кому подойдет BUSIPOOL?
          </h2>

          <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[30px] 2xl:gap-x-[60px]">
            {suitables.map((item, index) => (
              <p
                key={index}
                className={
                  "w-4/5 text-center text-base font-light leading-[140%] text-gray-light sm:w-1/2 md:text-xl lg:w-[45%] xl:w-[22.5%] xl:text-lg 2xl:w-[calc(25%-45px)] 2xl:text-[22px]"
                }
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusipoolAudience;
