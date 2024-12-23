"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import scrollToTop from "../utils/scrollToTop";

const BlogCard = ({ img, title, text, large, id }) => {
  return (
    <div
      className={`relative flex w-full shrink-0 gap-[20px] rounded-[3px] p-[15px] shadow md:gap-[30px] xl:gap-[40px] md:rounded-[5px] md:p-[30px]`}
    >
      <Image
        src={img}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="blog images"
        className={`h-[120px] w-[120px] shrink-0 rounded-[5px] object-cover md:h-[170px] md:w-[170px] lg:h-[220px] lg:w-[220px] xl:h-[239px] xl:w-[239px]`}
      />

      <div className="flex w-full flex-col justify-end">
        <div>
          <h3
            className={`mb-[10px] text-base font-bold text-gray-dark md:mb-[20px] md:text-2xl xl:text-[36px]`}
          >
            {title}
          </h3>
          <p className="line-clamp-2 text-xs font-light leading-[120%] text-gray-light md:line-clamp-3 md:text-base lg:text-xl xl:text-[24px]">
            {text}
          </p>
        </div>

        <Link
          href={`/about-us/blog/${id}`}
          onClick={scrollToTop}
          className={`mt-auto flex w-fit items-center self-end font-helvetica text-[8px] font-light leading-[110%] text-gray-dark hover:text-primary md:bottom-[30px] md:right-[30px] md:text-base`}
        >
          Подробнее
          <BsArrowDownRight className="ml-[5px] text-[8px] md:ml-[10px] md:text-base" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
