import Link from "next/link";

const ServiceCard = ({ title, description, url = "#" }) => {
  return (
    <Link
      href={url}
      className="group flex flex-col items-center rounded-[10px] px-2 py-[15px] transition hover:bg-primary active:scale-[0.99] md:py-[30px] lg:py-[60px] 2xl:w-[70%]"
    >
      <h3 className="mb-[10px] w-max text-center text-xl md:text-3xl font-bold leading-normal text-gray-dark group-hover:text-white lg:text-[36px]">
        {title}
      </h3>
      <p className="wrap-balance lg:mt-[13px] xs:w-[75%] text-center text-base font-light leading-normal text-gray-light group-hover:text-white md:w-[80%] md:text-xl lg:text-2xl xl:w-[75%]">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
