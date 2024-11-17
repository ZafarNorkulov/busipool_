import Whatsapp from "@/assets/images/social/Whatsapp.png";
import Instagram from "@/assets/images/social/Instagram.png";
import VK from "@/assets/images/social/VK.png";
import Telegram from "@/assets/images/social/Telegram.png";

import projectCard1 from "@/assets/images/projects/projectCard1.jpg";
import projectCard2 from "@/assets/images/projects/projectCard2.jpg";
import projectCard3 from "@/assets/images/projects/projectCard3.jpg";
import projectCard4 from "@/assets/images/projects/projectCard4.jpg";
import projectCard5 from "@/assets/images/projects/projectCard5.jpg";
import projectCard6 from "@/assets/images/projects/projectCard6.jpg";
import projectCard7 from "@/assets/images/projects/projectCard7.jpg";
import projectCard8 from "@/assets/images/projects/projectCard8.jpg";

import idea from "@/assets/images/svg/profile-menu/idea.svg";
import check from "@/assets/images/svg/profile-menu/check.svg";
import favorite from "@/assets/images/svg/profile-menu/favorite.svg";
import profile from "@/assets/images/svg/profile-menu/profile.svg";
import reward from "@/assets/images/svg/profile-menu/reward.svg";
import ruble from "@/assets/images/svg/profile-menu/ruble.svg";
import settings from "@/assets/images/svg/profile-menu/settings.svg";
import shutdown from "@/assets/images/svg/profile-menu/shutdown.svg";

import b1 from "@/assets/images/blog/b1.jpg";
import b2 from "@/assets/images/blog/b2.jpg";

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/investor", label: "Инвестору" },
  { href: "/company", label: "Компаниям" },
  { href: "/become-partner", label: "Стать парнером" },
  { href: "/about-us", label: "Видение" },
  { href: "/about-us/partner", label: "Партнеры" },
  { href: "/about-us/contact", label: "Контакты" },
  { href: "/about-us/faq", label: "Q&A" },
  { href: "/about-us/blog", label: "Блог" },
];
export const projects = [
  {
    id: 1,
    img: projectCard1,
    title: "Мобильное приложение «EVENSA»",
    text: "Приложение для организации мероприятий, которое включает в себя блоки для организаторов, а также для участников",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 2,
    img: projectCard2,
    title: "Надувной гамак-шезлонг",
    text: "Надувной гамак-шезлонг поможет вам отдохнуть так, как вы еще не отдыхали. Его просто нужно надуть.",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 3,
    img: projectCard3,
    title: "УникУм",
    text: "Мы готовим детей к школе онлайн по всему миру. Учим читать, писать, считать и многое другое. Вложитесь в наш проект",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 4,
    img: projectCard4,
    title: "Фестиваль робототехники и технологий РОБОСИТИ 2024",
    text: "Крупнейший в Московской области фестиваль робототехники.",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 5,
    img: projectCard5,
    title: "ВОЗРАСТЫ",
    text: "Документальный фильм о возвратах детей в детские дома. Реальные истории приемных семей.",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 6,
    img: projectCard6,
    title: "Мобильное приложение «KindlyPay»",
    text: "«KindlyPay» - это самый добрый проект в основе которого лежит принцип «бумеранга добра». Инвестируйте в наше приложение.",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 7,
    img: projectCard7,
    title: "Мобильное приложение «Save Joe»",
    text: "Помощник в борьбе с выгоранием. Мобильное приложение, которое поможет восстановить эмоциональный баланс.",
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
  {
    id: 8,
    img: projectCard8,
    title: "Проект «ThermaTec»",
    text: 'Комплекс для скрининга на рак молочной железы. Рак - это не проблема. Если он "пойман" на ранней стадии.',
    budget: {
      endDate: "до 20.06.24",
      current: "265 500 ₽",
      final: "450 000 ₽",
      percentage: "59%",
    },
  },
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
  {
    title: "Документы",
    links: [
      {
        href: "/occupation",
        label: "Сфера деятельности",
      },
      {
        href: "/refund",
        label: "Возврат средств",
      },
      {
        href: "/payment-methods",
        label: "Способы оплаты",
      },
    ],
  },
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
        href: "/help",
        label: "Помощь",
      },
    ],
  },
  {
    title: "остались Вопросы?",
    links: [
      {
        href: "/how-it-works",
        label: "Как это работает",
      },
      {
        href: "/what-is-crowdfunding",
        label: "Что такое краудфандинг?",
      },
      {
        href: "/security",
        label: "Безопасность",
      },
    ],
  },
];
export const socialMedia = [
  { src: Whatsapp, alt: "whatsapp logo", href: "" },
  { src: VK, alt: "vk logo", href: "" },
  { src: Telegram, alt: "telegram logo", href: "" },
  { src: Instagram, alt: "instagram logo", href: "" },
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
    title: "Подача заявки",
    text: "После того как вы подали заявку BUSIPOOL высылает вам информацию о процессе прохождения акционирования вашей компании.",
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
    title: "Подготовка документов к размещению",
    text: "Разработка документации для размещения бизнес на площадке BUSIPOOL. Минимально будет необходимо подготовить: Инвестиционное предложение, Инвестиционную презентацию и Финансовую модель проекта. Параллельно, нужно будет получить аудиторское заключение о корректности предоставленной финансовой информации.",
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
export const blogs = [
  {
    id: 1,
    image: b1,
    title: "Презентация для проектов",
    text: "Мы разобрали интересную тему, касательно презентации для своегособсвенного проекта.",
  },
  {
    id: 2,
    image: b2,
    title: "Что такое краудфандинг?",
    text: "Мы разобрали интересную тему, касательно что такое краудфандинг.",
  },
  {
    id: 3,
    image: b1,
    title: "Презентация для проектов",
    text: "Мы разобрали интересную тему, касательно презентации для своегособсвенного проекта.",
  },
  {
    id: 4,
    image: b2,
    title: "Что такое краудфандинг?",
    text: "Мы разобрали интересную тему, касательно что такое краудфандинг.",
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

export const investors = [
  { id: 1, link: "/company/1", title: "Стартапы и малый бизнес" },
  { id: 2, link: "/company/2", title: "Инвестиционные фонды" },
  { id: 3, link: "/company/3", title: "Клубы инвесторов" },
  { id: 4, link: "/company/4", title: "Бизнес-ангелы" },
  { id: 5, link: "/company/5", title: "Акселераторы" },
  { id: 6, link: "/company/6", title: "Гранты и субсидии" },
  { id: 7, link: "/company/7", title: "Пилоты с корпорациями" },
  { id: 8, link: "/company/8", title: "Венчурные студии" },
  { id: 9, link: "/company/9", title: "Краудфандинг" },
  { id: 10, link: "/company/10", title: "Кредиты" },
  { id: 11, link: "/company/11", title: "Технопарки" },
];
