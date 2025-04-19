"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import scrollToTop from "../utils/scrollToTop";

const BlogCard = ({ img, title, text, large, id }) => {
  return (
    <Link href={`/videniy/blog/${id}`} onClick={scrollToTop}>
      <div
        className={`relative flex w-full shrink-0 gap-5 rounded-[3px] p-[15px] shadow md:gap-5 md:rounded-[5px] md:p-5 2xl:gap-10 2xl:p-[30px]`}
      >
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          alt="blog images"
          className={`h-[120px] w-[120px] shrink-0 rounded-[5px] object-cover md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px] 2xl:h-[239px] 2xl:w-[239px]`}
        />

        <div className="flex w-full flex-col justify-end">
          <div className="flex flex-col gap-y-[10px] 2xl:gap-y-5">
            <h3
              className={`text-base font-bold text-gray-dark md:text-2xl 2xl:text-[36px]`}
            >
              {title}
            </h3>
            <p className="line-clamp-none text-xs font-light !leading-normal text-gray-light md:line-clamp-3 md:text-base lg:text-lg 2xl:text-2xl 2xl:leading-[120%]">
              {text}
            </p>
          </div>

          <div
            className={`mt-auto flex w-fit items-center self-end font-helvetica text-xs font-light leading-[110%] text-gray-dark hover:text-primary md:bottom-[30px] md:right-[30px] md:text-base`}
          >
            Подробнее
            <BsArrowDownRight className="ml-[5px] text-[8px] md:ml-[10px] md:text-base" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
