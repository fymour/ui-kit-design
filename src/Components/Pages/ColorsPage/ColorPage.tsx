import React from 'react'
import './ColorPage.css'
import color1 from '../../Assets/image/color.png'
import color2 from '../../Assets/image/color4.png'
import color3 from '../../Assets/image/color2.png'
import color4 from '../../Assets/image/color5.png'
import color5 from '../../Assets/image/color1.png'

export const ColorPage = () => {
  return (
    <div className='color-page'>
      <h2>Система цветов</h2>
      <div className="pages-description">
        <p className='color-paragraph'>Для синхронизации цветов в дизайне и разработке, используются дизайн-токены tokents / colors.
Следуйте инструкции:</p>
        <div className='color-row'>
          <div className='color-card'>
            <p className='color-card-title'>Изучите систему цветов</p>
            <p>Перед началом работы с цветами важно понять, как их использовать. Об этом можно прочитать на странице tokens / color</p>
            <img src={color1} alt="" />
          </div>
          <div className='color-card'>
          <p className='color-card-title'>Назначьте цвет объекту</p>
          <p>Выберите объект и в правой панели нажмите на иконку с точками рядом с текстом Fill или Stroke.</p>
          <img className='color-img' src={color2} alt="" />
          <p>В открывшемся окне можно выбрать цвет.</p>
          <img src={color3} alt="" />
          <p>Подобным образом вы можете сменить один стиль на другой.</p>
          <p>Если нажать на иконку плюса, то вы создадите свой стиль цвета. Рекомендуется пользоваться только цветами дизайн-системы.</p>
          <p>Выбирая цвет, обратите внимание на подсказки, которые появляются при наведение на цвет. Они помогают понять, где выбранный цвет может использоваться.</p>
          </div>
          <div className='color-card'>
          <p className='color-card-title'>Отмените стиль цвета</p>
          <p>Чтобы снять назначенный цвет с объекта, необходимо нажать на кнопку «минус».</p>
          <img className='color-img' src={color4} alt="" />
          <p>Вы также можете отвязаться от стиля, нажав на иконку разорванной скрепки.</p>
          <img className='color-img' src={color5} alt="" />
          <p>Сделав это, вы сможете менять настройки стиля на уровне объекта.</p>
          <p>Не рекомендуется снимать настройки стиля, так как в случае изменения дизайн-системы, выбранный объект не получит изменения автоматически.</p>
          <p>Кроме того, использование стилей из дизайн-системы помогает разработчикам легче ориентироваться при работе с макетами в Figma.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
