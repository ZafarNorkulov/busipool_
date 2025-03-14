import SignInLink from "@/components/SignInLink";
import SignUpLink from "@/components/SignUpLink";
import HomeBlogs from "@/components/sections/HomeBlogs";
import { socialMedia } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SlSocialVkontakte } from "react-icons/sl";

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Контакты"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <div className="mb-[100px] bg-secondary py-[100px] md:mb-[150px] md:py-[150px]">
        <h2 className="section-title mb-[30px] md:mb-[100px]">Контакты</h2>

        <div className="max-container md:px-[10px]">
          <div className="flex grid-cols-12 flex-col gap-[30px] sm:grid lg:gap-[60px] 2xl:gap-[100px]">
            <div className="relative col-span-12 h-[200px] flex-auto shrink-0 self-stretch border-0 outline-none md:h-[500px] md:flex-1 lg:col-span-6 xl:h-[600px] 2xl:col-span-6 extraWide:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.601997546124!2d37.53223837641897!3d55.921601178977596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5398f6ad359f1%3A0x766d0ee5691c0582!2sDolgoprudnenskoye%20Shosse%2C%203%2C%20Moskva%2C%20Russia%2C%20141700!5e0!3m2!1sen!2s!4v1723969037718!5m2!1sen!2s"
                className="size-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="mb-[20px] flex flex-col justify-between gap-x-[70px] gap-y-[20px] sm:flex-row md:mb-[60px] md:justify-normal md:gap-y-[30px] xl:gap-x-[100px]">
                <div className="flex flex-col items-start sm:items-center md:items-start md:gap-y-[30px]">
                  <div className="flex h-[72px] flex-col items-start gap-y-[10px] sm:items-center md:h-[120px] md:items-start md:gap-y-[30px]">
                    <h3 className="font-bold leading-[110%] text-gray-dark md:text-2xl 2xl:text-[32px]">
                      Наш адрес
                    </h3>
                    <p className="max-w-[300px] font-light leading-[140%] text-gray-light md:text-base 2xl:text-[24px]">
                      г. Москва Долгопрудненское ш., д. 3
                    </p>
                  </div>
                  <div className="flex h-[72px] flex-col items-start gap-y-[10px] sm:items-center md:h-[120px] md:items-start md:gap-y-[30px]">
                    <h3 className="font-bold leading-[110%] text-gray-dark md:text-2xl 2xl:text-[32px]">
                      Время работы
                    </h3>
                    <p className="max-w-[300px] font-light leading-[140%] text-gray-light md:text-base 2xl:text-[24px]">
                      Пн-Чт 9:00 - 20:00 / Пт 9:00 - 17:00
                      <br />
                      Сб-Вс, праздничные дни – Выходные
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-center md:items-start md:gap-y-[30px]">
                  <div className="flex h-[72px] flex-col items-start gap-y-[10px] sm:items-center md:h-[120px] md:items-start md:gap-y-[30px]">
                    <h3 className="font-bold leading-[110%] text-gray-dark md:text-2xl 2xl:text-[32px]">
                      Телефон
                    </h3>
                    <a href="tel:+7(954)342-43-43" className="max-w-[300px] cursor-pointer font-light leading-[140%] text-gray-light md:text-base 2xl:text-[24px]">
                      +7 (954) 342-43-43
                    </a>
                  </div>
                  <div className="flex h-[72px] flex-col items-start gap-y-[10px] sm:items-center md:h-[120px] md:items-start md:gap-y-[30px]">
                    <h3 className="font-bold leading-[110%] text-gray-dark md:text-2xl 2xl:text-[32px]">
                      E-mail
                    </h3>
                    <a href="mailto:kraudfand@gmail.com" className="max-w-[300px] cursor-pointer font-light leading-[140%] text-gray-light md:text-base 2xl:text-[24px]">
                      kraudfand@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-[60px] flex items-center gap-[30px] md:mb-[60px] md:gap-[20px] xl:mb-[100px]">
                {socialMedia?.map((social, i) => (
                  <Link
                    href={social.href}
                    className="size-[30px] md:size-[40px] xl:size-[60px]"
                    key={i}
                  >
                    <Image src={social.src} sizes="100%" />
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-12 gap-5 md:gap-[30px]">
                <SignUpLink
                  styles={"col-span-7 md:px-0 sm:justify-center justify-center"}
                />
                <SignInLink
                  styles={"col-span-5 md:px-0 sm:justify-center justify-center"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
