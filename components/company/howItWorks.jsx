import React from "react";
import { workProcess } from "../../constants";

const HowItWorks = () => {
  const formattedText = (text) => {
    return text
      .split(/([.:])/g) 
      .map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {part.match(/[.]/) ? <br /> : ""}
        </React.Fragment>
      ));
  };

  return (
    <div>
      <div className="h-[80px]" id="kak-eto-rabotaet" />
      <div className="bg-secondary pb-[150px] pt-[60px] md:pt-[100px]">
        <h2 className="mb-[30px] text-center text-2xl font-bold leading-normal text-gray-dark md:mb-[100px] md:text-[64px]">
          Как это работает?
        </h2>

        <div className="max-container">
          <p className="mx-auto mb-[15px] max-w-[1440px] text-center text-[15px] font-light !leading-[140%] text-gray-dark md:mb-[100px] md:text-left md:text-2xl lg:text-[32px]">
            Обращаем ваше внимание, что проектный менеджер BUSIPOOL или партнёр
            будет сопровождать вас на всем процессе размещения вашей компании и
            поможет вам его пройти максимально быстро.
          </p>
          <div className="mx-auto max-w-[1385px] pl-[25px] md:pl-[60px]">
            {workProcess.map((step, index, arr) => (
              <div
                key={index}
                className={`${
                  index == arr.length - 1
                    ? "pb-0"
                    : "pb-[60px] md:pb-[80px] lg:pb-[100px]"
                } ${
                  index == arr.length - 1
                    ? "border-0"
                    : "border-l md:border-l-2"
                } relative border-primary pl-[55px] md:pl-[140px] lg:pl-[275px] xl:pl-[372px]`}
              >
                <h3 className="mb-5 text-lg font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[26px] lg:text-[32px]">
                  {step.title}
                </h3>
                <p className="text-base leading-[140%] text-gray-light md:text-xl lg:text-2xl">
                  {formattedText(step.text)}
                </p>
                <span className="block text-base font-bold leading-[140%] text-gray-dark md:text-[24px]">
                  {step.deadline}
                </span>

                <span className="absolute left-0 top-0 flex size-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-primary bg-secondary text-[24px] font-light leading-[110%] text-primary md:h-[80px] md:w-[80px] md:text-[32px] lg:h-[125px] lg:w-[125px] lg:text-[48px]">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
