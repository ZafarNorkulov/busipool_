import React from "react";

const CommentQuestion = ({ questions }) => {
  if (!questions) return "";
  return (
    <div className="flex flex-col gap-y-[30px]">
      {questions?.slice(0, 2)?.map((item, index) => (
        <div
          className="flex max-w-[415px] flex-col text-base font-bold leading-[120%] text-gray-dark"
          key={index}
        >
          <div className="flex flex-col gap-x-[45px] gap-y-[10px] sm:flex-row sm:gap-y-0">
            <h4>{item?.full_name}</h4>
            <h4 className="font-light sm:font-bold">{item?.phone}</h4>
          </div>
          <p className="mb-[20px] mt-[25px] font-light">
            Мне понравился ваш проект, внес в него 15 000 ₽. Надеюсь на хорошую
            прибыль, спасибо что делаете этот мир лучше.
          </p>
          <button className="ml-auto w-[150px] rounded-[5px] bg-primary py-[21px] text-xs font-light leading-[110%] text-white sm:w-[125px] sm:py-[8px]">
            Ответить
          </button>
        </div>
      ))}
    </div>
  );
};
export default CommentQuestion;
