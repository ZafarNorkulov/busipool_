import React from "react";

const BusipoolAudience = () => {
  const suitables = [
    {
      text: "Открыли бизнес, проработали год, бизнес работает в плюс, но хочется вернуть займы на которые открывали бизнес.",
    },
    {
      text: "Подтвердил первые продажи, нужны деньги на масштабирование бизнеса, чтобы вложиться в новое оборудование и увелечить продажи",
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

          <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[30px] text-center 2xl:gap-x-[60px]">
            {suitables.map((item, index) => (
              <p
                key={index}
                className={` ${index % 2 === 0 ? "w-4/5 sm:w-1/2 lg:w-[45%] xl:w-[24%]" : "w-4/5 sm:w-1/2 lg:w-[45%] xl:w-[26%]"} text-balance text-base font-light leading-[140%] text-gray-light md:text-xl 2xl:text-[22px] md:leading-[140%] xl:flex-1`}
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
