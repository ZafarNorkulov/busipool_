import Link from "next/link";

const SignUpLink = ({ styles }) => (
  <Link
    href="/sign-up"
    className={`flex items-center rounded-[3px] border border-gray-dark px-[37px] py-[10px] text-[12px] font-bold leading-[24px] text-gray-dark transition-colors hover:border-primary hover:bg-primary hover:text-white hover:brightness-95 active:scale-95 md:rounded-[5px] md:border-2 md:px-[95px] md:py-[20px] md:text-[20px] ${styles}`}
  >
    Зарегистрироваться
  </Link>
);

export default SignUpLink;
