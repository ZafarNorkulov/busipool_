"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import scrollToTop from "../utils/scrollToTop";

const BlogCard = ({ img, title, text, large, id }) => {
  return (
    <div
      className={`relative flex w-[300px] shrink-0 gap-[20px] rounded-[3px] p-[15px] shadow sm:w-[350px] md:w-[700px] md:gap-[40px] md:rounded-[5px] md:p-[30px] ${large && "md:w-full md:p-[60px]"}`}
    >
      <Image
        src={img}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="blog images"
        className={`h-auto ${large && "md:w-[375px]"} w-[120px] shrink-0 rounded-[5px] object-contain md:w-[235px]`}
      />

      <div className="flex flex-col">
        <h3
          className={`mb-[10px] text-base font-bold leading-[110%] text-gray-dark md:mb-[20px] ${large ? "md:mb-[30px] md:text-[48px]" : "md:text-[36px]"}`}
        >
          {title}
        </h3>
        <p className="line-clamp-2 text-[12px] font-light leading-[120%] text-gray-light md:line-clamp-3 md:text-[24px]">
          {text}
        </p>

        <Link
          href={`/about-us/blog/${id}`}
          onClick={scrollToTop}
          className={`mt-auto flex w-fit items-center self-end font-helvetica text-[8px] font-light leading-[110%] text-gray-dark hover:text-primary md:bottom-[30px] md:right-[30px] ${large ? "md:text-[24px]" : "md:text-base"}`}
        >
          Подробнее
          <BsArrowDownRight className="ml-[5px] md:ml-[10px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
