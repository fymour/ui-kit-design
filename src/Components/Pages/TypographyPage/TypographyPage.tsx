import React from 'react'
import './TypographyPage.scss'
import img_one from '../../../ui-kit/Assets/img/img1.png'
import img_two from '../../../ui-kit/Assets/img/img2.png'
import img_text from '../../../ui-kit/Assets/img/text.png'
import img_text2 from '../../../ui-kit/Assets/img/img-text.png'
import icon_1 from '../../../ui-kit/Assets/icons/BadgeIcon.png'
import icon_2 from '../../../ui-kit/Assets/icons/BadgeIcon_1.png'
import icon_3 from '../../../ui-kit/Assets/icons/BadgeIcon_2.png'
import true_frame from '../../../ui-kit/Assets/img/true.png'
import false_frame from '../../../ui-kit/Assets/img/false.png'
import sizes_frame from '../../../ui-kit/Assets/img/size.png'

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
        <p className='first'>
          Чтобы страницы выглядели гармонично, не нужно использовать текстовые стили, которые стоят рядом, заголовок и наборный текст должны отличаться друг от друга на пару пунктов. Например, с «heading/h2» лучше всего использовать «paragraph/body/large» или в крайнем случае с «lead/large». При этом нужно понимать целевое назначение материала — в промо лучше смотрится большой контраст между набором и заголовком, а в интерфейсах такой подход отвлекает от главного, поэтому градус контрастности лучше снижать.
        </p>
        <p className='second'>
          Для лидов в промо-материалах мы добавили Slab начертание шрифта — «lead/large» и «lead/small». Но его не рекомендуется использовать в интерфейсах и личных кабинетах.
        </p>
        <div className="block-two-inside">

          <div className="zagolovki">
           <div className="left-title">
            <p className='one-par'> heading/h1 </p>
            <p className='two-par'> heading/h2 </p>
            <p className='three-par'> heading/h3 </p>
            <p className='four-par'> lead/large </p>
            <p className='five-par'> heading/h4 </p>
            <p className='six-par'> lead/small </p>
           </div>
           <div className="right-headers">
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <h3>Заголовок H3</h3>
            <h3 className='h3-2'>Заголовок H3</h3>
            <h4>Заголовок H4</h4>
            <h4 className='h4-2'>Заголовок H4</h4>
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
          <p className='style-p'>
            Стиль Paragraph используется для наборного текста.
          </p>
        </div>
        <div className="blocks">
         <div className='grid-1'>paragraph/body/large</div>
         <div className='grid-2'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-3'></div>
         <div className='grid-4'>paragraph/body/small</div>
         <div className='grid-5'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-6'></div>
         <div className='grid-7'>caption/x_large</div>
         <div className='grid-8'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-9'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-10'>caption/large</div>
         <div className='grid-11'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-12'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-13'>caption/medium</div>
         <div className='grid-14'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-15'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-16'>caption/small</div>
         <div className='grid-17'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-18'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-19'>caption/x_small</div>
         <div className='grid-20'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
         <div className='grid-21'>Ведь цифровизация — это не просто чья-то мечта, это требование времени</div>
        </div>
      </div>
      <div className="block-four" id='typography-length'>
        <h2>
          Длина строки
        </h2>
        <p className='block-four-p'>
          Люди читают с экрана компьютера очень избирательно. Необходимо выбирать удобную длину строки, чтобы текст не был слишком коротким или слишком длинным. Для оптимальной читабельности рекомендуется выбирать длину строки от 40 до 80 символов, включая пробелы.
        </p>
        <div className="block-strings">
          <div className="one-strings">
            <div className="icon">
              <img src={icon_1} width='32px' height='32px' alt="" />
            </div>
            <div className="text">
              <p>
                Меньше 40 символов
              </p>
              <div className="text-second">
                <p>
                  Слишком короткая строка заставляет читатетеля постоянно перебегать от строчки к новой строчке.
                </p>
              </div>
            </div>
          </div>
          <div className="two-strings">
            <div className="icon">
              <img src={icon_2} width='32px' height='32px' alt="" />
            </div>
            <div className="text">
              <p>
                40 символов
              </p>
              <div className="text-second">
                <p>
                Короткая строка оптимально выглядит с небольшим количеством текста.
                </p>
              </div>
            </div>
          </div>
          <div className="three-strings">
            <div className="icon">
              <img src={icon_2} width='32px' height='32px' alt="" />
            </div>
            <div className="text">
              <p>
                60 символов
              </p>
              <div className="text-second">
                <p>
                  Оптимальная длина строки от 40 до 80 символов включая пробелы, но лучше выбирать среднее значение, например 60 символов.
                </p>
              </div>
            </div>
          </div>
          <div className="four-strings">
            <div className="icon">
              <img src={icon_3} width='32px' height='32px' alt="" />
            </div>
            <div className="text">
              <p>
                80 символов
              </p>
              <div className="text-second">
                <p>
                  Оптимальная длина строки от 40 до 80 символов включая пробелы. Максимальное значение 80 символов, если строка будет длиннее ритм чтения нарушится.
                </p>
              </div>
            </div>
          </div>
          <div className="five-strings">
            <div className="icon">
              <img src={icon_1} width='32px' height='32px' alt="" />
            </div>
            <div className="text">
              <p>
              80+ символов
              </p>
              <div className="text-second">
                <p>
                Оптимальная длина строки от 40 до 80 символов включая пробелы. Макисмальное значение 80 символов, если строка будет длиннее ритм чтения нарушится. Такой текст читать еще сложнее, так как читателю нужно постоянно фокусировать взгляд, чтобы не потерять строку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-five" id='typography-hierarchy'>
        <h2>
          Иерархия
        </h2>
        <p>
          При выборе текстового стиля следует руководствоваться принципами иерархи и уровнем вложенности.
        </p>
        <p>
          Уровень вложенности означает, что крупный заголовок обобщает весь контент под ним. По такому принципу можно выстроить иерархию следующим образом.
        </p>
        <p className='p-h2'>
          H1 обобщает весь контент внутри которого есть заголовки H2, H3 и H4
          <p>

          H2 обобщает весь контент внутри которого есть заголовки H3, H4
          </p>
          H3 обобщает весь контент внутри которого есть заголовки H4.
        </p>
        <div className="images">
          <img src={true_frame} alt="" />
          <img src={false_frame} alt="" />
        </div>
      </div>
      <div className="block-six" id='typography-adaptivity'>
        <h2>
          Адаптивность 
        </h2>
        <p>
          Изменяеются только заголовки, остальные шрифты остаются без изменений.
        </p>
        <p className='block-six-p'>
          Заголовки автоматически уменьшаются при изменении ширины экрана в соответствии с таблицей. Необходимо учитывать это в дизайне продуктов, и использовать корректные соответствия размеров в адаптивных макетах.
        </p>
        <div className="sizes-block">
          <img src={sizes_frame} alt=""  />
        </div>
        <div className="text-footer">
          <p>
            При создании адаптивных решений уменьшается визуальное различие между заголовками, поэтому его следует создавать с помощью отступов следуя следующему принципу:
          </p>
          <p>
            чем больше отступ вокруг заголовка, тем доминантнее он в иерархическом ряде, тем больше он обобщает вложенный контент.
          </p>
          <p className='text-footer-p'>
            В интерфейсах для мобильного экрана 320px самый большой кегль шрифта 20 пунктов и стиль текста caption/x_large/bold
          </p>
        </div>
      </div>
    </div>
  )
}
