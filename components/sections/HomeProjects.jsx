"use client";
import Button from "@/components/Button";
import SwiperSection from "../../components/SwiperSection";
import { useRouter } from "next/navigation";


const HomeProjects = () => {
  const router = useRouter();
  return (
    <section className="max-container pb-[100px] pt-[100px] md:pb-[150px] md:pt-[150px]">
      <h2 className="section-title mb-[30px] sm:mb-[100px]">
        Популярные проекты
      </h2>

      <SwiperSection />

      <div className="flex flex-wrap items-center justify-center gap-[30px] sm:gap-[20px]">
        <Button
          text="Все проекты"
          primary
          onclick={() => router.push("projects")}
        />
        <Button text="Создать свой" />
      </div>
    </section>
  );
};

export default HomeProjects;
