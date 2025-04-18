"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import scrollToTop from "../../utils/scrollToTop";
import { getProjectTypes } from "@/utils/request";

const Investors = () => {
  const [businessType, setTypeBusiness] = useState([]);

  useEffect(() => {
    getProjectTypes().then((res) => setTypeBusiness(res));
  }, []);

  return (
    <div>
      <h3 className="section-title mb-[30px] md:mb-[100px] md:mt-[150px] md:text-[64px]">
        База стартапов
      </h3>

      <div className="flex flex-wrap justify-center gap-[30px] md:gap-[20px]">
        {/*  */}
        <Link
          href={`/investoru/${businessType[0]?.id}`}
          onClick={scrollToTop}
          className="flex w-[230px] flex-col items-end justify-between rounded-[10px] p-[20px] shadow md:w-[calc(50%-10px)] md:p-[30px]"
        >
          <div>
            <h2 className="mb-[10px] text-lg font-light leading-[110%] text-gray-dark md:mb-[20px] md:text-[32px] lg:text-[48px]">
              {businessType[0]?.name}
            </h2>
            <p className="md:wrap-balance mb-[20px] text-[15px] font-light leading-[120%] text-gray-light opacity-70 md:mb-[30px] md:max-w-[85%] md:text-xl xl:text-[22px] 2xl:text-2xl">
              Посмотрите нашу базу интересных проектов для инвестирования
            </p>
          </div>

          <div
            className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
          >
            Подробнее
            <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
          </div>
        </Link>
        <Link
          href={`/investoru/${businessType[1]?.id}`}
          onClick={scrollToTop}
          className="flex w-[230px] flex-col items-end justify-between rounded-[10px] p-[20px] shadow md:w-[calc(50%-10px)] md:p-[30px]"
        >
          <div>
            <h2 className="mb-[10px] text-lg font-light leading-[110%] text-gray-dark md:mb-[20px] md:text-[32px] lg:text-[48px]">
              {businessType[1]?.name}
            </h2>
            <p className="md:wrap-balance mb-[20px] text-[15px] font-light leading-[120%] text-gray-light opacity-70 md:mb-[30px] md:max-w-[85%] md:text-xl xl:text-[22px] 2xl:text-2xl">
              Посмотрите нашу базу интересных малых бизнесов для инвестирования
            </p>
          </div>

          <div
            className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
          >
            Подробнее
            <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Investors;
