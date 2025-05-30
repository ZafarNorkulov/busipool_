
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import RewardCard from "@/components/RewardCard";
import useWindowSize from "@/hooks/useWindowSize";


const Rewards = ({ data }) => {

  const { width } = useWindowSize();
  return (
    <div className="w-full lg:w-[40%] xl:w-[37%] 2xl:w-[32%]">
      {data?.length ? (
        <div>
          <h3 className="mb-[30px] text-2xl font-bold leading-[120%] text-primary md:mb-[60px] md:text-[#3c3c3c]">
            Выберите вознаграждение
          </h3>
          {width > 1023 ? (
            <>
              {data.map((reward) => (
                <RewardCard
                  heading={reward.reward_name}
                  delivered={reward.methods_obtaining}
                  quantity={reward.quantity}
                  price={reward.price + " ₽"}
                >
                  {reward.description_reward}
                </RewardCard>
              ))}
            </>
          ) : (
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              grabCursor={true}
              mousewheel={true}
              css-mode="true"
              modules={[Scrollbar]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {project?.reward?.map((reward, index) => (
                <SwiperSlide key={index} className="max-w-[415px]">
                  <RewardCard
                    heading={reward.reward_name}
                    delivered={reward.methods_obtaining}
                    quantity={reward.quantity}
                    price={reward.price + " ₽"}
                  >
                    {reward.description_reward}
                  </RewardCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Rewards;
