import Link from "next/link";
// import scrollToTop from "@/utils/scrollToTop";
import scrollToTop from "../../utils/scrollToTop";
import { BsArrowDownRight } from "react-icons/bs";

const InvestorCardLink = ({ name, id }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-end justify-between rounded-[10px] p-[20px] shadow md:p-6 lg:p-[30px] xl:h-auto"
    >
      <h2 className="mb-[10px] h-[60px] text-base sm:text-[18px] font-light leading-[110%] text-gray-dark md:mb-[55px] md:h-[96px] md:text-2xl lg:text-[32px] xl:h-auto 2xl:text-[48px]">
        {name}
      </h2>

      <Link
        href={`/company/type`}
        onClick={scrollToTop}
        className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-lg 2xl:text-[24px]`}
      >
        Подробнее
        <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-lg 2xl:text-[24px]" />
      </Link>
    </div>
  );
};

export default InvestorCardLink;
