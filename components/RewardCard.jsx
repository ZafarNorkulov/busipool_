import Button from "@/components/Button";

const RewardCard = ({ heading, children, delivered, quantity, price }) => {
  return (
    <div className="mb-[20px] rounded px-[15px] py-[20px] shadow md:mb-[60px] md:rounded-[10px] md:px-[30px] md:py-[60px]">
      <h2 className="mb-[15px] h-[38px] text-base font-bold leading-[120%] text-[#3C3C3B] sm:h-[39px] md:mb-[30px] md:h-[96px] md:text-2xl xl:h-[132px] xl:text-[32px] xl:leading-[44px] 2xl:h-[89px]">
        {heading}
      </h2>
      <p className="mb-[20px] h-[54px] text-sm font-light leading-[130%] text-gray-light sm:h-[55px] md:mb-[40px] md:h-[132px] md:text-xl lg:h-[104px] xl:text-[24px] 2xl:h-[89px]">
        {children}
      </p>
      <p className="mb-[10px] h-[38px] md:h-[56px] text-base font-bold leading-[120%] text-gray-dark md:mb-[20px] md:text-lg xl:text-[20px]">
        Доставка: {delivered}
      </p>
      <p className="mb-[15px] text-base font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-lg xl:text-[20px]">
        Куплено: {quantity}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-base font-bold leading-[110%] text-gray-dark md:text-2xl xl:text-[32px]">
          {price}
        </span>
        <Button text="Купить" primary />
      </div>
    </div>
  );
};

export default RewardCard;
