import Link from "next/link";

const ServiceCard = ({ title, description, url = "#" }) => {
  return (
    <Link
      href={url}
      className="group flex flex-col items-center rounded-[10px] px-2 py-[15px] transition hover:bg-primary active:scale-[0.99]  2xl:w-[70%] 2xl:py-[60px]"
    >
      <h3 className="mb-[10px] w-max text-center text-xl font-bold leading-normal text-gray-dark group-hover:text-white md:text-2xl lg:text-[32px] 2xl:text-[36px]">
        {title}
      </h3>
      <p className="wrap-balance text-center text-base font-light leading-normal text-gray-light group-hover:text-white xs:w-[75%] md:w-[80%] md:text-lg lg:mt-[13px] lg:text-xl 2xl:text-2xl xl:w-[75%]">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
