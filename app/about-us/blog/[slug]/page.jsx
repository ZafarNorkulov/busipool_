"use client"
import Button from "@/components/Button";
import Image from "next/image";
import blog1 from "@/assets/images/blog/blog1.jpg";
import Head from "next/head";

// import { getBlogs } from "@/app/api/blogs/blogs";
// import { useState, useEffect } from "react";

const BlogPage = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetchBlogsApi();
  // }, []);


  // function fetchBlogsApi() {
  //   getBlogs().then((response) => {
  //     setBlogs(response);
  //   }
  //   ).catch((error) => {
  //     console.log(error);
  //   });
  // }

  return (
    <>
    <Head>
        <title>{"BUSIPOOL | Блог"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
    <section>
      <div className="max-container mb-[30px] mt-[30px] flex justify-between md:mb-[100px] md:mt-[100px]">
        <Button text="Следующая статья" />
        <Button text="Назад" />
      </div>

      <div className="max-container mx-auto md:max-w-[1430px]">
        <Image
          src={blog1}
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          alt="blog image"
          className="mb-[30px] object-contain md:mb-[100px]"
        />

        <h2 className="mb-[20px] text-center text-2xl font-bold leading-[110%] text-gray-dark md:mb-[60px] md:text-[64px] md:leading-[120%]">
          Презентация для проектов
        </h2>

        <div className="mx-auto mb-[30px] max-w-[1430px] md:mb-[100px]">
          <p className="mb-5 text-base font-light leading-[140%] text-gray-light md:mb-[50px] md:text-[36px]">
            Вы потратили время на работу над проектом, который может стать
            потенциальной революцией для вашей компании или клиента. Теперь вам
            не терпится представить его своей команде, инвесторам и другим
            ключевым заинтересованным сторонам. Создание и проведение
            презентаций проекта может быть нервным занятием, и у вас в голове
            наверняка крутится один вопрос. Как заставить лиц, принимающих
            решения, понять ваш проект или добиться его одобрения? Учитывая, что
            в некоторых компаниях за последний год провалилось около 12%
            проектов, вы хотите создать презентацию, которые будут не только
            убедительной, но и запоминающейся. Правильно составленная
            презентация проекта поможет вам завоевать и удержать внимание
            аудитории достаточно долго, чтобы объяснить детали проекта и то,
            почему он обязательно будет успешным. Не знаете, как создать
            успешную презентацию проекта? Мы поможем вам. В этой статье мы
            расскажем вам, как ставить цели проекта и правила оформления
            презентации, которые выведут ваш проект на новый уровень. Давайте
            приступим к делу.
          </p>

          <h3 className="text-base font-bold leading-[140%] text-gray-dark md:text-[36px]">
            Установите цели для вашего проекта
          </h3>
          <p className="text-base font-light leading-[140%] text-gray-light md:text-[36px]">
            Прежде чем погрузиться в основные детали презентации вашего проекта,
            стоит ответить на эти вопросы:
          </p>
          <ul className="list-disc pl-10">
            <li className="text-base font-light leading-[140%] text-gray-light md:text-[36px]">
              Какую цель преследует ваш проект?
            </li>
            <li className="text-base font-light leading-[140%] text-gray-light md:text-[36px]">
              Почему для вас и вашей команды важно достижение поставленных
              целей?
            </li>
            <li className="text-base font-light leading-[140%] text-gray-light md:text-[36px]">
              Как вы планируете донести свои цели до аудитории?
            </li>
          </ul>
          <p className="text-base font-light leading-[140%] text-gray-light md:text-[36px]">
            Если вам приходится долго гадать, прежде чем ответить на эти
            вопросы, вам предстоит большая работа.   Вот что вы должны знать.
            Красивые или хорошо сформулированные презентации проекта не заменяют
            планирование проекта. Без четких целей ваш проект уже настроен на
            провал. А ваши инвесторы могут подумать: "Зачем их слушать?".
            Многие руководители проектов склонны торопиться на этапе постановки
            целей, но мы не рекомендуем этого делать. Это потому, что вы можете
            настроить себя на неудачу.   Как только вы четко определите цели
            проекта, вы сможете заставить заинтересованные стороны принять их.
            Теперь возникает вопрос, как установить цели проекта и достичь их?
            Один из способов сделать это - использовать метод постановки целей
            SMART.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogPage;
