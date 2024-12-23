const Hero = () => {
  return (
    <section className="hero-bg gap-5 flex h-[min(1040px,100vh)] w-full flex-col items-center justify-center text-center">
      <h1 className="relative z-[1] text-[48px] font-bold leading-[95%] md:leading-normal text-white md:text-[82px]">
        Инвестиции в будущее
      </h1>
      <p className="relative max-w-[300px] md:!max-w-[650px] lg:max-w-[700px] z-[1] text-[14px] text-white md:text-[32px]">
        Сбор денег для бизнеса, технологических, творческих и социальных
        проектов
      </p>
    </section>
  );
};

export default Hero;
