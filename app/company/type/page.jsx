"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Type1 from "@/assets/images/svg/type1.svg";
import Type2 from "@/assets/images/svg/type2.svg";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { getCompanyTypeCategoryByID } from "@/app/api/company/company";

const CompanyTypePage = () => {
  const [categoryType, setCategoryType] = useState([]);
  useEffect(() => {
    (async () => {
      await getCompanyTypeCategoryByID().then((res) => setCategoryType(res));
    })();
  }, []);

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Компания"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <div className="max-container mb-[100px] mt-[130px] sm:mt-[150px] md:mb-[150px] md:mt-[170px] lg:mt-[185px]">
        <h2 className="section-title mb-[30px] !text-left">
          Стартапы и малый бизнес
        </h2>
        <p className="mb-[30px] font-light leading-[120%] text-gray-light md:mb-[60px] md:text-[32px]">
          Если вы хотите начать инвестировать в стартапы и малые бизнесы, то
          зарегристрируйтесь или войдите в аккаунт, чтобы увидеть больше
          информации о проектах.
        </p>
        {categoryType.length ? (
          <div className="mx-auto flex max-w-[1140px] flex-col justify-center gap-x-[20px] sm:flex-row">
            <div className="card flex flex-col p-[30px] text-gray-dark shadow-md sm:w-[45%]">
              <Image
                src={Type1}
                className="h-[90px] w-[90px] md:h-[110px] md:w-[110px]"
                alt="image"
              />
              <span className="mb-[40px] mt-[30px] text-xl font-light leading-[110%] sm:mb-[70px] sm:mt-[50px] md:text-[32px] lg:mb-[100px] lg:mt-[73px]">
                {categoryType[0]?.name}
              </span>
              <Link
                href={`/company/type/${categoryType[0]?.id}`}
                className="ml-auto flex w-fit items-center text-base font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]"
              >
                Подробнее
                <BsArrowDownRight className="ml-[5px] text-base md:ml-[10px] md:text-[24px]" />
              </Link>
            </div>
            <div className="card flex flex-col p-[30px] text-gray-dark shadow-md sm:w-[45%]">
              <Image
                src={Type2}
                className="h-[90px] w-[90px] md:h-[110px] md:w-[110px]"
                alt="image"
              />
              <span className="mb-[40px] mt-[30px] text-xl font-light leading-[110%] sm:mb-[70px] sm:mt-[50px] md:text-[32px] lg:mb-[100px] lg:mt-[73px]">
                {categoryType[1]?.name}
              </span>
              <Link
                href={`/company/type/${categoryType[0]?.id}`}
                className="ml-auto flex w-fit items-center text-base font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]"
              >
                Подробнее
                <BsArrowDownRight className="ml-[5px] text-base md:ml-[10px] md:text-[24px]" />
              </Link>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default CompanyTypePage;
