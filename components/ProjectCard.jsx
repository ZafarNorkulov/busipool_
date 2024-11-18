"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ card, isGridItem }) => {
  const router = useRouter();

  console.log("card", card);
const perventage = Math.round((card?.total_investor_price * 100) / card?.financial_goal)
const date = new Date(card?.project_completion_date);
const day = String(date.getDate()).padStart(2, '0');  // Kunning 2 raqamli bo'lishini ta'minlash
  const month = String(date.getMonth() + 1).padStart(2, '0');  // Oyning 2 raqamli bo'lishini ta'minlash
  const year = date.getFullYear();  // Yilni olish
  
  // Yangi formatni yaratish: DD.MM.YYYY
  const formattedDate = `${day}.${month}.${year}`;


  const splitEvery3 = (num) => {
    // Raqqa stringga aylantiramiz, keyin bo'sh joy bilan ajratamiz
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');  // Har 3 raqamdan keyin bo'sh joy qo'yadi
  };
  if (!isGridItem) {
    return (
      <div className="h-full rounded-[5px] shadow md:rounded-[10px]">
        <Image
          src={card?.img || card?.image}
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          alt="project card"
          className="h-[35%] w-full rounded-[5px] object-cover md:rounded-[10px]"
        />
        <div className="flex h-[65%] flex-col justify-between p-[12.35px] md:p-[30px]">
          <div>
            <h3 className="mb-[10px] text-[8px] font-bold leading-[110%] text-gray-dark md:mb-[20px] md:text-[18px]">
              {card?.name}
            </h3>
            <p className="mb-[11px] text-[7px] font-light leading-[130%] text-gray-light md:mb-[30px] md:text-base">
              {card?.description}
            </p>

            <div className="mb-[4.5px] flex justify-between mt-4 md:mb-[10px]">
              <span className="text-[7px] font-bold leading-[130%] text-primary md:text-base">{perventage}%</span>
              <span className="text-[7px] md:text-base text-gray-light">до {formattedDate}</span>
            </div>
            <div className="h-[2px] rounded-[4.5px] bg-gray-300 md:h-[5px] md:rounded-[10px]">
              <div className={`h-[2px] w-[${perventage}%] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[10px]`}></div>
            </div>
            <div className="mb-[4.5px] flex justify-between mt-4 md:mb-[10px]">
              <span className="text-sm font-bold leading-[130%] md:text-base">
                {splitEvery3(card?.total_investor_price)} $
              </span>
              <span className="text-[6px] font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
                СОБРАНО ИЗ
              </span>
              <span className="text-sm leading-[110%] font-bold  md:text-base">
                {splitEvery3(card?.financial_goal)} $
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
            extraSmall
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-full flex-col rounded-[10px] shadow">
        <Image
          src={card.image}
          // src={`/projects/projectCard2.jpg`}
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          alt="project card"
          className="h-[154px] w-full rounded-[10px] object-cover md:h-[250px]"
        />
        <div className="flex flex-1 flex-col justify-between p-[20px] md:p-[30px]">
          <h3 className="mb-[10px] text-[14px] font-bold leading-[110%] text-gray-dark md:text-[18px]">
            {card.title}
          </h3>
          <p className="mb-[20px] line-clamp-2 text-[12px] font-light leading-[130%] text-gray-light md:text-base">
            {card.text}
          </p>

          <div className="mb-[10px] flex justify-between">
            <span className="text-[14px] font-bold leading-[110%] text-primary md:text-base">
              {card?.budget?.percentage}
            </span>
            <span className="text-[14px] font-light leading-[110%] text-gray-light md:text-base">
              {card?.budget?.endDate}
            </span>
          </div>

          <div className="h-[5px] rounded-[5px] bg-gray-300">
            <div className="h-[5px] w-[59%] rounded-[5px] bg-primary"></div>
          </div>

          <div className="mb-[30px] mt-[10px] flex justify-between">
            <span className="text-[14px] font-bold leading-[110%] text-gray-dark">
              {card?.budget?.current}
            </span>
            <span className="text-[12px] font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
              СОБРАНО ИЗ
            </span>
            <span className="text-[14px] font-bold leading-[110%] text-gray-dark">
              {card?.budget?.final}
            </span>
          </div>
          <Button
            onclick={() => router.push(`/projects/${card.id}`)}
            text="УЗНАТЬ БОЛЬШЕ"
            fullWidth
            primary
          />
        </div>
      </div>
    );
  }
};

export default ProjectCard;
