import BlogDetail from "@/components/blog/blogDetail";

export const metadata = {
  title: "BUSIPOOL | Блог Подробности",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const BlogPage = () => {
  return <BlogDetail />;
};

export default BlogPage;
