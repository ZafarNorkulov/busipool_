"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profileIcons } from "@/constants";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import {
  getProjectCategoryByBussinesType,
  postProject,
} from "@/app/api/projects/project";
import {
  getCounterparty,
  getProjectTypes,
  getCities,
  getCategory,
} from "@/utils/request";
import Head from "next/head";
import sendProjectImage from "@/assets/images/sendImage.png";
import Button from "@/components/Button";
import HomeBlogs from "@/components/sections/HomeBlogs";

const CreateProjectPage = () => {
  const [activeForm, setActiveForm] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [cities, setCities] = useState([]);
  const [typeBusiness, setTypeBusiness] = useState([]);
  const [counterparty, setCounterparty] = useState([]);
  const [category, setCategory] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [typeCategoryBuss, setTypeCategorybuss] = useState([]);
  const [isSendForm, setIsSendForm] = useState(false);
  const [project, setProject] = useState({
    id: null, // так как readOnly, можно оставить как null
    name: "",
    project_address: "",
    city_realization: "",
    financial_goal: "",
    project_completion_date: "",
    description: "",
    image: null, // так как readOnly
    category: "",
    image_or_video: null, // так как readOnly
    files: "",
    detailed_description: "",
    counterparty: null,
    type_susiness: null,
    full_name: "",
    surname_signature: "",
    birth_date: "",
    city: "",
    phone: "",
    inn: null,
    passport_number: "",
    issued_passport: "",
    department_code: "",
    document: "", // так как readOnly
    address_register: "",
    current_account: "",
    recipients_bank: "",
    correspondent_account: "",
    bik: "",
    other_data: "",
    // owner: null,
    // is_active: false,
    reward: "",
    create_at: null, // так как readOnly
  });

  const handleLinkSubmit = () => {
    // Здесь можно добавить логику для обработки ссылки YouTube
    console.log("YouTube Video Link:", youtubeLink);
    // setModalOpen(false); // Закрыть модальное окно после ввода ссылки
  };

  const handlePost = () => {
    if (loading) return; // Prevent submitting the form if it's already loading
    setLoading(true);
    const formData = new FormData();

    // Заполнение данных проекта
    for (const key in project) {
      formData.append(key, project[key]);
    }

    // Отправка данных на сервер
    postProject({ formData, token })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setIsSendForm(true);
      });
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getCounterparty(),
      getProjectTypes(),
      getCities(),
      getCategory(),
      getProjectCategoryByBussinesType(),
    ])
      .then(
        ([
          counterpartyData,
          typeBusinessData,
          citiesData,
          categoryData,
          typeBuss,
        ]) => {
          setCounterparty(counterpartyData);
          setTypeBusiness(typeBusinessData);
          setCities(citiesData);
          setCategory(categoryData);
          setTypeCategorybuss(typeBuss);
          setLoading(false); // Set loading to false after all data is fetched
        },
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is false even if there's an error
      });

    const storedToken = localStorage.getItem("access_token");
    setToken(storedToken);
  }, []);

  const createProjectForms = {
    1: (
      <div className="flex flex-col gap-[30px] md:gap-[60px]">
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectName" className="form-label">
            Название проекта
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              id="projectName"
              type="text"
              className="form-input"
              placeholder="Название должно содержать не более 120 символов."
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectAddress" className="form-label">
            Адрес проекта
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) =>
                setProject({ ...project, project_address: e.target.value })
              }
              id="projectAddress"
              type="text"
              className="form-input"
              placeholder="https://busipools.ru/campaign/"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectCity" className="form-label">
            Категория
          </label>
          <div className="form-input-box">
            {/* <input id="projectCity" type="text" className="form-input" /> */}
            <select
              onChange={(e) =>
                setProject({ ...project, category: e.target.value })
              }
              name="category"
              id="category"
              className="form-input select-arrow bg-transparent"
            >
              <option value="" disabled selected>
                Выберите город
              </option>
              {category?.map((cat) => (
                <option value={String(cat?.id)} key={cat?.id}>
                  {cat?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectCity" className="form-label">
            Город реализации
          </label>
          <div className="form-input-box">
            {/* <input id="projectCity" type="text" className="form-input" /> */}
            <select
              onChange={(e) =>
                setProject({ ...project, city_realization: e.target.value })
              }
              name="projectCity"
              id="projectCity"
              className="form-input select-arrow bg-transparent"
            >
              <option value="" disabled selected>
                Выберите город
              </option>
              {cities?.map((city) => (
                <option value={city?.id} key={city?.id}>
                  {city?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectFinance" className="form-label">
            Финансовая цель, ₽
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) =>
                setProject({
                  ...project,
                  financial_goal: Number(e.target.value),
                })
              }
              id="projectFinance"
              type="text"
              className="form-input"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectDeadline" className="form-label">
            Срок окончания проекта
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) =>
                setProject({
                  ...project,
                  project_completion_date: e.target.value,
                })
              }
              id="projectDeadline"
              type="text"
              className="form-input"
              placeholder="ГГГГ-ММ-ДД"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectDescription" className="form-label">
            Коротко о проекте
          </label>
          <div className="form-input-box">
            <textarea
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
              name="projectDescription"
              id="projectDescription"
              className="form-input block min-h-[120px] resize-none"
              placeholder="Коротко о проекте"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="projectDescription" className="form-label">
            Картинка
            <br />
            <span className="text-base font-light leading-[24px]">
              Размер 640х390
            </span>
          </label>
          <div className="flex justify-between overflow-clip md:flex-[0_1_850px]">
            <label
              htmlFor="uploadImage"
              className="block w-fit cursor-pointer border-b border-primary text-[18px] leading-[120%] text-primary"
            >
              Загрузить фото
            </label>
            <input
              onChange={(e) =>
                setProject({ ...project, image: e.target.files[0] })
              }
              type="file"
              id="uploadImage"
              accept="image/*"
              className="hidden"
            />
            <Link
              href="#"
              className="hidden items-center gap-[10px] text-[18px] leading-[120%] text-gray-dark md:flex"
            >
              <MdOutlineRemoveRedEye className="text-[24px] text-primary" />
              Предпросмотр
            </Link>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="flex flex-col gap-[60px]">
        <div className="flex items-center justify-between">
          <div className="flex-[0_1_270px]">
            <label className="form-label">Фото и видеоматериал</label>
            <p className="mt-[10px] text-balance text-[14px] leading-[24px] text-gray-light opacity-70">
              Размер 740х417
              <br />
              <br />
              Это один из самых убедительных и эффективных инструментов для
              привлечения аудитории.
            </p>
          </div>
          <div className="flex justify-between overflow-clip md:flex-[0_1_850px]">
            <div className="flex flex-col gap-[20px]">
              <label
                htmlFor="uploadMedia"
                className="block w-fit cursor-pointer text-nowrap border-b border-primary text-[14px] leading-[120%] text-primary md:text-[18px]"
              >
                Загрузить фото или видео
              </label>
              <input
                onChange={(e) =>
                  setProject({ ...project, image_or_video: e.target.files[0] })
                }
                type="file"
                id="uploadMedia"
                accept="image/*,video/*"
                className="hidden"
              />

              {/* Загрузить видео с YouTube */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // Предотвращаем стандартное поведение кнопки
                  setModalOpen(true);
                }}
                className="block w-fit text-nowrap border-b border-primary text-[14px] leading-[120%] text-primary md:text-[18px]"
              >
                Загрузить видео с YouTube
              </button>
            </div>
            <Link
              href="#"
              className="hidden items-center gap-[10px] text-[18px] leading-[120%] text-gray-dark md:flex"
            >
              <MdOutlineRemoveRedEye className="text-[24px] text-primary" />
              Предпросмотр
            </Link>
          </div>

          {/* Модальное окно для ввода YouTube ссылки */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="rounded-md bg-white p-6 shadow-md">
                <h2 className="mb-4 text-xl">Загрузить видео с YouTube</h2>
                <form onSubmit={handleLinkSubmit}>
                  <input
                    onChange={(e) =>
                      setProject({ ...project, description: e.target.value })
                    }
                    type="text"
                    placeholder="Вставьте ссылку на видео с YouTube"
                    value={youtubeLink}
                    className="mb-4 w-full border p-2"
                  />
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="rounded-md bg-gray-300 px-4 py-2"
                    >
                      Отмена
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 px-4 py-2 text-white"
                    >
                      Загрузить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="md:flex-[1_1_270px]">
            <label htmlFor="projectDetailedDescription" className="form-label">
              Детальное описание
            </label>
            <p className="mt-[20px] text-[14px] leading-[130%] text-gray-light opacity-70 md:leading-[24px] wide:text-balance">
              Начните с представления себя, своей команды, а также с предыстории
              проекта. Далее опишите суть и цель проекта, объясните, в чем его
              уникальность и почему он должен заинтересовать людей. Распишите,
              на что будут потрачены вложенные пользователями средства.
              Избегайте монотонности изложения, разбивайте текст на абзацы с
              привлекательными заголовками, фото- и видеоматериалами,
              графическими изображениями и т.п. Совет: по объему текст-описание
              должен быть примерно наравне с колонкой вознаграждений – идеально,
              если они заканчиваются на одном уровне.
            </p>
          </div>
          <div className="form-input-box mx-auto !min-h-[300px] self-stretch">
            <textarea
              onChange={(e) =>
                setProject({ ...project, detailed_description: e.target.value })
              }
              name="projectDetailedDescription"
              id="projectDetailedDescription"
              className="form-input block h-full resize-none"
              placeholder="Распишите проект детально"
            ></textarea>
          </div>
        </div>
      </div>
    ),
    3: (
      <div className="flex flex-col gap-[30px] md:gap-[60px]">
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectReward" className="form-label">
            Название вознаграждения
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) =>
                setProject({ ...project, reward: e.target.value })
              }
              id="projectReward"
              type="text"
              className="form-input"
              placeholder="Название вознаграждения"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Описание вознаграждения
            </label>
            <p className="mt-[10px] text-balance text-[14px] leading-[24px] text-gray-light opacity-70">
              Максимально подробно распишите, что пользователь получит при
              выборе данного бонуса. Уточните все характеристики и детали
              вознаграждения.
            </p>
          </div>
          <div className="form-input-box mx-auto !min-h-[160px] self-stretch">
            <textarea
              // onChange={(e) => setProject({ ...project, description: e.target.value })}
              name="projectRewardDescription"
              id="projectRewardDescription"
              className="form-input block h-full resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Способы получения
            </label>
            <p className="mt-[10px] text-balance text-[14px] leading-[130%] text-gray-light opacity-70 md:leading-[24px]">
              Уточните тип доставки вознаграждений (почтовая и/или курьерская),
              а также укажите, за чей счёт она будет осуществляться. Если
              планируется самовывоз, укажите город, где можно будет получить
              бонус. Для цифровых вознаграждений уточните, что бонус будет
              отправлен участнику на электронную почту, указанную им при
              регистрации.
            </p>
          </div>
          <div className="form-input-box mx-auto !min-h-[300px] self-stretch">
            <textarea
              // onChange={(e) => setProject({ ...project, detailed_description: e.target.value })}
              name="projectRewardDescription"
              id="projectRewardDescription"
              className="form-input block h-full resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectRewardPrice" className="form-label">
            Цена вознаграждения, ₽
          </label>
          <div className="form-input-box">
            <input
              onChange={(e) =>
                setProject({ ...project, financial_goal: e.target.value })
              }
              id="projectRewardPrice"
              type="text"
              className="form-input"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="projectRewardNumber" className="form-label">
            Количество
          </label>
          <div className="form-input-box flex items-center justify-between">
            <input
              // onChange={(e) => setProject({ ...project, financial_goal: e.target.value })}
              id="projectRewardNumber"
              type="text"
              className="form-input"
              placeholder="0"
            />
            <div className="flex shrink-0 cursor-pointer items-center gap-[10px] self-stretch border-l border-gray-dark px-[20px] md:px-[30px]">
              <Image
                src={profileIcons.check}
                alt="check"
                width={0}
                height={0}
                sizes="100%"
                className="size-[26px] object-cover md:size-[44px]"
              />
              <label
                htmlFor="unlimitedRewards"
                className="cursor-pointer text-nowrap text-[14px] leading-[120%] text-gray-light md:text-base"
              >
                Не ограничено
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="projectDescription" className="form-label">
            Картинка
            <br />
            <span className="text-base font-light leading-[24px]">
              Размер 640х390
            </span>
          </label>
          <div className="flex justify-between overflow-clip md:flex-[0_1_850px]">
            <Link
              href="#"
              className="block w-fit border-b border-primary text-[18px] leading-[120%] text-primary"
            >
              Загрузить фото
            </Link>
            <Link
              href="#"
              className="hidden items-center gap-[10px] text-[18px] leading-[120%] text-gray-dark md:flex"
            >
              <MdOutlineRemoveRedEye className="text-[24px] text-primary" />
              Предпросмотр
            </Link>
          </div>
        </div>
      </div>
    ),
    4: (
      <div className="flex flex-col gap-[30px] md:gap-[60px]">
        <div className="form-label">
          Контрагент - это лицо, которое будет выступать организатором проекта.
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="kontragent" className="form-label">
            Выбор контрагента
          </label>
          <div className="form-input-box">
            <select
              onChange={(e) => {
                setProject({
                  ...project,
                  counterparty: Number(e.target.value),
                });
                console.log(e.target.value);
              }}
              name="kontragent"
              id="kontragent"
              className="form-input select-arrow bg-transparent"
            >
              {counterparty?.map((c) => (
                <option value={c?.id}>{c?.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="typeBusiness" className="form-label">
            Тип Категории
          </label>
          <div className="form-input-box">
            <select
              onChange={(e) => {
                setProject({ ...project, typeCategoryBuss: e.target.value });
                console.log(e.target.value);
              }}
              name="typeBusiness"
              id="typeBusiness"
              className="form-input select-arrow bg-transparent"
            >
              {typeCategoryBuss?.map((bus) => (
                <option value={bus?.id}>{bus?.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <label htmlFor="kontragent" className="form-label">
            Тип
          </label>
          <div className="form-input-box">
            <select
              onChange={(e) => {
                setProject({ ...project, type_susiness: e.target.value });
                console.log(e.target.value);
              }}
              name="kontragent"
              id="kontragent"
              className="form-input select-arrow bg-transparent"
            >
              {typeBusiness?.map((bus) => (
                <option value={bus?.id}>{bus?.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              ФИО
            </label>
            <p className="mt-[10px] text-balance text-[14px] leading-[130%] text-gray-light opacity-70 md:leading-[24px]">
              ФИО физического лица/ИП или наименование организации для
              юридического лица
            </p>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <textarea
              onChange={(e) =>
                setProject({ ...project, full_name: e.target.value })
              }
              name="full_name"
              id="full_name"
              className="form-input block h-full resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Инициалы и фамилия для подписи в договоре
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) =>
                setProject({ ...project, surname_signature: e.target.value })
              }
              id="surname_signature"
              type="text"
              className="form-input"
              placeholder="И. И. Иванов"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Дата рождения
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) =>
                setProject({ ...project, birth_date: e.target.value })
              }
              id="birth_date"
              type="text"
              className="form-input"
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Город
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => setProject({ ...project, city: e.target.value })}
              id="city"
              type="text"
              className="form-input"
              placeholder="Город, поселок, село"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Телефон
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) =>
                setProject({ ...project, phone: e.target.value })
              }
              id="phone"
              type="text"
              className="form-input"
              placeholder="+7"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              ИНН
            </label>
            <p className="mt-[10px] text-balance text-[14px] leading-[130%] text-gray-light opacity-70 md:leading-[24px]">
              Должно содержать 10 или 12 цифр. Обязательное для юридических лиц
              из России.
            </p>
          </div>
          <div className="form-input-box mx-auto">
            <input
              onChange={(e) => setProject({ ...project, inn: e.target.value })}
              id="inn"
              type="text"
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Номер паспорта
            </label>
            <p className="mt-[10px] text-[14px] leading-[130%] text-gray-light opacity-70 md:text-balance md:leading-[24px]">
              Должно содержать: для физических лиц из России - 4 цифры серии, 6
              цифр номера; для лиц из других стран - любые данные
            </p>
          </div>
          <div className="form-input-box mx-auto">
            <input
              onChange={(e) =>
                setProject({ ...project, passport_number: e.target.value })
              }
              id="passport_number"
              type="text"
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Кем выдан паспорт
            </label>
          </div>
          <div className="form-input-box mx-auto">
            <input
              onChange={(e) =>
                setProject({ ...project, issued_passport: e.target.value })
              }
              id="issued_passport"
              type="text"
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Когда выдан паспорт
            </label>
          </div>
          <div className="mx-auto flex flex-[0_1_850px] flex-wrap items-center justify-between gap-y-[30px]">
            <div className="min-h-[50px] flex-[0_1_271px] overflow-clip rounded-[5px] border border-gray-dark outline-none has-[:active]:outline-primary has-[:focus-visible]:outline-primary has-[:focus]:outline-primary">
              <input
                id="projectRewardPrice"
                type="text"
                className="form-input"
                placeholder="ДД.ММ.ГГГГ"
              />
            </div>
            <label
              htmlFor="projectRewardDescription"
              className="form-label text-nowrap"
            >
              Код подразделения
            </label>
            <div className="min-h-[50px] flex-[0_1_271px] overflow-clip rounded-[5px] border border-gray-dark outline-none has-[:active]:outline-primary has-[:focus-visible]:outline-primary has-[:focus]:outline-primary">
              <input
                onChange={(e) => {
                  setProject({ ...project, department_code: e.target.value });
                }}
                id="department_code"
                type="text"
                className="form-input"
                placeholder="000-000"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label htmlFor="projectRewardDescription" className="form-label">
              Необходимые документы <br className="hidden md:block" /> для
              оформления договора
            </label>
            <p className="mt-[10px] text-balance text-[14px] leading-[130%] text-gray-light opacity-70 md:leading-[24px]">
              - Скан/фото паспорта основная страница с фото
              <br />- Скан/фото паспорта страница с пропиской
              <br />- Скан/фото свидетельство ИНН
            </p>
          </div>
          <div className="form-input-box flex items-end self-stretch p-[30px]">
            <label
              htmlFor="projectRewardDescription"
              className="w-full cursor-pointer rounded-[5px] bg-gray-dark py-[10px] text-center text-[12px] leading-[110%] text-white opacity-60 active:scale-[0.99]"
            >
              Загрузить
            </label>
            <input
              onChange={(e) =>
                setProject({ ...project, document: e.target.files[0] })
              }
              type="file"
              id="projectRewardDescription"
              accept=".txt,.doc,.pdf"
              className="hidden"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Адрес регистрации <br className="hidden md:block" /> (как в
              паспорте)
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({ ...project, address_register: e.target.value });
              }}
              id="address_register"
              type="text"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Расчетный счет
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({ ...project, current_account: e.target.value });
              }}
              id="current_account"
              type="text"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Банк получателя
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({ ...project, recipients_bank: e.target.value });
              }}
              id="recipients_bank"
              type="text"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Корреспондентский счет
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({
                  ...project,
                  correspondent_account: e.target.value,
                });
              }}
              id="correspondent_account"
              type="text"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              БИК
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({ ...project, bik: e.target.value });
              }}
              id="bik"
              type="text"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[30px] md:gap-x-0">
          <div className="flex-[1_1_270px]">
            <label
              htmlFor="projectRewardDescription"
              className="form-label !text-wrap"
            >
              Прочие данные
            </label>
          </div>
          <div className="form-input-box mx-auto self-stretch">
            <input
              onChange={(e) => {
                setProject({ ...project, other_data: e.target.value });
              }}
              id="other_data"
              type="text"
              className="form-input"
            />
          </div>
        </div>
      </div>
    ),
  };

  function prevForm() {
    if (activeForm == 1) return;
    setActiveForm(activeForm - 1);
  }
  function nextForm() {
    if (activeForm == 4) return;
    setActiveForm(activeForm + 1);
  }

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Создание проекта"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section>
        {isSendForm ? (
          <div className="max-container mb-[100px] mt-[30px] md:mb-[150px] md:mt-[100px]">
            <div className="mb-[60px] flex flex-col items-center">
              <h2 className="mb-[30px] text-[24px] font-bold text-gray-dark md:text-[32px]">
                Создание проекта
              </h2>
              <ul className="flex w-full max-w-[220px] flex-wrap items-center justify-between gap-y-[20px] md:max-w-[1000px] md:justify-center md:gap-x-[80px]">
                <li
                  onClick={() => setActiveForm(1)}
                  className={`cursor-pointer border-b text-[14px] leading-[120%] md:pb-[5px] md:leading-[24px] ${activeForm == 1 ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
                >
                  Основные данные
                </li>
                <li
                  onClick={() => setActiveForm(2)}
                  className={`cursor-pointer border-b text-[14px] leading-[120%] md:pb-[5px] md:leading-[24px] ${activeForm == 2 ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
                >
                  Детали
                </li>
                <li
                  onClick={() => setActiveForm(3)}
                  className={`cursor-pointer border-b text-[14px] leading-[120%] md:pb-[5px] md:leading-[24px] ${activeForm == 3 ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
                >
                  Вознаграждение
                </li>
                <li
                  onClick={() => setActiveForm(4)}
                  className={`cursor-pointer border-b text-[14px] leading-[120%] md:pb-[5px] md:leading-[24px] ${activeForm == 4 ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
                >
                  Контрагенты
                </li>
              </ul>
            </div>

            <form className="create-form mx-auto flex max-w-[1140px] flex-col gap-[60px]">
              {createProjectForms[activeForm]}
              <div>
                <div className="flex flex-wrap-reverse items-center justify-between gap-y-[20px]">
                  <button
                    onClick={() => prevForm()}
                    type="button"
                    className={`${activeForm == 1 && "invisible"} rounded-[5px] border-2 border-gray-light px-[40px] py-[20px] text-[14px] font-bold leading-[120%] text-gray-light active:scale-[0.97] md:leading-[24px]`}
                  >
                    Назад
                  </button>
                  <Link
                    href="#"
                    className="flex items-center gap-[10px] text-[14px] leading-[120%] text-gray-light md:hidden md:text-[18px]"
                  >
                    <MdOutlineRemoveRedEye className="text-primary md:text-[24px]" />
                    Предпросмотр
                  </Link>
                  <div className="flex flex-[0_1_850px] flex-col-reverse justify-between gap-[20px] overflow-clip md:flex-row">
                    <button
                      onClick={() => nextForm()}
                      type="button"
                      className="flex-1 rounded-[5px] bg-primary px-[40px] py-[20px] text-[14px] font-bold leading-[120%] text-white active:scale-[0.97] md:leading-[24px]"
                    >
                      Продолжить
                    </button>
                    <button
                      onClick={() => handlePost()}
                      type="button"
                      className="flex-1 rounded-[5px] border-2 border-gray-light px-[40px] py-[20px] text-[14px] font-bold leading-[120%] text-gray-light active:scale-[0.97] md:leading-[24px]"
                    >
                      Сохранить
                    </button>
                  </div>
                </div>
                <p className="mt-[22px] text-[18px] leading-[150%] text-gray-dark md:text-center md:leading-[120%]">
                  У вас есть вопросы? Напиши нам на почту{" "}
                  <b>support@busipool.ru</b>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="mb-[100px] mt-[60px] md:mb-[150px]">
            <div className="mb-[100px] bg-secondary py-[30px] md:mb-[150px] md:py-[100px]">
              <div className="max-container flex flex-col justify-between gap-[30px] lg:flex-row">
                <div className="flex flex-col lg:items-start lg:text-left">
                  <h2 className="text-[28px]max-w-[727px] mb-[10px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[36px] lg:text-[42px] xl:text-[64px]">
                    Ваш проект отправлен на модерацию
                  </h2>
                  <p className="wrap-balance mb-[30px] max-w-[620px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:!text-[26px] lg:text-[32px]">
                    Как только мы увидим ваш проект и убедимся, что он не
                    нарушает правила нашего сервиса, то сразу сообщим вам о
                    решении на почту
                  </p>
                  <Link href={"/profile"}>
                    <Button
                      text="Личный кабинет"
                      style={"font-light text-sm !py-5 w-[230px]"}
                      primary
                      extraSmall
                    />
                  </Link>
                </div>
                <Image
                  src={sendProjectImage}
                  alt="image"
                  priority={true}
                  width={0}
                  height={0}
                  className="md:h-80max-w-full object-contain lg:h-auto lg:!max-w-[500px] 2xl:max-w-[700px]"
                />
              </div>
            </div>
            <HomeBlogs />
          </div>
        )}
      </section>
    </>
  );
};

export default CreateProjectPage;
