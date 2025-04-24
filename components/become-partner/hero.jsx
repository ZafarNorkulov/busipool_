"use client";
import React from "react";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import Stats from "../../components/sections/Stats";
import Link from "next/link";
import Button from "../Button";

const BecomePartnerHero = () => {
  return (
    <div>
      <div className="max-w-[1430px] px-5 md:mx-[9%]">
        <Stats />
      </div>
      <div className="max-container mb-[30px] mt-[60px] md:mt-[100px]">
        <BusipoolLogoLarge />
      </div>

      <div className="max-container">
        <div className="mb-[100px] mt-[30px] flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[60px] md:mb-[60px] md:mt-[60px] lg:flex-nowrap xl:mb-[100px] xl:mt-[100px] wide:flex-nowrap">
          <p className="text-center text-xl font-light tracking-[0.01em] text-primary md:text-lg xl:w-[55%] xl:text-left wide:flex-1 2xl:text-[24px]">
            Цель нашей краудфандинговой платформы - предоставить вам возможность{" "}
            <span className="text-xl text-gold md:text-lg 2xl:text-[24px]">
              увеличить свои инвестиции
            </span>{" "}
            через вложения в проекты.
          </p>
          <div className="w-full flex-col items-stretch gap-[30px] sm:flex sm:flex-row sm:items-center md:flex-nowrap xl:w-[45%]">
            <Link href={"/profil/sozdat"} className="w-full lg:w-[50%]">
              <Button
                text="Как это работает"
                fullWidth={true}
                style={
                  "sm:mb-0 mb-2 text-sm !px-0 md:border-2 !py-5 xl:text-xl  leading-[24px]"
                }
              />
            </Link>
            <Link href={"/profil/sozdat"} className="w-full lg:w-[50%]">
              <Button
                text="Разместить компанию"
                style={
                  "text-sm !py-5 xl:text-xl md:border-2 !px-0  leading-[24px]"
                }
                primary
                fullWidth={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartnerHero;
