import Link from "next/link";
import scrollToTop from "../../utils/scrollToTop";
import { BsArrowDownRight } from "react-icons/bs";

const InvestorCardLink = ({ name, id }) => {
  return (
    <Link
      key={id}
      href={`/kompaniyam/tip`}
      onClick={scrollToTop}
      className="flex flex-col justify-between rounded-[10px] p-[20px] shadow md:p-6 lg:p-[30px] xl:h-auto"
    >
      <h2 className="mb-[10px] h-[60px] text-base font-light !leading-[110%]  text-gray-dark sm:text-[18px] md:mb-[55px] md:h-[96px] md:text-[24px] lg:text-[32px] xl:h-[64px] 2xl:text-[48px]">
        {name.trim()}
      </h2>

      <div
        className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-lg 2xl:text-[24px]`}
      >
        Подробнее
        <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-lg 2xl:text-[24px]" />
      </div>
    </Link>
  );
};

export default InvestorCardLink;
