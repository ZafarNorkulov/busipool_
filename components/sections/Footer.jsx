"use client";
import Link from "next/link";
import Button from "@/components/Button";
import { footerLinks } from "@/constants";
import { SlSocialVkontakte } from "react-icons/sl";
import { SiTelegram } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { postSubscription } from "@/app/api/blogs/blogs";

const Footer = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();
  const [inputValue, setInputValue] = useState({
    email: "",
  });

  const subscribe = () => {
    console.log(inputValue);

    postSubscription(inputValue)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <footer className="bg-secondary text-primary">
      <div className="flex flex-wrap items-center justify-center gap-x-[60px] bg-primary py-[30px] text-white md:pb-[86px] md:pt-[60px]">
        <div className="mb-[30px] w-min">
          <h3 className="mb-[12px] w-max text-base font-bold leading-[120%] md:mb-[12px] md:text-[36px]">
            Подпишитесь на нашу рассылку
          </h3>
          <p className="text-[12px] font-light md:text-base">
            Мы регулярно рассказываем нашим подписчикам о новых проектах,
            достигнутых результатах и историях успеха.
          </p>
        </div>
        <div className="flex items-center gap-x-[30px] md:gap-x-[60px]">
          <div className="max-w-[137px] border-b border-white pb-2">
            <input
              onChange={(e) => setInputValue({ email: e.target.value })}
              type="email"
              placeholder="Введите e-mail"
              className="w-full bg-transparent text-[24px] outline-none placeholder:text-[10px] placeholder:leading-[24px] placeholder:text-white placeholder:opacity-70 md:placeholder:text-base"
            />
          </div>
          <Button onclick={subscribe} text="Подписаться" light />
        </div>
      </div>
      <div className="max-container py-[60px]">
        {/* footer links */}
        <div className="mb-[60px] grid grid-cols-[repeat(2,auto)] justify-around md:grid-cols-4 md:gap-5 lg:gap-[30px]">
          {footerLinks.map((item, index) => (
            <div key={index} className="w-max">
              <h3 className="md:text-md mb-3 max-w-max text-sm font-bold uppercase leading-[20px] text-gray-light md:mb-[40px] lg:text-lg">
                {item.title}
              </h3>
              {item.links.map((link, index) => (
                <ul key={index}>
                  <li className="mb-2 max-w-max md:mb-[30px]">
                    <Link
                      href={link.href}
                      className="md:text-md font-helvetica text-[12px] text-gray-dark hover:underline hover:underline-offset-2 lg:text-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>

        {pathName == "/" && <BusipoolLogoLarge />}

        {/* footer social media icons */}
        <div className="mt-[30px] flex items-center justify-center gap-[30px] sm:mb-[60px] md:justify-end md:gap-[20px]">
          <Link href="" className="h-[30px] w-[30px]">
            <SlSocialVkontakte className="block h-full w-full" />
          </Link>

          <Link href="" className="h-[30px] w-[30px]">
            <AiFillInstagram className="block h-full w-full" />
          </Link>

          <Link href="" className="h-[30px] w-[30px]">
            <RiWhatsappFill className="block h-full w-full" />
          </Link>

          <Link href="" className="h-[25px] w-[25px]">
            <SiTelegram className="block h-full w-full" />
          </Link>
        </div>

        {/* footer credits */}
        <div className="flex flex-wrap-reverse items-center justify-center gap-[20px] md:justify-between">
          <p className="mt-[60px] text-[12px] font-light sm:mt-0 sm:text-base">
            © BUSIPOOL. {currentYear}. Все права защищены.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            <Link
              href="/privacy-policy"
              rel="noopener noreferrer"
              className="text-base text-gray-dark sm:text-[20px]"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms-&-conditions"
              rel="noopener noreferrer"
              className="text-base text-gray-dark sm:text-[20px]"
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
