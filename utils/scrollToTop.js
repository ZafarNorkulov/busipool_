import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 500, // Scroll duration in milliseconds
    smooth: "easeInOutQuint", // Scroll animation easing
  });
};

export default scrollToTop;
