import React from "react";

const FeedbackChat = () => {
  return (
    <div className="chat relative h-[600px] w-full border border-gray-dark px-[20px] py-[20px] md:h-[785px] md:px-[60px] md:py-[30px]">
      <div className="chat-content h-full max-h-[510px] overflow-y-scroll">
        <div className="mt-[30px] flex w-[70%] max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:w-[50%] md:gap-y-[10px] lg:w-[37.5%]">
          <h3 className="user text-base font-bold md:text-xl">
            Абрамов Филипп
          </h3>
          <p className="text-sm font-light md:text-lg">
            Мне понравился ваш проект, внес в него 15 000 ₽. Надеюсь на хорошую
            прибыль, спасибо что делаете этот мир лучше.
          </p>
        </div>
        <div className="ml-auto mt-[30px] flex w-[70%] max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:w-[50%] md:gap-y-[10px] lg:w-[37.5%]">
          <h3 className="user text-base font-bold md:text-xl">Вы</h3>
          <p className="text-sm font-light text-primary md:text-lg">
            Спасибо за поддержку, хотите что-нибудь узнать?
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] flex-col gap-y-[30px] md:bottom-[60px] md:left-[30px] md:w-[calc(100%-60px)]">
        <div className="mx-auto h-[1px] w-[60%] bg-gray-dark opacity-60"></div>
        <div className="flex flex-row items-baseline gap-x-5 md:gap-x-[30px]">
          <textarea
            placeholder="Напишите сообщение"
            rows={1}
            className="w-full resize-none border border-gray-dark p-[10px] text-sm font-light leading-6 placeholder:text-gray-dark focus-visible:rounded-none focus-visible:outline-primary md:p-5"
          />
          <button className="w-[180px] rounded-[5px] bg-primary py-[10px] text-sm font-bold leading-6 text-white md:w-[246px] md:py-5">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedbackChat;
