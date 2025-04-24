"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const CommentQuestion = ({ questions, received }) => {
  const pathName = usePathname();
  const [investors] = useState([
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
    {
      full_name: "Абрамов Филипп",
      phone: "+7(932)432-54-32",
      paid: "15 000 ₽",
    },
  ]);
  const isCommentPage = pathName.includes("comments");

  // if (!questions) return "";
  return !isCommentPage ? (
    <div className="flex flex-col gap-y-[30px]">
      {investors?.slice(0, 2)?.map((item, index) => (
        <div
          className="flex max-w-[320px] sm:max-w-[415px] flex-col text-base font-bold leading-[120%] text-gray-dark"
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
          <Link
            href="/profil/kommentarii"
            className="ml-auto w-[150px] rounded-[5px] bg-primary py-[18px] text-center text-xs font-light leading-[110%] text-white sm:w-[125px] sm:py-[8px]"
          >
            Ответить
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-y-[30px]">
      {investors?.slice(0, 4)?.map((item, index) => (
        <div
          className="flex-col text-base font-bold leading-[120%] text-gray-dark"
          key={index}
        >
          <div className="flex flex-col gap-x-[60px] gap-y-[10px] sm:flex-row sm:items-center sm:gap-y-0">
            <div className="flex justify-between gap-x-[60px] sm:justify-normal">
              <h4>{item?.full_name}</h4>
              <h4 className="font-light sm:font-bold">{item?.phone}</h4>
            </div>
            <div className="flex items-center justify-between gap-[60px] text-xs font-light leading-[110%] sm:justify-normal sm:gap-[15px]">
              {received && <p className="text-xs">Ответ получен</p>}

              <button className="w-[150px] rounded-[5px] bg-primary py-[21px] text-xs font-light leading-[110%] text-white sm:w-[125px] sm:py-[8px]">
                {!received ? "Ответить" : "Открыть чат"}
              </button>
            </div>
          </div>
          <p className="mb-[20px] mt-[25px] font-light">
            Мне понравился ваш проект, внес в него 15 000 ₽. Надеюсь на хорошую
            прибыль, спасибо что делаете этот мир лучше.
          </p>
        </div>
      ))}
    </div>
  );
};
export default CommentQuestion;
