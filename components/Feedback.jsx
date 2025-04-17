"use client";

import { useState,useRef } from "react";
import { sendFeedback } from "../utils/request";
import { toast, ToastContainer } from "react-toastify";

export default function Feedback({ isOpen, setIsOpen }) {
  const [data, setData] = useState({
    full_name: "",
    phone: "",
    email: "",
    comment: "",
  });
  const modalRef = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных на сервер
    console.log(data);
    sendFeedback({ data })
      .then((response) => {
        if (response.ok) {
          toast.success("Ваша заявка успешно отправлена!");
        }
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setData({
          full_name: "",
          phone: "",
          email: "",
          comment: "",
        });
        setIsOpen(false);
      });
  };

  return (
    <div>
      <ToastContainer />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"  onClick={(e) => {
          if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
          }
        }}>
          <div  ref={modalRef} className="relative w-full max-w-xs rounded-lg bg-white p-6 shadow-lg sm:max-w-md md:max-w-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
              Оставить заявку
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={data.full_name}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#b5ebab] sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#b5ebab] sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#b5ebab] sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={data.comment}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#b5ebab] sm:text-base"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 sm:text-base"
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#78a371] px-4 py-2 text-sm text-white hover:bg-[#659a5e] sm:text-base"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
