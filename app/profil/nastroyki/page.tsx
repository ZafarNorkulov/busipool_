import ProfileSettings from "@/components/profile/settings";


export const metadata = {
  title: "BUSIPOOL | Настройки профиля",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProfileSettingsPage = () => {

  return (
    <ProfileSettings />
  );
};

export default ProfileSettingsPage;
