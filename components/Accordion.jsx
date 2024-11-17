"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className={`cursor-pointer border-b border-gray-dark pb-[60px] pr-[16px] pt-[20px] transition sm:pb-[30px] md:border-b-2 md:pr-[46px] md:pt-[60px] ${toggle ? "h-auto" : "h-[70px] overflow-hidden md:h-[125px]"}`}
    >
      <div className="flex items-center justify-between pb-[20px] md:pb-[30px]">
        <h3 className="text-[20px] font-light text-gray-dark md:text-[32px]">
          {title}
        </h3>

        <AiOutlinePlus className="size-[20px] text-gray-light md:size-[30px]" />
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Accordion;
