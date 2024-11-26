import Button from "@/components/Button";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import img2 from "@/assets/images/login-images/img2.png";
import Image from "next/image";
import Head from "next/head";

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Регистрация"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <main className="flex flex-col-reverse overflow-hidden md:flex-row">
        <section className="flex w-full flex-1 flex-col items-center justify-center pt-3 lg:w-[560px] extraWide:w-[760px]">
          <form className="w-[calc(100%-20px)] sm:w-[calc(100%-150px)] md:w-[calc(100%-30px)] 2xl:md:w-[calc(100%-100px)]">
            <div className="mb-2 lg:mb-[30px]">
              <label htmlFor="email-phone" className="label-text">
                Введите код с e-mail
              </label>
              <input
                type="text"
                id="email-phone"
                className="login-input"
                placeholder="000-000"
              />
            </div>

            <div className="mb-4 md:mb-[30px] lg:mb-[60px] extraWide:mb-[150px]">
              <Button text="Продолжить" fullWidth primary />
            </div>

            <p className="text-[10px] font-light text-gray-light extraWide:text-[14px] extraWide:leading-[24px]">
              Нажав кнопку «Продолжить», вы даете подтверждение, что: 
              <br />
              1. Ознакомились с Декларацией о рисках, осознаете, что
              инвестирование с использованием Инвестиционной платформы является
              высокорискованным и может привести к потере инвестиций в полном
              объеме и принимаете такие риски.
              <br />
              2. Ознакомились и согласны с условиями Политики обработки
              персональных данных, даете согласие на обработку своих
              персональных данных.
              <br />
              3. Ознакомились с Правилами Платформы, при подаче заявки на
              подтверждение личности даете запрос на присоединение к данным
              Правилам и заключение Договора об оказании услуг по содействию в
              инвестировании.
              <br />
              4. Ознакомились с Правилами осуществления электронного
              документооборота и согласны с условиями данных Правил.
              <br />
              5. Ознакомились с Пользовательским соглашением эскроу-агента, при
              подаче заявки на подтверждение личности даете запрос на
              присоединение к данному Пользовательскому соглашению.
            </p>
          </form>
        </section>

        <section className="flex h-[100vh] w-auto flex-[2] flex-col gap-[20px] bg-secondary p-[24px] md:gap-[40px] lg:w-[calc(-560px+100vw)] extraWide:w-[calc(-560px+100vw)] extraWide:gap-[60px] extraWide:p-[60px]">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Logo"
              height={0}
              width={0}
              sizes="100%"
              priority={true}
              className="mx-auto h-[26px] w-[187px] object-contain sm:h-[30px] sm:w-[220px] md:mx-0"
            />
          </Link>

          <h1 className="wrap-balance text-center text-[22px] font-bold leading-[120%] text-gray-dark md:text-left md:text-[32px] lg:text-[48px] extraWide:text-[64px]">
            Зарегистрируйтесь, чтобы инвестировать или привлекать финансирование
          </h1>
          <Image
            src={img2}
            alt="image"
            width={0}
            height={0}
            sizes="100%"
            priority={true}
            className="mx-auto h-auto w-[250px] object-contain md:w-[600px] xl:w-[80vh] 2xl:w-[90vh] extraWide:w-[1140px]"
          />
        </section>
      </main>
    </>
  );
};

export default SignInPage;
