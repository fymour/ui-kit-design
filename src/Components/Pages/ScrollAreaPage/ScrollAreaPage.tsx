import React from 'react'
import './ScrollAreaPage.scss'
import '../../../index.scss'

const ScrollAreaPage = () => {
  return (
    <div>
      <h1>Описание</h1>
      <p>ScrollArea (Скроллер) - это компонентный контейнер для отображения прокручиваемых областей в пользовательском интерфейсе.
      </p>
      <div className='scroll'>
        <div className='scrollareah'>
          <div className="scrollareahIn"></div>
        </div>
        <div className='scrollareaOne'>
          <div className='scrollareaOneIn'></div>
        </div>
      </div>
    </div>
  )
}

export default ScrollAreaPage