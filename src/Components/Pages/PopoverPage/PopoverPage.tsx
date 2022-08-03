import React from 'react'
import { Popover } from 'ui-kit/Popover/Popover'
import './PopoverPage.css'

export const PopoverPage = () => {
  return (
    <div>
      <h1 className='pages-title'>
      Popover
        </h1>
        <div className='pages-tabs'></div>
      <div className='pages-description'>
        <p>Popover — это плавающее окно, прикрепленное к какому-либо элементу.
          Пользователь может взаимодействовать с содержимым Popover, в том числе выбирать текст или нажимать ссылки.
        </p>
        <p>Чтобы показывать или скрывать Popover, рекомендуется использовать явное действие пользователя,
          например нажатие на кнопку, а не просто наведение указателя на элемент (используйте компонент Tooltip для отображения информации при наведении).</p>
        <div className='popover-row'>
        <Popover />
        <Popover />
        </div>
      </div>
    </div>
  )
}
