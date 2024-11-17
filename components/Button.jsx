const Button = ({ text, primary, fullWidth, light, extraSmall, onclick }) => (
  <button
    onClick={onclick}
    className={`wrap-balance rounded-[5px] border-2 border-gray-dark px-[30px] py-[20px] text-[14px] font-bold leading-6 text-gray-dark transition active:scale-95 md:px-[47px] md:py-[20px] md:text-base ${primary && "border-primary bg-primary text-white"} ${fullWidth && "w-full"} ${light && "border-white bg-white text-primary"} ${extraSmall && "py-[4.12px] text-[5.35px] leading-[10px]"} `}
  >
    {text}
  </button>
);

export default Button;
