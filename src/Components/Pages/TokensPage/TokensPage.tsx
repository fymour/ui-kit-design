import React from 'react'
import cat from '../../Assets/image/cat.png'

export const TokensPage = () => {
  return (
    <div>
      <div className='heading-title'>
      <h1 className='pages-title'>Прочие токены</h1>
      </div>
      <div className='pages-tabs'></div>
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
