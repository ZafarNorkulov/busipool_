import Link from "next/link";

const SignInLink = ({ styles }) => (
  <Link
    href="/sign-in"
    className={`flex items-center justify-center rounded-[3px] bg-primary px-[37px] py-[10px] text-[12px] font-bold leading-[130%] text-white transition-colors hover:brightness-95 active:scale-95 sm:justify-normal md:rounded-[5px] md:px-[95px] md:py-[20px] md:text-base md:leading-[24px] xl:text-[20px] ${styles}`}
  >
    Войти
  </Link>
);

export default SignInLink;
