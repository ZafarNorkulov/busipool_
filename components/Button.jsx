const Button = ({
  text,
  primary,
  fullWidth,
  light,
  extraSmall,
  onclick,
  style,
  id,
}) => (
  <button
    id={id}
    onClick={onclick}
    className={`wrap-balance rounded-[5px] border border-gray-dark px-[20px] py-[5px] text-[9px] font-bold text-gray-dark transition active:scale-95 xs:px-[30px] xs:py-[10px] sm:text-xs md:px-[38px] md:py-[15px] md:text-sm lg:px-[47px] lg:py-[20px] ${primary && "border-primary bg-primary text-white"} ${fullWidth && "w-full"} ${light && "border-white bg-white text-primary"} ${extraSmall && "py-[4.12px] text-[5.35px] leading-[10px]"} ${style} `}
  >
    {text}
  </button>
);

export default Button;
