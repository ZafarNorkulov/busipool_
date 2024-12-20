const InvestorPageButton = ({ investor, selected, onClick }) => {
  return (
    <div
      className={`cursor-pointer text-nowrap rounded-[5px] border px-[30px] py-[15px] font-bold opacity-75 transition active:scale-[0.99] ${investor?.id == selected?.id ? "bg-primary text-white" : "text-gray-light"}`}
      onClick={onClick}
    >
      {investor.name}
    </div>
  );
};

export default InvestorPageButton;
