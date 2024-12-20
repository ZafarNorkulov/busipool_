import Link from "next/link";
// import scrollToTop from "@/utils/scrollToTop";
import scrollToTop from "../../utils/scrollToTop";
import { BsArrowDownRight } from "react-icons/bs";

const InvestorCardLink = ({ name, id }) => {
  return (
    <div
      key={id}
      className="flex flex-[1_0_230px] flex-col justify-between rounded-[10px] p-[20px] shadow md:flex-[1_0_560px] md:p-[30px]"
    >
      <h2 className="mb-[10px] text-[18px] font-light leading-[110%] text-gray-dark md:mb-[55px] md:text-[48px]">
        {name}
      </h2>

      <Link
        href={`/company/type`}
        onClick={scrollToTop}
        className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
      >
        Подробнее
        <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
      </Link>
    </div>
  );
};

export default InvestorCardLink;
