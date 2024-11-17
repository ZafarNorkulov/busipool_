import Image from "next/image";

const UserPageCard = ({ cardStyles, title, subtitle, icon, children }) => {
  return (
    <div className={`${cardStyles} shadow`}>
      <div className="flex items-center justify-between md:pr-[30px]">
        <div>
          <h2 className="mb-[10px] text-[24px] font-bold leading-[120%] text-gray-dark md:text-[32px]">
            {title}
          </h2>

          <p className="text-base font-light leading-[120%] text-gray-dark">
            {subtitle}
          </p>
        </div>
        <Image
          src={icon}
          alt="icon"
          width={0}
          height={0}
          sizes="100%"
          className="size-[50px] md:size-[100px]"
        />
      </div>

      <div className="my-[20px] h-[1px] bg-[#E3E3E3] opacity-80 md:my-[30px]"></div>

      <div>{children}</div>
    </div>
  );
};

export default UserPageCard;
