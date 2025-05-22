"use client";
import React, { useEffect, useState } from "react";

import { getProfile, updateProfile } from "@/app/api/profile/profile";
import profileImageDefault from "@/assets/images/profileImageDefault.png";
import { toast, ToastContainer } from "react-toastify";

const MainSettings = () => {
  const [avatar, setAvatar] = useState(profileImageDefault);
  const [profile, setProfile] = useState({
    about_me: "",
    avatar: avatar,
    birthday: "",
    city: "",
    email: "",
    id: "",
    is_active: false,
    is_staff: false,
    phone: "",
    url_profile: "",
    username: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: file,
      }));
    }
  };

  const editProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const key in profile) {
      formData.append(key, profile[key]);
    }

    try {
      const res = await updateProfile(token, formData);
      if (res.ok) {
        window.location.reload();
        toast.success("Ваши данные сохранены");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((res) => setProfile(res))
        .catch(console.error);
    }
  }, [token]);

  useEffect(() => {
    const avatarUrl =
      profile.avatar instanceof File
        ? URL.createObjectURL(profile.avatar)
        : profile?.avatar || profileImageDefault;
    setAvatar(avatarUrl);
    return () => {
      if (profile?.avatar instanceof File) {
        URL.revokeObjectURL(avatar);
      }
    };
  }, [profile?.avatar]);

  const handleDeleteImage = async () => {
    setAvatar(profileImageDefault);
    setProfile((prevProfile) => ({
      ...prevProfile,
      avatar: null,
    }));
  };
  // Phone formatter
  const handlePhoneChange = (e) => {
    let val = e.target.value;

    const hasPlus = val.startsWith("+");
    if (hasPlus) val = val.slice(1);

    val = val.replace(/\D/g, "");

    val = val.slice(0, 12);

    if (hasPlus) val = "+" + val;

    setProfile({ ...profile, phone: val });
  };
  // Birthday formatter
  const handleBirthdayChange = (e) => {
    let val = e.target.value;

    val = val.replace(/[^0-9.]/g, "");

    val = val.replace(/\./g, "");

    val = val.slice(0, 8);

    const year = val.slice(0, 4);
    const month = val.slice(4, 6);
    const day = val.slice(6, 8);

    const currentYear = new Date().getFullYear();

    let validYear = year;
    if (year.length === 4) {
      let yearNum = parseInt(year, 10);
      if (yearNum > currentYear) {
        validYear = String(currentYear);
      }
    }

    let validMonth = month;
    if (month.length === 2) {
      let monthNum = parseInt(month, 10);
      if (monthNum < 1) validMonth = "01";
      else if (monthNum > 12) validMonth = "12";
    }

    let validDay = day;
    if (day.length === 2) {
      let dayNum = parseInt(day, 10);
      if (dayNum < 1) validDay = "01";
      else if (dayNum > 31) validDay = "31";
    }

    let formatted = validYear;
    if (validMonth) {
      formatted += "." + validMonth;
    }
    if (validDay) {
      formatted += "." + validDay;
    }

    setProfile({ ...profile, birthday: formatted });
  };

  return (
    <form onSubmit={(e) => editProfile(e)} className="mx-auto max-w-[1140px]">
      <ToastContainer />
      <div className="mb-[30px] flex flex-wrap gap-x-[20px] gap-y-[30px] md:mb-[60px]">
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="username" className="settings-label">
            Имя
          </label>
          <input
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            value={profile.username || ""}
            type="text"
            id="username"
            className="settings-input"
            placeholder="user123123123"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userURL" className="settings-label">
            URL профиля
          </label>
          <input
            onChange={(e) =>
              setProfile({ ...profile, url_profile: e.target.value })
            }
            value={profile.url_profile || ""}
            type="text"
            id="userURL"
            className="settings-input"
            placeholder="https://busipool.ru/"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userBirthDate" className="settings-label">
            Дата рождения
          </label>
          <input
            type="text"
            id="userBirthDate"
            className="settings-input"
            placeholder="ГГГГ.ММ.ДД"
            value={profile.birthday || ""}
            onChange={handleBirthdayChange}
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userPhoneNumber" className="settings-label">
            Телефон
          </label>
          <input
            type="text"
            id="userPhoneNumber"
            className="settings-input"
            placeholder="+7"
            value={profile?.phone !== "null" ? profile.phone : ""}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userCity" className="settings-label">
            Город
          </label>
          <input
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
            value={profile.city || ""}
            type="text"
            id="userCity"
            className="settings-input"
            placeholder="Начните вводить"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userEmail" className="settings-label">
            E-mail
          </label>
          <input
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            value={profile.email || ""}
            type="text"
            id="userEmail"
            className="settings-input"
            placeholder="vlad.shitikov2003@mail.ru"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[30px] md:flex-row md:gap-[50px]">
        <div>
          <label htmlFor="userImage" className="settings-label">
            Фотография
          </label>
          <div className="mt-[30px] flex flex-col items-center">
            <img
              src={avatar}
              width={200}
              height={200}
              className="h-[200px] w-[200px] rounded-full object-cover"
              alt="profile image"
            />
            <input
              type="file"
              id="userImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <ul className="mt-[20px] flex gap-[40px]">
              <li
                className="cursor-pointer border-b border-primary pb-[5px] text-[14px] font-bold leading-[120%] text-primary"
                onClick={() => document.getElementById("userImage").click()}
              >
                Изменить
              </li>
              <li
                className="cursor-pointer border-b border-primary pb-[5px] text-[14px] font-bold leading-[120%] text-primary"
                onClick={handleDeleteImage}
              >
                Удалить
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col">
          <label htmlFor="userDescription" className="settings-label">
            О себе
          </label>
          <textarea
            onChange={(e) =>
              setProfile({ ...profile, about_me: e.target.value })
            }
            value={profile.about_me || ""}
            name="userDescription"
            id="userDescription"
            className="settings-input min-h-[195px] resize-none focus-visible:border-0"
            placeholder="Расскажите о себе в двух предложениях"
          ></textarea>
          <button
            type="submit"
            className="mt-[30px] rounded-[5px] bg-gray-dark py-[20px] text-[14px] font-bold leading-[24px] text-white opacity-40 transition hover:bg-primary hover:text-white hover:opacity-100"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </form>
  );
};

export default MainSettings;
