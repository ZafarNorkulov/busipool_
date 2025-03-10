"use client";
import Link from "next/link";
import Button from "@/components/Button";
import { footerLinks, socialMedia } from "@/constants";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { postSubscription } from "@/app/api/blogs/blogs";
import Image from "next/image";
import Busipool from "@/assets/images/busipool.png";
import { toast, ToastContainer } from "react-toastify";

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
        setInputValue({ email: "" });
        toast.success(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const downloadFile = () => {
    const fileUrl = "/privacy-and-policy.docx"; // Faylni public papkada joylashtiring
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "конфиденциальности.docx"; // Yuklab olish nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-secondary text-primary">
      <ToastContainer />
      <div className="flex flex-wrap items-center justify-center gap-x-[60px] bg-primary px-5 py-[30px] text-white md:pb-[60px] md:pt-[60px] lg:px-0">
        <div className="lg::w-min mb-[30px] w-max">
          <h3 className="mb-[12px] w-max text-base font-bold leading-[120%] md:mb-[12px] md:text-[36px]">
            Подпишитесь на нашу рассылку
          </h3>
          <p className="text-[12px] font-light md:text-base">
            Мы регулярно рассказываем нашим подписчикам о новых проектах,
            достигнутых результатах и историях успеха. Ваш адрес не попадет
            в чужие руки, и мы не будем отправлять на него рекламу.
          </p>
        </div>
        <div className="flex w-full items-center gap-x-[30px] sm:w-max md:gap-x-[60px]">
          <div className="w-full border-b border-white pb-2 xs:w-max lg:w-[137px]">
            <input
              value={inputValue.email}
              onChange={(e) => setInputValue({ email: e.target.value })}
              type="email"
              placeholder="Введите e-mail"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[10px] placeholder:leading-[24px] placeholder:text-white placeholder:opacity-70 md:text-[24px] md:placeholder:text-base"
            />
          </div>
          <Button onclick={subscribe} text="Подписаться" light />
        </div>
      </div>
      <div className="max-container py-[60px]">
        {/* footer links */}
        <div className="mb-[60px] grid grid-cols-12 justify-around gap-y-[30px] md:gap-5 lg:gap-[30px]">
          {footerLinks.map((item, index) => (
            <div key={index} className="col-span-6 w-max sm:col-span-4">
              <h3 className="md:text-md mb-3 max-w-max text-sm font-bold uppercase leading-[20px] text-gray-light md:mb-[40px] lg:text-lg">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-y-5 md:gap-y-[30px]">
                {item.links.map((link, index) => (
                  <li className="max-w-max" key={index}>
                    <Link
                      href={link.href}
                      className="md:text-md font-helvetica text-[12px] text-gray-dark hover:underline hover:underline-offset-2 lg:text-lg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {pathName == "/" && (
          <div className="relative w-full">
            <Image
              src={Busipool}
              alt="BUSIPOOL"
              width={0}
              height={0}
              sizes="100%"
              priority={true}
            />
          </div>
        )}

        {/* footer social media icons */}
        <div className="mb-[60px] mt-[30px] flex items-center justify-center gap-[20px] sm:mb-[30px] md:justify-end md:gap-[30px]">
          {socialMedia?.map((social, idx) => (
            <Link href={social.href} key={idx} className="h-[30px] w-[30px]">
              <Image src={social.src} sizes="100%" />
            </Link>
          ))}
        </div>

        {/* footer credits */}
        <div className="flex flex-wrap-reverse items-center justify-center gap-[20px] md:justify-between">
          <p className="mt-[40px] text-[12px] font-light text-gray-dark sm:mt-0 sm:text-base sm:font-normal">
            © BUSIPOOL. {currentYear}. Все права защищены.
          </p>

          <div className="flex flex-wrap justify-center gap-[20px] md:gap-[30px]">
            <button
              href="#"
              onClick={downloadFile}
              rel="noopener noreferrer"
              className="text-base text-gray-dark"
            >
              Политика конфиденциальности
            </button>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-base text-gray-dark"
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
