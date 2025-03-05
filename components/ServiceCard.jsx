import Link from "next/link";

const ServiceCard = ({ title, description, url="#" }) => {
  return (
    <Link href={url} className="group flex flex-col items-center rounded-[10px] px-2 py-[15px] transition hover:bg-primary active:scale-[0.99] md:w-[680px] md:px-[120px] md:py-[60px]">
      <h3 className="mb-[10px] w-max text-center text-[20px] font-bold leading-normal text-gray-dark group-hover:text-white md:text-[36px]">
        {title}
      </h3>
      <p className="wrap-balance mt-[13px] text-center text-base font-light leading-normal text-gray-light group-hover:text-white md:text-[24px]">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
