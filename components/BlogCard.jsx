"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import scrollToTop from "../utils/scrollToTop";

const BlogCard = ({ img, title, text, large, id }) => {
  return (
    <div
      className={`relative flex w-full shrink-0 gap-[20px] rounded-[3px] p-[15px] shadow  md:gap-[40px] md:rounded-[5px] md:p-[30px]`}
    >
      <Image
        src={img}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="blog images"
        className={`xl:h-[239px] xl:w-[239px] lg:w-[220px] lg:h-[220px] md:w-[170px] md:h-[170px] h-[120px] w-[120px] object-cover shrink-0 rounded-[5px] `}
      />

      <div className="flex w-full flex-col justify-end">
        <div>
          <h3
            className={`mb-[10px] text-base font-bold  text-gray-dark md:mb-[20px] lg:text-[36px] md:text-2xl`}
          >
            {title}
          </h3>
          <p className="line-clamp-2 text-xs md:text-base  font-light leading-[120%] text-gray-light md:line-clamp-3 lg:text-[24px]">
            {text}
          </p>
        </div>

        <Link
          href={`/about-us/blog/${id}`}
          onClick={scrollToTop}
          className={`mt-auto flex w-fit items-center self-end font-helvetica text-[8px] font-light leading-[110%] text-gray-dark hover:text-primary md:bottom-[30px] md:right-[30px] md:text-base`}
        >
          Подробнее
          <BsArrowDownRight className="ml-[5px] text-[8px] md:text-base md:ml-[10px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
