import React from "react";

const ContactSettings = () => {
  return (
    <form className="mx-auto max-w-[560px]">
      <div className="mb-[60px] flex flex-wrap gap-x-[20px] gap-y-[30px]">
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userSite" className="settings-label">
            Сайт
          </label>
          <input
            type="text"
            id="userSite"
            className="settings-input"
            placeholder="user123123123"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userVK" className="settings-label">
            ВКонтакте
          </label>
          <input
            type="text"
            id="userVK"
            className="settings-input"
            placeholder="https://vk.com/"
          />
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          <label htmlFor="userTelegram" className="settings-label">
            Telegram
          </label>
          <input
            type="text"
            id="userTelegram"
            className="settings-input"
            placeholder="https://t.me/"
          />
        </div>
        <button
          type="submit"
          className="mt-[10px] flex-[1_1_560px] rounded-[5px] bg-gray-dark py-[20px] text-[14px] font-bold leading-[24px] text-white opacity-40 transition hover:bg-primary hover:text-white hover:opacity-100 md:mt-[30px]"
        >
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default ContactSettings;
