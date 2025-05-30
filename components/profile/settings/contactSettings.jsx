import {
  getContacts,
  patchContacts,
  postContacts,
} from "@/app/api/profile/profile";
import React, { useEffect, useState } from "react";

const ContactSettings = () => {
  const [contacts, setContacts] = useState({
    site: "",
    VKontakte: "",
    telegram: "",
  });
  const [isNew, setIsNew] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const addPrefix = (url) => {
    if (!url) return "";
    return url.startsWith("https://") ? url : `https://${url}`;
  };

  const saveContacts = async (event) => {
    event.preventDefault();
    try {
      const dataWithPrefix = {
        site: addPrefix(contacts.site),
        VKontakte: addPrefix(contacts.VKontakte),
        telegram: addPrefix(contacts.telegram),
      };
      let res;
      if (isNew) {
        res = await postContacts({ token, data: dataWithPrefix });
        setIsNew(false);
      } else {
        res = await patchContacts({ token, data: dataWithPrefix });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getContactsFromDB = async () => {
    try {
      const res = await getContacts(token);

      if (res.detail === "Contact not found.") {
        // Ma'lumot yo'q ekan, yangi post kerak
        setIsNew(true);
        setContacts({
          site: "",
          VKontakte: "",
          telegram: "",
        });
        return;
      }

      if (res && (res.site || res.VKontakte || res.telegram)) {
        setContacts({
          site: res.site || "",
          VKontakte: res.VKontakte || "",
          telegram: res.telegram || "",
        });
        setIsNew(false);
      } else {
        setIsNew(true);
      }
    } catch (error) {
      console.error(error);
      setIsNew(true);
    }
  };

  useEffect(() => {
    getContactsFromDB();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="mx-auto max-w-[560px]" onSubmit={saveContacts}>
      <div className="mb-[60px] flex flex-wrap gap-x-[20px] gap-y-[30px]">
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userSite" className="settings-label">
            Сайт
          </label>
          <input
            type="url"
            prefix="https://"
            id="userSite"
            name="site"
            value={contacts.site}
            onChange={handleChange}
            className="settings-input"
            placeholder="https://user123123123"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userVK" className="settings-label">
            ВКонтакте
          </label>
          <input
            type="url"
            prefix="https://"
            id="userVK"
            name="VKontakte"
            value={contacts.VKontakte}
            onChange={handleChange}
            className="settings-input"
            placeholder="https://vk.com/"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userTelegram" className="settings-label">
            Telegram
          </label>
          <input
            type="url"
            prefix="https://"
            id="userTelegram"
            name="telegram"
            value={contacts.telegram}
            onChange={handleChange}
            className="settings-input"
            placeholder="https://t.me/"
          />
        </div>
        <button className="mt-[10px] flex-[1_1_560px] rounded-[5px] bg-gray-dark py-[20px] text-[14px] font-bold leading-[24px] text-white opacity-40 transition hover:bg-primary hover:text-white hover:opacity-100 md:mt-[30px]">
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default ContactSettings;
