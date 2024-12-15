import React from "react";

const HalfCircleProgressBar = ({ percentage }) => {
  const z = percentage / 1.8;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="half-circle relative mx-auto flex h-[160px] w-[262px] items-end justify-center overflow-hidden">
        <span
          className={`absolute left-0 top-0 box-border h-[262px] w-[262px] rounded-[50%] border-[30px] border-b-[#79A471] border-l-[#79A471]`}
          style={{
            transform: `rotate(${z}deg) translate(15px,15px)`,
          }}
        >
          <div className="small-circle relative">
            <span className="absolute top-0 z-50 h-[50px] w-[50px] -translate-y-[25%] rounded-full bg-[#79A471]"></span>
          </div>
        </span>
      </div>
    
    </div>
  );
};

export default HalfCircleProgressBar;
