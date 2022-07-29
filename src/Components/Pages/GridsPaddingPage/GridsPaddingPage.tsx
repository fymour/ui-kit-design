import React from 'react'
import './gridspaddingpage.css'
import breakpoint from '../../Assets/image/breakpoint.png'
import size from '../../Assets/image/size.png'
import controlg from '../../Assets/image/conrolg.png'
import desktop from '../../Assets/image/desktop.png'


export const GridsPaddingPage = () => {
  return (
    <div>
      <div className='header-title'>
        <h1 className='pages-title'>Модуль и сетка</h1>
      </div>
      <div className="pages-description">
        <div className='wide-container'>
          <h3>Сетка</h3>
          <p>В интерфейсах Вышки мы используем гибкую сетку — ширина столбцов будет постоянно увеличиваться/уменьшаться в размере при изменении области просмотра.</p>
          <p>Межколоночное расстояние меняется в заивисмости от брейкпоинтов следующим образом:</p>
          <img className='break-image' src={breakpoint} alt="" />
        </div>
        <div className='thin-container'>
          <h3>Как пользоваться сеткой</h3>
          <p>Мы подготовили набор базовых состояний сетки для различных разрешений экрана. Все они есть в панеле стилей библиотеки компонентов.</p>
          <p>В некоторых интерфейсах ВШЭ возможно использование левого сайдбара. Для этого случая мы также подготовили сетку, где ширина сайдбара и ширина колонки выстраивается в зависимости от ширины экрана.</p>
          <div className='turn-container'>
            <p>Чтобы включить отображение сетки нажмите</p>
            <img className='control-image' src={controlg} alt="" />
          </div>
          <img className='grid-image' src={size} alt="" />
        </div>

      </div>
      <div className='desktop-container'>
        <h3>Desktop Small</h3>
        <img src={desktop} alt="" />
      </div>
      <div className='module-container'>
        <h3>Модуль</h3>
        <p>Минимальный модуль — 4 px. Это базовая единица измерений в интерфейсе.</p>
        <p>На основе этого значения строится типографика, иконки, задаются размеры элементов и отступы. Значения, кратные 4 используются везде, где это не противоречит здравому смыслу.</p>
      </div>
    </div>
  )
}
