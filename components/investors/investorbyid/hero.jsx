import React from "react";

const InvestorByIdHero = () => {
  return (
    <div className="max-container pb-[30px] pt-[60px] md:py-[100px]">
      <h2 className="section-title mb-[20px] !text-left md:mb-[30px]">
        {selectedType}
      </h2>
      <p className="text-base font-light leading-[130%] text-gray-light md:text-[32px] md:leading-[120%]">
        Если вы хотите найти инвестиции для масштабирования своего бизнеса,
        разместите информацию о вашем проекте в каталоге, чтобы инвесторы могли
        увидеть его.
      </p>
    </div>
  );
};

export default InvestorByIdHero;
