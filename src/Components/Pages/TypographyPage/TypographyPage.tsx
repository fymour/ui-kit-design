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
        <p>
          Типографика
        </p>
      </div>
      <div className="block-one">
        <div className="block-one-inside">
          <p>
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
      <div className="block-two">
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
    </div>
  )
}
