"use client";
import Link from "next/link";
import Button from "@/components/Button";
import { footerLinks, socialMedia } from "@/constants";
import { usePathname } from "next/navigation";
import { postSubscription } from "@/app/api/blogs/blogs";
import Image from "next/image";
import Busipool from "@/assets/images/busipool.png";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();

  const subscribe = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email")?.trim();

    postSubscription({ email })
      .then(() => {
        if (email === "") {
          toast.error("Пожалуйста, введите ваш email");
        } else {
          toast.success("Вы успешно подписались на рассылку");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Произошла ошибка при подписке");
      });
  };
  const downloadFile = () => {
    const fileUrl = "/privacy-and-policy.docx";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "конфиденциальности.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-secondary text-primary">
      <ToastContainer />
      <div className="flex flex-wrap items-center gap-x-[60px] bg-primary px-5 py-[30px] text-white md:justify-center md:pb-[60px] md:pt-[60px] xl:justify-evenly">
        <div className="mb-[30px] w-max lg:w-min">
          <h3 className="mb-[12px] w-max text-base font-bold leading-[120%] md:mb-[12px] md:text-[36px]">
            Подпишитесь на нашу рассылку
          </h3>
          <p className="text-xs font-light leading-[110%] md:text-base">
            Мы регулярно рассказываем нашим подписчикам о новых проектах,
            достигнутых результатах и историях успеха. Ваш адрес не попадет
            в чужие руки, и мы не будем отправлять на него рекламу.
          </p>
        </div>
        <form
          className="flex w-full items-center gap-x-[30px] sm:w-max md:gap-x-[40px]"
          onSubmit={subscribe}
        >
          <div className="w-full border-b border-white pb-2 xs:w-max lg:w-[260px]">
            <input
              name="email"
              type="email"
              placeholder="Введите e-mail"
              className="w-full bg-transparent text-sm !leading-[24px] outline-none placeholder:text-[10px] placeholder:text-white placeholder:opacity-70 md:text-xl md:placeholder:text-base"
            />
          </div>
          <Button text="Подписаться" light />
        </form>
      </div>
      <div className="max-container py-[60px]">
        {/* footer links */}
        <div className="mb-[60px] grid grid-cols-12 justify-center gap-y-[30px] sm:justify-around md:gap-5 lg:gap-[30px]">
          {footerLinks.map((item, index) => (
            <div key={index} className={`col-span-6 w-max sm:col-span-4`}>
              <h3 className="md:text-md mb-3 max-w-max text-sm font-bold uppercase leading-[20px] text-[#6c7d69] md:mb-[40px] lg:text-lg">
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
            <Link
              target="_blank"
              href={social.href}
              key={idx}
              className="h-[30px] w-[30px]"
            >
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
