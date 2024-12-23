import React from "react";

const HalfCircleProgressBar = ({ percentage }) => {
  const rotation = (percentage / 100) * 180;
  return (
    <div class="multigraph relative h-[144px] w-[262px]">
      <div class={`graph`}>
        <span
          className="absolute top-full h-[131px] w-[262px] rounded-b-[262px] border-[30px] border-t-0 border-[#79a471]"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center top",
          }}
        ></span>
      </div>
    </div>
  );
};

export default HalfCircleProgressBar;
