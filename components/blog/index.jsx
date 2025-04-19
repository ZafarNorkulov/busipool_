import { getBlogs } from "@/app/api/blogs/blogs";
import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";

const BlogComponent = () => {
      const [blogs, setBlogs] = useState([]);
    
      useEffect(() => {
        fetchBlogsApi();
      }, []);
    
      function fetchBlogsApi() {
        getBlogs()
          .then((response) => {
            setBlogs(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }


  return (
    <div className="relative flex w-full shrink-0 flex-col gap-[20px] rounded-[3px] p-[15px] md:gap-[40px] md:rounded-[5px] md:p-[30px]">
      {blogs?.results?.map((blog) => (
        <div className="col-span-12 md:col-span-6">
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
  );
};

export default BlogComponent;
