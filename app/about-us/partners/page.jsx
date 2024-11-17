import HomeBlogs from "@/components/sections/HomeBlogs";

const partnersLogo = [
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
  "Logo",
];

const PartnersPage = () => {
  return (
    <>
      <div className="max-container mt-[100px] md:mt-[150px]">
        <h2 className="section-title mb-[60px] md:mb-[100px]">Наши партнеры</h2>

        <div className="mb-[100px] flex flex-wrap justify-between gap-x-[95px] gap-y-[60px] px-[40px] md:mb-[150px] md:justify-center md:gap-[200px] md:px-[65px]">
          {partnersLogo.map((logo, index) => (
            <div key={index}>
              <h3 className="text-[36px] font-bold leading-[120%] text-black md:text-[64px]">
                {logo}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <HomeBlogs />
    </>
  );
};

export default PartnersPage;
