"use client";
import React, { useEffect, useState } from "react";
import Stats from "../sections/Stats";
import BusipoolLogoLarge from "../BusipoolLogoLarge";
import SignUpLink from "../SignUpLink";
import SignInLink from "../SignInLink";

const InvestorsHero = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }
  }, []);

  return (
    <div>
      <div className="max-w-[1430px] px-5 md:mx-[9%]">
        <Stats />
      </div>

      <div className="mb-[30px] mt-[50px] w-fit px-[10px] md:mt-[100px] md:px-[20px]">
        <BusipoolLogoLarge />
      </div>

      <div className="max-container">
        <div className="flex flex-col items-center gap-x-5 gap-y-[30px] lg:flex-row">
          <p
            className={`text-center text-xl font-light tracking-[0.01em] text-primary md:text-lg ${!token && "lg:w-[50%] xl:w-[60%]"} xl:text-left 2xl:text-[24px]`}
          >
            Цель нашей краудфандинговой платформы - предоставить вам возможность{" "}
            <span className="text-xl text-gold md:text-lg xl:text-left 2xl:text-[24px]">
              увеличить свои инвестиции
            </span>{" "}
            через вложения в проекты, с которых можно заработать.
          </p>

          {!token && (
            <div className="flex w-full flex-nowrap justify-center gap-[30px] lg:w-1/2 xl:w-[40%]">
              <SignUpLink
                styles={
                  "lg:w-[60%] sm:w-[230px] w-[60%] py-5 !px-0 !justify-center"
                }
              />
              <SignInLink
                styles={
                  "lg:w-[40%] sm:w-[150px] py-5  w-[40%] !px-0 !justify-center"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorsHero;
