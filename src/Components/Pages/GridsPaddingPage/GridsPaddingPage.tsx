import React from 'react'
import './gridspaddingpage.css'
import grid from '../../Assets/image/grid.png'
import grid1 from '../../Assets/image/gird1.png'
import grid2 from '../../Assets/image/grid2.png'
import grid3 from '../../Assets/image/grid3.png'
import grid4 from '../../Assets/image/grid4.png'
import grid5 from '../../Assets/image/grid5.png'
import grid6 from '../../Assets/image/grid6.png'
import grid8 from '../../Assets/image/grid8.png'



export const GridsPaddingPage = () => {
  return (
    <div className='content'>
      <div className='header-title'>
        <h1 className='pages-title'>Модуль и сетка</h1>
      </div>
      <div className='pages-tabs'></div>
      <div className="pages-description">
        <div className='container'>
          <div className='wide-container'>
            <h3>Сетка</h3>
            <p>В интерфейсах Вышки мы используем гибкую сетку — ширина столбцов будет постоянно увеличиваться/уменьшаться в размере при изменении области просмотра.</p>
            <p>Межколоночное расстояние меняется в заивисмости от брейкпоинтов следующим образом:</p>
            <img className='break-image' src={grid} alt="" />
          </div>
          <div className='thin-container'>
            <h3>Как пользоваться сеткой</h3>
            <p>Мы подготовили набор базовых состояний сетки для различных разрешений экрана. Все они есть в панеле стилей библиотеки компонентов.</p>
            <p>В некоторых интерфейсах ВШЭ возможно использование левого сайдбара. Для этого случая мы также подготовили сетку, где ширина сайдбара и ширина колонки выстраивается в зависимости от ширины экрана.</p>
            <div className='turn-container'>
              <p>Чтобы включить отображение сетки нажмите</p>
              <img className='control-image' src={grid1} alt="" />
            </div>
            <img className='grid-image' src={grid2} alt="" />
          </div>

        </div>

      </div>
      <div className='desktop-container'>
        <h3>Desktop Small</h3>
        <div className='grid3'>
        <img src={grid3} alt="" />
        </div>
      </div>
      <div className='module-container'>
        <h3>Модуль</h3>
        <p>Минимальный модуль — 4 px. Это базовая единица измерений в интерфейсе.</p>
        <p>На основе этого значения строится типографика, иконки, задаются размеры элементов и отступы. Значения, кратные 4 используются везде, где это не противоречит здравому смыслу.</p>
        <div className='grid4'>
        <img className='gridsize-image' src={grid4}  />
        </div>
        <p>Использование модуля снижает вероятность ошибки при создании нового дизайна и при переносе элементов и отсупов в код, облегчает процесс масштабирования, структурирует страницы и раположенный на них контент.</p>
      </div>
      <div className='layout-container'>
        <h3>Отступы</h3>
        <p>Все отступы в дизайн системе строятся на основе модуля в 4px. Для удобства все подходящие значения имеют нейминг, соответсвующий их размерности: от самого маленького к самому большому.</p>
        <img className='sizes-image' src={grid5} alt="" />
        <p>Рекомендуется использовать минимальное возможное количество разных отступов в рамках одного экрана.</p>
        <p>Набор токенов отступов продуман, чтобы обеспечить визуальную различимость между разными токенами</p>
        <div className='card-container'>
          <img src={grid6} alt="" />
        </div>
        <div className='text-container'>
          <h3>Текст</h3>
          <p>При компоновке текста нужно учитывать размер и интерлиньяж. Между заголовком и основным текстом должно быть больше расстояния чем между абзацами. При этом для сохранения правила внутренего и внешнего нужно, отступы сверху и по бокам были больше расстояния между заголвоком и текстом.</p>
          <p>Размер параграфного отступа зависит от кегля и должен равняться размеру интерлиньяжа или быть приближенным к нему</p>
         <div className='text-image'>
         <img src={grid8} alt="" />
         </div>
        </div>
      </div>
    </div>
  )
}
