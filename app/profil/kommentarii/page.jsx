import ProfileComments from "@/components/profile/comments";

export const metadata = {
  title: "BUSIPOOL | Комментарии и вопросы",
  description: "",
  icons: {
    icon: "/rocket.svg",
  },
};
const CommentQuestionsPage = () => {
  return (
    <>
      <div>
        <div className="max-container">
          <div className="flex flex-col items-center gap-y-[10px]">
            <div className="flex items-start gap-x-[10px] text-gray-dark">
              <h3 className="w-[164px] text-2xl font-bold leading-[120%] sm:w-max">
                Комментарии и вопросы
              </h3>
              <span className="rounded-[5px] bg-primary px-[10px] py-[5px] text-white">
                +1
              </span>
            </div>
            <p className="text-base font-light leading-[120%] opacity-60">
              Здесь хранятся вопросы
            </p>
          </div>
          <ProfileComments />
        </div>
      </div>
    </>
  );
};

export default CommentQuestionsPage;
