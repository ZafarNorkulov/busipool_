"use client";
import useWindowSize from "@/hooks/useWindowSize";

const statistics = [
  { number: "1 020+", label: "Инвесторов" },
  { number: "200+", label: "Проектов" },
  { number: "15 000 ₽+", label: "Средний объем инвестиций" },
  { number: "15 млн. ₽+", label: "Средств привлечено" },
];

const Stats = ({ large }) => {
  const { width } = useWindowSize();
  return (
    <section
      className={`${large ? "text-white" : "max-w-[1430px] text-primary"}`}
    >
      <div className="flex flex-col gap-y-[30px] text-center sm:text-left">
        {width > 500 ? (
          <div className="flex flex-wrap items-baseline justify-between">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center md:w-[240px] lg:w-[270px] lg:items-start xl:w-[300px]`}
              >
                <h2
                  className={`w-max text-[24px] font-bold lg:text-4xl ${
                    large && "2xl:text-[84px]"
                  }`}
                >
                  {stat.number}
                </h2>
                <p className="w-max text-xs font-light md:mt-[10px] md:text-lg lg:text-[20px] 2xl:text-[24px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Toq indexdagi elementlar */}
            <div className="flex items-center justify-between gap-y-[30px]">
              {statistics
                .filter((_, index) => index % 2 !== 0)
                .map((stat, index) => (
                  <div
                    key={`odd-${index}`}
                    className={`flex flex-col items-center justify-center`}
                  >
                    <h2 className={`w-max text-2xl font-bold`}>
                      {stat.number}
                    </h2>
                    <p className="w-max text-base font-light">{stat.label}</p>
                  </div>
                ))}
            </div>
            {/* Juft indexdagi elementlar */}
            <div className="flex items-center justify-between gap-y-[30px]">
              {statistics
                .filter((_, index) => index % 2 === 0)
                .map((stat, index) => (
                  <div
                    key={`odd-${index}`}
                    className={`flex flex-col items-center justify-center`}
                  >
                    <h2 className={`w-max text-2xl font-bold`}>
                      {stat.number}
                    </h2>
                    <p className="w-max text-base font-light">{stat.label}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Stats;
