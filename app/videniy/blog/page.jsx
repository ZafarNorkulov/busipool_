import SwiperSection from "@/components/SwiperSection";


export const metadata = {
  title: "BUSIPOOL | Блог",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const BlogPage = () => {
  return (
    <>
      <section className="blog-container mb-[150px] pt-[150px]">
        <h2 className="section-title mb-[30px] md:mb-[100px]">Блог</h2>

        <div className="my-[100px] md:my-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Актуальные проекты
          </h2>
          <SwiperSection />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
