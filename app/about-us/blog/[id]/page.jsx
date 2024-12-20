"use client";
import Button from "@/components/Button";
import Image from "next/image";
import blog1 from "@/assets/images/blog/blog1.jpg";
import Head from "next/head";
import { useParams } from "next/navigation";
import { getBlogs, getBlogWithId } from "@/app/api/blogs/blogs";
import { useState, useEffect } from "react";
import Link from "next/link";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  function fetchData() {
    Promise.all([getBlogWithId(id), getBlogs()])
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
  }, [id]);

  const [prevId, setPrevId] = useState();
  const [nextId, setNextId] = useState();

  useEffect(() => {
    if (!(blogs.length > 0 || id)) return;
    const blogIndex = blogs.findIndex((item) => item.id == id);
    if (blogIndex > 0) {
      setPrevId(blogs[blogIndex - 1]?.id);
    } else {
      setPrevId(null);
    }

    if (blogIndex < blogs.length - 1) {
      setNextId(blogs[blogIndex + 1]?.id);
    } else {
      setNextId(null);
    }
  }, [blogs, id]);

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
      <section className="mt-[90px] sm:mt-[120px] lg:mt-[130px]">
        <div className="max-container mb-[30px] mt-[30px] flex justify-between md:mb-[100px] md:mt-[100px]">
          <Link href={`/about-us/blog/${nextId ? nextId : "#"}`}>
            <Button
              text="Следующая статья"
              style={"!py-3 text-xs md:!py-4 md:!text-base"}
            />
          </Link>
          <Link href={`/about-us/blog/${prevId ? prevId : "#"}`}>
            <Button
              text="Назад"
              style={"!py-3 text-xs md:!py-4 md:!text-base"}
            />
          </Link>
        </div>

        <div className="max-container mx-auto md:max-w-[1430px]">
          <Image
            src={blog?.image || blog1}
            width={500}
            height={500}
            priority
            alt="blog image"
            className="mb-[30px] h-full max-h-[600px] w-full max-w-[1720px] rounded-xl md:mb-[100px]"
          />

          <h2 className="mx-auto mb-[20px] w-max text-center text-2xl font-bold leading-[110%] text-gray-dark md:mb-[60px] md:text-[64px] md:leading-[120%]">
            {blog?.title}
          </h2>

          <div className="mx-auto mb-[30px] max-w-[1430px] md:mb-[100px]">
            <p className="mx-5 mb-5 text-left text-base font-light leading-[140%] text-gray-light md:mb-[50px] md:text-[36px] lg:mx-[100px]">
              {blog?.title}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              ipsam non libero doloribus quasi officiis quibusdam iure, esse
              unde. Sint?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
