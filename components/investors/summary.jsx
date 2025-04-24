import React from "react";

const Summary = () => {
  return (
    <div className="mt-[80px] flex max-w-[1430px] flex-col items-center justify-center px-5 md:mx-[9%] 2xl:mt-[150px]">
      <h2 className="section-title mb-[30px] lg:mb-[100px] lg:text-[64px]">
        Кратко о сделках
      </h2>

      <div className="mb-[100px] flex flex-wrap justify-center  gap-y-[60px] sm:gap-y-10 text-center md:mb-[140px] lg:gap-x-[100px] xl:flex-nowrap 2xl:gap-x-[160px]">
        <div className="flex min-w-min max-w-[462px] flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
          <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
            Онлайн-сделки
          </h3>
          <p className="text-balance text-base leading-[120%] text-gray-dark md:leading-[140%] md:text-[18px] 2xl:text-[24px]">
            Благодаря BUSIPOOL вы можете приобретать доли в интересных вам
            компаниях без посещения нотариуса. Документы подписываются в
            онлайн-формате.
          </p>
        </div>
        <div className="flex min-w-min max-w-[462px] flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
          <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
            Аудит отчетности
          </h3>
          <p className="text-balance text-base leading-[120%] text-gray-dark md:leading-[140%] md:text-[18px] 2xl:text-[24px]">
            Для размещения на платформе компания должна предоставить аудиторское
            заключение на предмет корректности своей финансовой отчетности.
          </p>
        </div>
        <div className="flex min-w-min max-w-[462px] flex-col items-center gap-5 md:gap-6 2xl:gap-[30px]">
          <h3 className="w-max text-[20px] font-[900] text-primary md:text-2xl lg:text-[28px] 2xl:text-[32px]">
            Законность
          </h3>
          <p className="text-balance text-base leading-[120%] text-gray-dark md:leading-[140%] md:text-[18px] 2xl:text-[24px]">
            Сделки соответствуют 259-ФЗ «О привлечении инвестиций с
            использованием инвестиционных платформ», 208-ФЗ «Об акционерных
            обществах», 39-ФЗ «О рынке ценных бумаг».
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
