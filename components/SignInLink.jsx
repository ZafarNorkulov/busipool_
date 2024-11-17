import Link from "next/link";

const SignInLink = ({ styles }) => (
  <Link
    href="/sign-in"
    className={`flex items-center rounded-[3px] bg-primary px-[46px] py-[10px] text-[12px] font-bold leading-[130%] text-white transition-colors hover:brightness-95 active:scale-95 md:rounded-[5px] md:px-[140px] md:py-[20px] md:text-[20px] md:leading-[24px] ${styles}`}
  >
    Войти
  </Link>
);

export default SignInLink;
