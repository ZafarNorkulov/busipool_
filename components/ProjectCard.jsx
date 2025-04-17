"use client";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store";

const ProjectCard = ({ card, isGrid, setIsActive }) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const auth = useAppSelector((state) => state.auth);

  const percentage = Math.round(
    (card?.total_investor_price * 100) / card?.financial_goal,
  );
  const date = new Date(card?.project_completion_date);
  const day = String(date.getDate()).padStart(2, "0"); // Kunning 2 raqamli bo'lishini ta'minlash
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Oyning 2 raqamli bo'lishini ta'minlash
  const year = date.getFullYear(); // Yilni olish

  // Yangi formatni yaratish: DD.MM.YYYY
  const formattedDate = `${day}.${month}.${year}`;

  const splitEvery3 = (num) => {
    // Raqqa stringga aylantiramiz, keyin bo'sh joy bilan ajratamiz
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Har 3 raqamdan keyin bo'sh joy qo'yadi
  };

  return isGrid ? (
    <div
      className={`h-full max-h-[574px] rounded-[5px] shadow md:rounded-[10px]`}
    >
      <Image
        src={card?.img || card?.image}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="project card"
        className="h-[154px] w-full rounded-[5px] object-cover md:h-[220px] md:rounded-[10px] 2xl:h-[250px]"
      />
      <div className="flex h-[65%] flex-col p-[10px] md:p-5 2xl:p-[30px]">
        <div className="mb-[10px] flex flex-col gap-y-[10px] md:mb-3 md:gap-y-3 2xl:mb-[30px]">
          <h3 className="h-[30px] text-sm font-bold text-gray-dark md:h-[20px] md:text-base lg:h-[40px] 2xl:text-lg">
            {card?.name.slice(0, 40)}
          </h3>
          <p className="h-[64px] text-xs font-light leading-[130%] text-gray-light md:text-sm 2xl:text-base">
            {card?.description.slice(0, 115)}
          </p>
        </div>
        <div>
          <div className="mb-5 h-[55px] md:mb-[28px] md:h-[45px] 2xl:h-[58px]">
            <div className="flex justify-between 2xl:leading-[110%]">
              <span className="text-xs font-bold text-primary md:text-sm 2xl:text-base">
                {percentage}%
              </span>
              <span className="text-xs text-gray-light md:text-sm 2xl:text-base">
                до {formattedDate}
              </span>
            </div>
            <div className="my-[10px] h-[2px] rounded-[4.5px] bg-gray-300 md:my-[7px] md:h-[5px] md:rounded-[10px]">
              <div
                className={`h-[2px] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[10px]`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="mb-[4.5px] flex justify-between text-gray-dark 2xl:leading-[110%]">
              <span className="text-sm font-bold">
                {splitEvery3(card?.total_investor_price)} ₽
              </span>
              <span className="text-xs font-light lowercase opacity-70 md:text-sm">
                СОБРАНО ИЗ
              </span>
              <span className="text-sm font-bold">
                {splitEvery3(card?.financial_goal)} ₽
              </span>
            </div>

            <div className="mb-[12.5px] mt-[10px] flex justify-between md:mb-[30px]">
              <span className="text-[6px] font-bold leading-[110%] text-gray-dark md:text-[14px]">
                {card?.budget?.current}
              </span>

              <span className="text-[6px] font-bold leading-[110%] text-gray-dark md:text-[14px]">
                {card?.budget?.final}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              if (auth.isAuthenticated) {
                router.push(`/projects/${card.id}`);
              } else {
                setIsActive(true);
              }
            }}
            className={`wrap-balance w-full rounded-[5px] border-2 border-gray-dark border-primary bg-primary px-3 py-[10px] text-[12px] font-bold leading-[24px] text-gray-dark text-white transition active:scale-95 xs:py-[10px] sm:text-xs md:py-[10px] md:text-sm md:font-normal`}
          >
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`h-full max-h-[305px] rounded-[5px] shadow md:max-h-[486px] md:rounded-[10px]`}
    >
      <Image
        src={card?.img || card?.image}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="project card"
        className="h-[102px] w-full rounded-[5px] object-cover md:h-[250px] md:rounded-[10px]"
      />
      <div className="mt-[10px] flex h-[65%] flex-col p-[10px] md:p-5 lg:p-[30px]">
        <div className="mb-[20px] flex flex-col gap-y-[10px] md:mb-[30px] lg:gap-y-5">
          <h3 className="h-[30px] text-sm font-bold leading-[110%] text-gray-dark md:h-[40px] md:text-[18px]">
            {width > 640 ? card?.name.slice(0, 40) : card?.name.slice(0, 20)}
          </h3>
          <p className="h-[50px] text-xs font-light leading-[130%] text-gray-light md:text-base">
            {width > 768
              ? card?.description.slice(0, 50)
              : width > 640
                ? card?.description.slice(0, 85)
                : card?.description.slice(0, 50)}
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              if (auth.isAuthenticated) {
                router.push(`/projects/${card.id}`);
              } else {
                setIsActive(true);
              }
            }}
            className={`wrap-balance w-full rounded-[5px] border-2 border-gray-dark border-primary bg-primary px-3 py-[10px] text-[12px] font-bold leading-[24px] text-gray-dark text-white transition active:scale-95 xs:py-[10px] sm:text-xs md:py-[10px] md:text-sm md:font-normal lg:text-[12px]`}
          >
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
