import React from 'react'
import cat from '../../Assets/image/cat.png'

export const LevelsInterfacePage = () => {
  return (
    <div>
      <div className='heading-title'>
        <h2>Уровни интерфейса</h2>
      </div>
      <div className="block-inside-ab-sys">
        <div className="left-ab-sys">
          <h2>
            Ой
          </h2>
          <p>
            Страница находится 
            в разработке
          </p>
        </div>
        <div className="right-ab-sys">
          <img src={cat} alt="" />
        </div>
      </div>
    </div>
  )
}
