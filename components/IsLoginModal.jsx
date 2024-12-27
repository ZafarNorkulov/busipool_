import Image from "next/image";
import React from "react";
import X from "@/assets/images/x.png";
import SignUpLink from "./SignUpLink";
import SignInLink from "./SignInLink";

const LoginToastify = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`fixed right-0 top-0 z-50 h-screen max-w-full overflow-hidden bg-white px-5 py-[100px] text-gray-dark 2xl:h-auto 2xl:max-w-[1300px] ${isActive ? "" : "hidden"}`}
    >
      <Image
        src={X}
        alt="Close"
        className="absolute right-[7%] top-[5%] h-[30px] w-[30px] cursor-pointer md:h-[45px] md:w-[45px] lg:h-[62px] lg:w-[62px]"
        onClick={() => setIsActive(false)}
      />

      <div className="mx-auto flex items-center justify-center sm:max-w-[80%] md:max-w-[60%]">
        <div className="flex flex-col items-center justify-center gap-y-[30px]">
          <h3 className="text-[22px] font-bold leading-[120%] md:text-[32px] lg:text-[48px] 2xl:text-[64px]">
            Информация о проекте
          </h3>
          <p className="flex text-lg font-light leading-[120%] md:text-2xl lg:text-[28px] 2xl:text-[32px]">
            Информация о проекте доступна только после регистрации.
            Зарегистрируйтесь на нашей платформе и получите полную информацию о
            проектах.
          </p>
          <div className="my-[30px] flex flex-1 flex-wrap justify-center gap-[30px] md:flex-nowrap">
            <SignUpLink />
            <SignInLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginToastify;
