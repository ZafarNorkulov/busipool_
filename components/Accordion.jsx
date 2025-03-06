"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    // <div
    
    //   onClick={() => setToggle((prev) => !prev)}
    //   className={`cursor-pointer border-b border-gray-dark pr-[16px] pt-[20px] transition sm:pb-[30px] md:border-b-2 md:pr-[46px] md:pt-[60px] ${toggle ? "h-auto" : "h-[85px] overflow-hidden sm:h-[60px] md:h-[125px]"}`}
    // >
    //   <div
    //     className={`flex justify-between md:items-center ${!toggle && "pb-[20px] md:pb-[30px]"}`}
    //   >
    //     <h3 className="h-max text-[20px] font-light !leading-normal text-gray-dark sm:h-[30px]  2xl:h-[49px] md:text-xl 2xl:text-[32px]">
    //       {title}
    //     </h3>

    //     <AiOutlinePlus className="mt-2 size-[20px] text-gray-light md:mt-0 md:size-[30px]" />
    //   </div>
    //   <p className="text-gray-dark">{description}</p>
    // </div>
    <div className="w-full block mt-3">
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
