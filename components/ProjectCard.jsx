"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ card, isGrid }) => {
  const router = useRouter();

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
    <div className="h-full rounded-[5px] shadow md:rounded-[10px]">
      <Image
        src={card?.img || card?.image}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="project card"
        className="h-[154px] w-full rounded-[5px] object-cover md:h-[250px] md:rounded-[10px]"
      />
      <div className="flex h-[65%] flex-col p-[10px] md:p-[30px]">
        <div>
          <h3 className="mb-[10px] h-[30px] text-sm font-bold leading-[110%] text-gray-dark md:mb-[20px] md:h-[20px] md:text-[18px]">
            {card?.name.slice(0, 40)}
          </h3>
          <p className="mb-[11px] h-[64px] text-xs font-light leading-[130%] text-gray-light md:mb-[22px] md:h-[72px] md:text-base">
            {card?.description.slice(0, 85)}
          </p>
        </div>
        <div>
          <div className="mb-5 h-[55px] md:mb-[30px] md:h-[90px]">
            <div className="mb-[4.5px] mt-4 flex justify-between md:mb-[10px]">
              <span className="text-xs font-bold leading-[130%] text-primary md:text-base">
                {percentage}%
              </span>
              <span className="text-xs text-gray-light md:text-base">
                до {formattedDate}
              </span>
            </div>
            <div className="h-[2px] rounded-[4.5px] bg-gray-300 md:h-[5px] md:rounded-[10px]">
              <div
                className={`h-[2px] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[10px]`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="mb-[4.5px] mt-4 flex justify-between md:mb-[10px]">
              <span className="text-xs font-bold leading-[130%] text-[#1e1e1e] md:text-base">
                {splitEvery3(card?.total_investor_price)} ₽
              </span>
              <span className="text-xs font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
                СОБРАНО ИЗ
              </span>
              <span className="text-xs font-bold leading-[110%] text-[#1e1e1e] md:text-base">
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
          <Button
            onclick={() => router.push(`/projects/${card.id}`)}
            text="УЗНАТЬ БОЛЬШЕ"
            fullWidth
            primary
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full rounded-[5px] shadow md:rounded-[10px]">
      <Image
        src={card?.img || card?.image}
        width={0}
        height={0}
        sizes="100%"
        priority={true}
        alt="project card"
        className="h-[154px] w-full rounded-[5px] object-cover md:h-[250px] md:rounded-[10px]"
      />
      <div className="flex h-[65%] flex-col p-[10px] lg:p-[30px] p-[20px]">
        <h3 className="mb-[10px] h-[30px] text-xs font-bold leading-[110%] text-gray-dark md:mb-[20px] md:h-[20px] md:text-[17px]">
          {card?.name.slice(0, 40)}
        </h3>
        <p className="mb-[11px] h-[96px] text-xs font-light leading-[130%] text-gray-light md:mb-[22px] md:h-[72px] md:text-base">
          {card?.description.slice(0, 85)}
        </p>
        <div>
          <Button
            onclick={() => router.push(`/projects/${card.id}`)}
            text="УЗНАТЬ БОЛЬШЕ"
            fullWidth
            primary
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
