"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mt-3 block w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer border-b-2 border-gray-dark pr-[16px]"
      >
        <div
          className={`mb-4 flex justify-between md:items-center 2xl:mb-[30px]`}
        >
          <h3 className="text-[20px] font-light !leading-normal text-gray-light md:text-xl 2xl:text-[32px]">
            {title}
          </h3>
          <AiOutlinePlus className="mt-2 size-[20px] text-gray-light md:mt-0 md:size-[30px]" />
        </div>
      </div>
      {toggle && <p className="mt-2 text-gray-dark">{description}</p>}
    </div>
  );
};

export default Accordion;
