"use client"

import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constants";
import { useEffect, useState } from "react";

import { getBlogs } from "@/app/api/blogs/blogs";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogsApi();
  }, []);

  function fetchBlogsApi() {
    getBlogs().then((response) => {
      setBlogs(response);
      console.log('hello world');

    }
    ).catch((error) => {
      console.log(error);
    });
  }

  return (
    <section className="blog-container mb-[150px] pt-[150px]">
      <h2 className="section-title mb-[30px] md:mb-[100px]">Блог</h2>
      <div className="flex flex-col items-center justify-center gap-[60px]">
        {blogs?.results?.map((blog) => (
          <BlogCard
            img={blog.image}
            title={blog?.title}
            text={blog?.description}
            key={blog?.id}
            id={blog?.id}
            large
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
