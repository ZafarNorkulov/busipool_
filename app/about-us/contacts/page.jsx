import SignInPage from "@/app/sign-in/page";
import Button from "@/components/Button";
import SignInLink from "@/components/SignInLink";
import SignUpLink from "@/components/SignUpLink";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";

const ContactsPage = () => {
  return (
    <>
      <div className="mb-[100px] bg-secondary py-[100px] md:mb-[150px] md:py-[150px]">
        <h2 className="section-title mb-[30px] md:mb-[100px]">Контакты</h2>

        <div className="max-container flex flex-col items-center justify-between gap-[20px] px-[10px] md:flex-row md:gap-[100px]">
          <div className="h-[200px] flex-auto shrink-0 self-stretch border-0 outline-none md:h-[500px] md:flex-1 xl:h-[600px] extraWide:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.601997546124!2d37.53223837641897!3d55.921601178977596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5398f6ad359f1%3A0x766d0ee5691c0582!2sDolgoprudnenskoye%20Shosse%2C%203%2C%20Moskva%2C%20Russia%2C%20141700!5e0!3m2!1sen!2s!4v1723969037718!5m2!1sen!2s"
              className="size-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex-1">
            <div className="mb-[20px] flex flex-wrap gap-x-[100px] gap-y-[20px] md:mb-[60px] md:gap-y-[30px]">
              <div>
                <h3 className="mb-[10px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[32px]">
                  Наш адрес
                </h3>
                <p className="font-light leading-[140%] text-gray-light md:text-[24px]">
                  г. Москва Долгопрудненское ш., д. 3
                </p>
              </div>
              <div>
                <h3 className="mb-[10px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[32px]">
                  Телефон
                </h3>
                <p className="font-light leading-[140%] text-gray-light md:text-[24px]">
                  +7 (954) 342-43-43
                </p>
              </div>
              <div>
                <h3 className="mb-[10px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[32px]">
                  Время работы
                </h3>
                <p className="font-light leading-[140%] text-gray-light md:text-[24px]">
                  Пн-Чт 9:00 - 20:00 / Пт 9:00 - 17:00
                  <br />
                  Сб-Вс, праздничные дни – Выходные
                </p>
              </div>
              <div>
                <h3 className="mb-[10px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[32px]">
                  E-mail
                </h3>
                <p className="font-light leading-[140%] text-gray-light md:text-[24px]">
                  kraudfand@gmail.com
                </p>
              </div>
            </div>

            <div className="mb-[60px] flex items-center gap-[30px] md:mb-[100px] md:gap-[20px]">
              <Link href="" className="size-[30px] md:size-[60px]">
                <SlSocialVkontakte className="block size-full text-gray-dark" />
              </Link>

              <Link href="" className="size-[30px] md:size-[60px]">
                <AiFillInstagram className="block size-full text-gray-dark" />
              </Link>

              <Link href="" className="size-[30px] md:size-[60px]">
                <RiWhatsappFill className="block size-full text-gray-dark" />
              </Link>

              <Link href="" className="size-[25px] md:size-[50px]">
                <SiTelegram className="block size-full text-gray-dark" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-between md:justify-start md:gap-[30px]">
              <SignUpLink />
              <SignInLink />
            </div>
          </div>
        </div>
      </div>

      <HomeBlogs />
    </>
  );
};

export default ContactsPage;
