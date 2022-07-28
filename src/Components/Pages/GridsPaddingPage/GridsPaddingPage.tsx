import React from 'react'
import './gridspaddingpage.css'
import breakpoint from '../../Assets/image/breakpoint.png'
import gridlayout from '../../Assets/image/gridlayout.png'


export const GridsPaddingPage = () => {
  return (
    <div>
      <div className='header-title'>
        <h2>Модуль и сетка</h2>
      </div>
      <div>
        <div className='wide-container'>
          <h3>Сетка</h3>
          <p>В интерфейсах Вышки мы используем гибкую сетку — ширина столбцов будет постоянно увеличиваться/уменьшаться в размере при изменении области просмотра.</p>
          <p>Межколоночное расстояние меняется в заивисмости от брейкпоинтов следующим образом:</p>
          <img src={breakpoint} alt="" />
        </div>
        <div className='thin-container'>
          <h3>Как пользоваться сеткой</h3>
          <p>Мы подготовили набор базовых состояний сетки для различных разрешений экрана. Все они есть в панеле стилей библиотеки компонентов.</p>
          <p>В некоторых интерфейсах ВШЭ возможно использование левого сайдбара. Для этого случая мы также подготовили сетку, где ширина сайдбара и ширина колонки выстраивается в зависимости от ширины экрана.</p>
          <p>Чтобы включить отображение сетки нажмите</p>
          <img src={gridlayout} alt="" />
        </div>
      </div>
    </div>
  )
}
