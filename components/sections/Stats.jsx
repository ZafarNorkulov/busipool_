"use client";
const statistics = [
  { number: "1 020+", label: "Инвесторов" },
  { number: "200+", label: "Проектов" },
  { number: "15 000 ₽+", label: "Средний объем инвестиций" },
  { number: "15 млн. ₽+", label: "Средств привлечено" },
];

const Stats = ({ large }) => {
  return (
    <section
      className={`${large ? "text-white" : "mx-auto max-w-[1430px] text-primary"}`}
    >
      <div className="grid gap-x-[50px] gap-y-[30px] text-center sm:text-left md:grid-cols-[repeat(4,_auto)]">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`w-full text-center sm:w-max ${
              index < 2
                ? "sm:col-start-1 sm:col-end-2"
                : "sm:col-start-2 sm:col-end-2"
            } ${
              index % 2 == 0
                ? "sm:row-start-1 sm:row-end-2"
                : "sm:row-start-2 sm:row-end-3"
            } md:col-start-auto md:col-end-auto md:row-start-auto md:row-end-auto`}
          >
            <h2
              className={`mx-auto w-max text-[24px] font-bold sm:ml-0 md:mx-auto lg:text-5xl ${large && "2xl:text-[84px]"}`}
            >
              {stat.number}
            </h2>
            <p className="mx-auto w-max text-base font-light 2xl:text-[24px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
