"use client";
import Button from "@/components/Button";
import Image from "next/image";
import blog1 from "@/assets/images/blog/blog1.jpg";
import { useParams } from "next/navigation";
import { getBlogs, getBlogWithId } from "@/app/api/blogs/blogs";
import { useState, useEffect } from "react";
import Link from "next/link";

const BlogDetail = () => {
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { slug } = useParams();

  function fetchData() {
    Promise.all([getBlogWithId(slug), getBlogs()])
      .then(([blogResponse, blogsResponse]) => {
        setBlog(blogResponse);
        setBlogs(blogsResponse?.results || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchData();
  }, [slug]);

  const [prevSlug, setPrevSlug] = useState();
  const [nextSlug, setNextSlug] = useState();

  useEffect(() => {
    if (!(blogs.length > 0 || slug)) return;
    const blogIndex = blogs.findIndex((item) => item.slug == slug);
    if (blogIndex > 0) {
      setPrevSlug(blogs[blogIndex - 1]?.slug);
    } else {
      setPrevSlug(null);
    }

    if (blogIndex < blogs.length - 1) {
      setNextSlug(blogs[blogIndex + 1]?.slug);
    } else {
      setNextSlug(null);
    }
  }, [blogs, slug]);

  return (
    <section className="mt-[90px] sm:mt-[120px] lg:mt-[130px]">
      <div className="max-container mb-[30px] mt-[30px] flex justify-between md:mb-[70px] md:mt-[100px] 2xl:mb-[100px]">
        <Link href={`/videniy/blog/${nextSlug ? nextSlug : "#"}`}>
          <Button text="Назад" style={"!py-3 text-xs md:!py-4 md:!text-base"} />
        </Link>
        <Link href={`/videniy/blog/${prevSlug ? prevSlug : "#"}`}>
          <Button
            text="Следующая статья"
            style={"!py-3 text-xs md:!py-4 md:!text-base"}
          />
        </Link>
      </div>

      <div className="max-container mx-auto px-5 md:max-w-[1430px]">
        <div className="relative mb-[30px] aspect-[16/9] w-full overflow-hidden rounded-xl md:mb-[50px] 2xl:mb-[100px]">
          <Image
            src={blog?.image}
            alt="blog image"
            fill
            priority
            className="object-cover"
          />
        </div>

        <h2 className="mx-auto mb-[20px] w-max text-center text-2xl font-bold leading-[110%] text-gray-dark md:text-4xl md:leading-[120%] 2xl:mb-[60px] 2xl:text-[64px]">
          {blog?.title}
        </h2>

        <div className="mx-auto mb-[30px] max-w-[1430px] px-5 md:mb-[100px]">
          <p className="mx-5 mb-5 text-left text-base font-light leading-[140%] text-gray-light md:mb-[50px] md:text-3xl lg:mx-[100px] 2xl:text-[36px]">
            {blog?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
