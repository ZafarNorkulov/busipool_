"use client";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { blogs } from "@/constants";

import { getBlogs } from "@/app/api/blogs/blogs";
import { useEffect, useState } from "react";

const HomeBlogs = () => {
  // const recentBlogs = blogs.slice(0, 2);

  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetchBlogsApi();
  }, []);

  function fetchBlogsApi() {
    getBlogs().then((response) => {
      console.log('response');
      console.log(response);
      setBlogs(response);
      console.log('response');
    }
    ).catch((error) => {
      console.log(error);
    });
  }

  return (
    <section className="max-container mb-[100px] md:mb-[150px]">
      <h2 className="section-title mb-[30px] md:mb-[100px]">
        <Link href="/about-us/blog" className="hover:underline">
          Блог
        </Link>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-[20px]">
        {blogs?.results?.map((blog) => (
          <BlogCard
            img={blog.image}
            title={blog.title}
            text={blog.text}
            key={blog.id}
            id={blog.id}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBlogs;
