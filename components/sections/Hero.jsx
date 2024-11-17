const Hero = () => {
  return (
    <section className="hero-bg flex h-[min(1040px,100vh)] w-full flex-col items-center justify-center text-center">
      <h1 className="relative z-[1] text-[48px] font-bold leading-normal text-white md:text-[82px]">
        Инвестиции в будущее
      </h1>
      <p className="relative z-[1] text-[14px] text-white md:text-[32px]">
        Сбор денег для бизнеса, технологических, творческих и социальных
        проектов
      </p>
    </section>
  );
};

export default Hero;
