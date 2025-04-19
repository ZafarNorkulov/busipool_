import HomeBlogs from "@/components/sections/HomeBlogs";
import ProfilePopularProjects from "@/components/profile/profilePopularProjects";
import ProfileCards from "@/components/profile/cards";
import Banner from "@/components/profile/banner";

export const metadata = {
  title: "BUSIPOOL | Профиль",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProfilePage = () => {
  return (
    <section>
      <ProfileCards />
      <Banner />
      <ProfilePopularProjects />
      <div className="mt-[100px]">
        <HomeBlogs />
      </div>
    </section>
  );
};

export default ProfilePage;
