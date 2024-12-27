"use client";
import aboutUsImage from "@/assets/images/about-us.jpg";
import Image from "next/image";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import Stats from "../../components/sections/Stats";
import { usePathname } from "next/navigation";
import Scroll from "@/components/Scroll";
import HomeBlogs from "@/components/sections/HomeBlogs";

const AboutUsPageLayout = ({ children }) => {
  const pathName = usePathname();

  const isBlogPage = pathName.includes("/about-us/blog");

  return (
    <section className="mt-[70px] sm:mt-[90px] lg:mt-[100px]">
      <Scroll />

      {!isBlogPage && (
        <>
          <div className="max-w-[1430px] px-5 pt-[30px] md:mx-[9%] md:pt-[100px]">
            <Stats />
          </div>
          <div className="md:max-container mx-auto mb-[30px] mt-[60px] w-full px-[12px] md:mt-[100px]">
            <BusipoolLogoLarge />
          </div>
          <div className="max-container">
            <div className="mb-[100px] mt-[30px] flex w-full flex-wrap justify-center gap-x-[20px] gap-y-[60px] md:mb-[60px] md:mt-[60px] lg:flex-none xl:mb-[100px] xl:mt-[100px] wide:flex-nowrap">
              <p className="flex w-max flex-wrap justify-center gap-[3px] text-center text-xl font-light tracking-[0.01em] text-primary md:text-lg lg:text-[15px] xl:text-left xl:text-lg wide:flex-1 2xl:text-[24px]">
                Цель нашей краудфандинговой платформы - предоставить вам
                возможность{" "}
                <span className="text-xl text-gold md:text-lg lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
                  увеличить свои инвестиции
                </span>{" "}
                через вложения в проекты.
              </p>
            </div>
          </div>
        </>
      )}

      {pathName == "/about-us" && (
        <div className="max-container mb-[100px] md:mb-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">О нас</h2>

          <div className="flex flex-col justify-center gap-x-[20px] gap-y-[30px] md:flex-row">
            <div className="flex flex-1 flex-col gap-y-[30px] xl:gap-y-[76px] wide:max-w-[850px]">
              <p className="text-xl font-light leading-[120%] tracking-normal text-gray-dark md:!text-[22px] lg:!text-[36px] xl:!text-[40px] 2xl:!text-[55px]">
                BUSIPOOL - онлайн-платформа, где инвестор может купить акции и
                стать совладельцем компаний малого и среднего бизнеса.
              </p>
              <p className="text-base font-light leading-[140%] text-black md:text-xl md:leading-[120%] md:text-gray-light xl:text-[32px]">
                Инвестиции начинаются от 15 тыс.₽, а перечень компаний
                неограничен - от финтех проектов, до производств и
                сельскохозяйственных компаний. Деньги, полученные от продажи
                акций компания может использовать для финансирования своего
                развития.
              </p>
            </div>
            <div className="flex-1 wide:max-w-[850px]">
              <Image
                src={aboutUsImage}
                alt="about us image"
                width={0}
                height={0}
                priority={true}
                sizes="100%"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {!isBlogPage && (
        <div className="bg-primary py-[60px] md:py-[100px]">
          <div className="max-container">
            <Stats large />
          </div>
        </div>
      )}
      {children}
      {!isBlogPage && <HomeBlogs />}
    </section>
  );
};

export default AboutUsPageLayout;
