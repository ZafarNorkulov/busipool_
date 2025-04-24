"use client";
import { useState } from "react";
import plusIcon from "@/assets/images/svg/plus-icon.svg";
import Image from "next/image";

const Accordion = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mt-3 block w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer border-b-2 border-gray-dark pr-[16px]"
      >
        <div className="mb-4 flex justify-between md:items-center 2xl:mb-[30px]">
          <h3 className="text-xl font-light !leading-normal text-gray-light md:text-xl 2xl:text-[32px]">
            {title}
          </h3>
          <Image
            src={plusIcon}
            alt="plus icon"
            width={0}
            height={0}
            className={`mt-2 size-[20px] text-gray-light transition-transform duration-200 ease-in md:mt-0 lg:size-[30px] ${toggle ? "rotate-45" : ""}`}
          />
        </div>
      </div>

      {/* Animatsiyali p elementi */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "mt-2 max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="text-gray-dark">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
