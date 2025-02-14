"use client";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

import { getBlogs } from "@/app/api/blogs/blogs";
import { useEffect, useState } from "react";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  function fetchBlogsApi() {
    getBlogs()
      .then((response) => {
        setBlogs(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchBlogsApi();
  }, []);
  return (
    <section className="mb-[100px] max-w-[1430px] px-5 md:mx-[9.5%] md:mb-[150px] 2xl:mx-auto">
      <h2 className="section-title mb-[30px] md:mb-[100px]">
        <Link href="/about-us/blog" className="hover:underline">
          Блог
        </Link>
      </h2>
      <div className="grid grid-cols-12 gap-[20px]">
        {blogs?.results?.map((blog) => (
          <div className="col-span-12 xl:col-span-6" key={blog?.id}>
            <BlogCard
              img={blog.image}
              title={blog.title}
              text={blog.description}
              key={blog.id}
              id={blog.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlogs;
