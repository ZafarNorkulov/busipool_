const Button = ({ text, primary, fullWidth, light, extraSmall, onclick }) => (
  <button
    onClick={onclick}
    className={`wrap-balance rounded-[5px] border-2 border-gray-dark px-[30px] py-[10px] text-xs font-bold leading-6 text-gray-dark transition active:scale-95 md:px-[38px] md:py-[15px] md:text-sm lg:px-[47px] lg:py-[20px] ${primary && "border-primary bg-primary text-white"} ${fullWidth && "w-full"} ${light && "border-white bg-white text-primary"} ${extraSmall && "py-[4.12px] text-[5.35px] leading-[10px]"} `}
  >
    {text}
  </button>
);

export default Button;
