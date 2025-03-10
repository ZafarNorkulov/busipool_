import Whatsapp from "@/assets/images/social/Whatsapp.png";
import Instagram from "@/assets/images/social/Instagram.png";
import VK from "@/assets/images/social/VK.png";
import Telegram from "@/assets/images/social/Telegram.png";

import idea from "@/assets/images/svg/profile-menu/idea.svg";
import check from "@/assets/images/svg/profile-menu/check.svg";
import favorite from "@/assets/images/svg/profile-menu/favorite.svg";
import profile from "@/assets/images/svg/profile-menu/profile.svg";
import reward from "@/assets/images/svg/profile-menu/reward.svg";
import ruble from "@/assets/images/svg/profile-menu/ruble.svg";
import settings from "@/assets/images/svg/profile-menu/settings.svg";
import shutdown from "@/assets/images/svg/profile-menu/shutdown.svg";

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/investor", label: "Инвестору" },
  { href: "/company", label: "Компаниям" },
  { href: "/become-partner", label: "Стать партнером" },
  { href: "/about-us", label: "Видение" },
  { href: "/about-us/partners", label: "Партнеры" },
  { href: "/about-us/contacts", label: "Контакты" },
  { href: "/about-us/faq", label: "Q&A" },
  { href: "/about-us/blog", label: "Блог" },
];

export const footerLinks = [
  {
    title: "О платформе",
    links: [
      {
        href: "/investor",
        label: "Инвестору",
      },
      {
        href: "/company",
        label: "Компаниям",
      },
      {
        href: "/become-partner",
        label: "Стать партнером",
      },
    ],
  },
  // {
  //   title: "Документы",
  //   links: [
  //     {
  //       href: "#",
  //       label: "Сфера деятельности",
  //     },
  //     {
  //       href: "#",
  //       label: "Возврат средств",
  //     },
  //     {
  //       href: "#",
  //       label: "Способы оплаты",
  //     },
  //   ],
  // },
  {
    title: "Контакты",
    links: [
      {
        href: "/about-us",
        label: "О нас",
      },
      {
        href: "/about-us/blog",
        label: "Блог",
      },
      {
        href: "#",
        label: "Помощь",
      },
    ],
  },
  {
    title: "остались Вопросы?",
    links: [
      {
        href: "/about-us/faq",
        label: "Как это работает",
      },
      {
        href: "/about-us/faq",
        label: "Что такое краудфандинг?",
      },
      {
        href: "/about-us/faq",
        label: "Безопасность",
      },
    ],
  },
];
export const socialMedia = [
  { src: Whatsapp, alt: "whatsapp logo", href: "https://wa.me/79265828518" },
  { src: VK, alt: "vk logo", href: "https://vk.com/busipool" },
  { src: Telegram, alt: "telegram logo", href: "https://t.me/busipool" },
  // { src: Instagram, alt: "instagram logo", href: "" },
];
export const dealsSteps = [
  {
    title: "Регистрируетесь",
    text: "Регистрация проста - ФИО, email, телефон. После прохождения регистрации BUSIPOOL попросит вас пройти короткий тест, который подтвердит понимание основ инвестирования в капитал компаний, и загрузить паспорт. После этого вы можете инвестировать.",
  },
  {
    title: "Выбираете компанию",
    text: "Все компании на BUSIPOOL предоставили стандартную информацию о себе и своей деятельности, чтобы вы могли в удобной форме изучить их инвестиционные предложения.",
  },
  {
    title: "Знакомитесь с документами компании",
    text: "Помимо описания компании, вам доступно: Инвестиционное предложение с условиями покупки и управления; Текущие результаты финансовой деятельности компании и планы; Инвестиционная презентация компании. Также, вы сможете связаться с командой и задать вопросы по бизнес-проекту.",
  },
  {
    title: "Совершаете покупку",
    text: "Договор подписывается в онлайн-формате без посещения нотариуса или необходимости приезда в офис компании. Копия договора отправляется вам на email.",
  },
  {
    title: "Акции зачисляются на ваш счёт",
    text: "Вы открываете личный кабинет у регистратора, который обслуживает компанию и акции переводятся на ваш лицевой счёт.",
  },
  {
    title: "Вы распоряжаетесь акциями",
    text: "После получения акций вы можете ожидать выхода компании на IPO (если у компании есть такие планы), продать их основателям проекта или другим акционерам.",
  },
];
export const workProcess = [
  {
    title: "Вы подали заявку, Busipool",
    text: "После того как вы подали заявку, BUSIPOOL высылает вам информацию о процессе прохождения акционирования вашей компании.",
    deadline: "Срок: 1 день",
  },
  {
    title: "Создание АО",
    text: "Акции распределяются среди учредителей и владельцев текущего бизнеса. От вас требуется минимальный набор информации, в целом, аналогичный созданию АО.",
    deadline: "Срок: 10 дней",
  },
  {
    title: "Выпуск акций для продажи",
    text: "Новые акции будут использоваться для продажи инвесторам. Вы можете самостоятельно определить цену и количество акций.",
    deadline: "Срок: 14 дней",
  },
  {
    title: "Подготовка документов",
    text: `Разработка документации для размещения бизнеса на площадке BUSIPOOL. \n Минимально будет необходимо подготовить:\n Инвестиционное предложение, Инвестиционную презентацию и Финансовую модель проекта. Параллельно, нужно будет получить аудиторское заключение о корректности предоставленной финансовой информации.`,
    deadline: "Срок: 7 дней",
  },
  {
    title: "Размещение, проведение роадшоу, получение средств",
    text: "На основании подготовленной документации ваш бизнес будет размещён на BUSIPOOL. Для продажи акций частным инвесторам вам будет необходимо провести рекламную кампанию. По мере привлечения средств инвесторов, BUSIPOOL будет переводить деньги на счет вашего АО.",
    deadline: "Срок: 90 дней",
  },
  {
    title: "Закрытие сделки",
    text: "После завершения срока действия Инвестиционного предложения BUSIPOOL формирует список инвесторов для передачи акций. От вас потребуется только подписать передаточный реестр.",
    deadline: "Срок: 3 дня",
  },
];
export const profileIcons = {
  idea,
  check,
  favorite,
  idea,
  profile,
  reward,
  ruble,
  settings,
  shutdown,
};
