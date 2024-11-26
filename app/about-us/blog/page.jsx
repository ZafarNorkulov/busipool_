"use client"

import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

import { getBlogs } from "@/app/api/blogs/blogs";
import Head from "next/head";

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
    <>
     <Head>
        <title>{"BUSIPOOL | Блог"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
    <section className="blog-container mb-[150px] pt-[150px]">
      <h2 className="section-title mb-[30px] md:mb-[100px]">Блог</h2>
      <div className="relative grid grid-cols-12 w-full shrink-0 gap-[20px] rounded-[3px] p-[15px]  md:gap-[40px] md:rounded-[5px] md:p-[30px]">
        {blogs?.results?.map((blog) => (
          <div className="md:col-span-6 col-span-12">
            <BlogCard
              img={blog.image}
              title={blog?.title}
              text={blog?.description}
              key={blog?.id}
              id={blog?.id}
              large
            />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default BlogPage;
