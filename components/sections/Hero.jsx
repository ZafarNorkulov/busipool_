const Hero = () => {
  return (
    <section className="hero-bg flex h-[min(1040px,100vh)] w-full flex-col items-center justify-center gap-5 text-center">
      <h1 className="relative z-[1] text-[48px] font-bold leading-[95%] text-white md:text-[64px] md:leading-normal 2xl:text-[82px]">
        Инвестиции в будущее
      </h1>
      <p className="relative z-[1] max-w-[300px] text-[14px] text-white md:!max-w-[650px] lg:max-w-[700px] xl:text-2xl 2xl:text-[32px]">
        Сбор денег для бизнеса, технологических, творческих и социальных
        проектов
      </p>
    </section>
  );
};

export default Hero;
