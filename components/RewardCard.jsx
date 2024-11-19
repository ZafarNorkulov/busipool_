import Button from "@/components/Button";

const RewardCard = ({ heading, children, delivered, quantity, price }) => {
  return (
    <div className="mb-[20px] rounded px-[15px] py-[20px] shadow md:mb-[60px] md:rounded-[10px] md:px-[30px] md:py-[60px]">
      <h2 className="mb-[15px] text-base font-bold leading-none text-[#3C3C3B] md:mb-[30px] md:text-[32px] md:leading-[44px]">
        {heading}
      </h2>
      <p className="mb-[20px] text-sm font-light leading-[130%] text-gray-light md:mb-[60px] md:text-[24px]">
        {children}
      </p>
      <p className="mb-[10px] text-base font-bold leading-[120%] text-gray-dark md:mb-[20px] md:text-[20px]">
        Доставка: {delivered}
      </p>
      <p className="mb-[15px] text-base font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[20px]">
        Куплено: {quantity}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-base font-bold leading-[110%] text-gray-dark md:text-[32px]">
          {price}
        </span>
        <Button text="Купить" primary />
      </div>
    </div>
  );
};

export default RewardCard;
