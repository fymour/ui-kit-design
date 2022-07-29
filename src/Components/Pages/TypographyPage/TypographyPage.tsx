import React from 'react'
import './TypographyPage.scss'
import img_one from '../../../ui-kit/Assets/img/img1.png'
import img_two from '../../../ui-kit/Assets/img/img2.png'
import img_text from '../../../ui-kit/Assets/img/text.png'
import img_text2 from '../../../ui-kit/Assets/img/img-text.png'

export const TypographyPage = () => {
  return (
    <div className='typography-page'>
      <div className='typography'>
        <h1 className='pages-title'>
          Типографика
        </h1>
      </div>
      <div className="block-one pages-description">
        <div className="block-one-inside">
          <p className='m0'>
            Для синхронизации шрифтов в дизайне и разработке, используются дизайн-токены tokents / fonts.
            Чтобы изменить стиль текста в дизайне, следуйте инструкции:
          </p>
          <div className="block-one-inside-second">
          <div className="left-block">
            <p>
              Скачайте шрифты
            </p>
            <span>
              Все шрифты находятся по ссылке Шрифты Rubik Font Family
            </span>
            <img src={img_one} alt="" />
          </div>
          <div className="center-block">
            <p>
              Изучите систему шрифтов
            </p>
            <span>
              Перед началом работы с шрифтами важно понять, как их использовать. Об этом можно прочитать на странице tokens / fonts
            </span>
            <img src={img_two} alt="" />
          </div>
          <div className="right-block">
            <p>
              Назначьте стиль тексту
            </p>
            <span>
              После ввода текста необходимо задать ему стиль. Это можно сделать с помощью правой панели, нажав на иконку с точками в панели Text.
            </span>
            <img src={img_text} alt="" />
            <span>
              В открывшемся окне можно выбрать подходящий стиль.
            </span>
            <img src={img_text2} alt="" />
            <span>
              Подобным образом вы можете сменить один стиль на другой.
            </span>
          </div>
          </div>
        </div>
      </div>
      <div className="block-two" id='typography-title'>
        <p className='title'>
          Заголовки
        </p>
        <p>
          Чтобы страницы выглядели гармонично, не нужно использовать текстовые стили, которые стоят рядом, заголовок и наборный текст должны отличаться друг от друга на пару пунктов. Например, с «heading/h2» лучше всего использовать «paragraph/body/large» или в крайнем случае с «lead/large». При этом нужно понимать целевое назначение материала — в промо лучше смотрится большой контраст между набором и заголовком, а в интерфейсах такой подход отвлекает от главного, поэтому градус контрастности лучше снижать.
        </p>
        <p>
          Для лидов в промо-материалах мы добавили Slab начертание шрифта — «lead/large» и «lead/small». Но его не рекомендуется использовать в интерфейсах и личных кабинетах.
        </p>
        <div className="block-two-inside">

          <div className="zagolovki">
          <div className="h1">
            <p>
              heading/h1
            </p>
            <h1>
              Заголовок H1
            </h1>
          </div>
          <div className="h2">
            <p>
              heading/h2
            </p>
            <h2>
            Заголовок H2
            </h2>
          </div>
          <div className="h3">
            <p>
              heading/h3
            </p>
            <h3>
              Заголовок H1
            </h3>
          </div>
          <div className="h3-large">
            <p>
              lead/large
            </p>
            <h3>
              Заголовок H3
            </h3>
          </div>
          <div className="h4">
            <p>
              heading/h4
            </p>
            <h4>
              Заголовок H4
            </h4>
          </div>
          <div className="h4-large">
            <p>
              lead/small
            </p>
            <h4>
              Заголовок H4
            </h4>
          </div>
          </div>
        </div>

      </div>
      <div className="block-three" id='typography-text'>
        <h2>
          Наборный текст, подписи, подзаголовки
        </h2>
        <div className="three-first">
          <p>
            Оптимальный размер наборного текста — 18. Также в дизайн-системе предусмотрен более мелкий стиль текста — 16. Его нужно использовать только в крайнем случае. 
          </p>
          <p>
            Жирность — важная типографская переменная, которая помогает акцентировать внимание и позволяет выстраивать иерархию. Жирное начертание имеет больший акцент, чем регулар того же размера. Рекомендуется использовать его для заголовков, подзаголовоков, лидов и выделения. При этом оно совсем не подходит для длинного текста.
          </p>
          <p>
            Цвет — нужно внимательно подходить к выбору цвета для основного текста. Рекомендуется использовать нейтральный для наборного текста, системные цвета для ошибок и сообщений об успехе, а также брендовый синий для ссылок и действий.
          </p>
          <p>
            Рекомендуется использовать стиль «paragraph/body» для наборного текста, а «caption» и «lable» для подзаголовков и подписей.
          </p>
          <p>
            Стиль Paragraph используется для наборного текста.
          </p>
        </div>
        <div className="blocks">
          <div className="row-one">
            <p className= 'small'>
              paragraph/body/large
            </p>
            <p className='large' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-two">
            <p className= 'small'>
              paragraph/body/small
            </p>
            <p className='large' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-three">
            <p className= 'small'>
              caption/x_large
            </p>
            <p className='x-large_1' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени           
            </p>
            <p className='x-large_2' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-four">
            <p className= 'small'>
              caption/large
            </p>
            <p className='caption-large' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
            <p className='caption-large-2' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-five">
            <p className= 'small'>
              caption/medium
            </p>
            <p className='caption-medium-1' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
            <p className='caption-medium-2' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-six">
            <p className= 'small'>
              caption/small
            </p>
            <p className='caption-small-1' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
            <p className='caption-small-2' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          <div className="row-seven">
            <p className= 'small'>
              caption/x_small
            </p>
            <p className='caption-x-small-1' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
            <p className='caption-x-small-2' >
              Ведь цифровизация — это не просто чья-то мечта, это требование времени
            </p>
          </div>
          
        </div>
      </div>
      <div className="block-four" id='typography-length'>
        <h2>
          Длина строки
        </h2>
        <p>
          Люди читают с экрана компьютера очень избирательно. Необходимо выбирать удобную длину строки, чтобы текст не был слишком коротким или слишком длинным. Для оптимальной читабельности рекомендуется выбирать длину строки от 40 до 80 символов, включая пробелы.
        </p>
        
      </div>
    </div>
  )
}
