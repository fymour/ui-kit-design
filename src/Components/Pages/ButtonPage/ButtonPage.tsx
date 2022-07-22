import React from 'react'
import Button from 'ui-kit/Button/Button'
import './ButtonPage.css'

export const ButtonPage = () => {
  return (
    <div>
      <h1>Описание</h1>
      <p>Button — это компонент, который запускает действие. Также кнопки сообщают пользователям, что будет дальше.

        Button символизирует какое-то локальное действие на текущей странице, в то время как Link - это переход на другую страницу.</p>
      <h3>Default</h3>
      <p>Исходный вид кнопки</p>
     <div className="row">
     <div className='right'>
      <Button children={"Default"} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <Button children={"Default"} variant='secondary' disabled={true} disableStyle={''} hoverStyle={''} activeStyle={''} />
     </div>
      <h3>Hover</h3>
      <p>Используется при наведении мыши на кнопку</p>
      <div className="row">
        <div className='right'>
      <Button children={"Hover State"} hover={true} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <Button children={"Hover State"} variant='secondary' hover={true} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <h3>Disabled</h3>
      <p>Используется, когда пользователь не может пройти дальше пока не совершит определенное дейcтвие</p>
      <div className="row">
      <div className='right'>
      <Button children={"Disabled State"} disabled={true} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <Button children={"Disabled State"} disabled={true}  variant='secondary' disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <h3>Inactive</h3>
      <p>Используется если нажатие на кнопку не может быть выполнено ни по каким причинам</p>
      <Button children={"Inactive State"} variant='secondary' active={false} disableStyle={''} hoverStyle={''} activeStyle={''} />
      <h3>Active</h3>
      <p>Используется, когда ты нажал кнопку мыши но еще не отпустил </p>
      <div className="row">
      <div className='right'>
      <Button children={"Active"} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
      <Button children={"Active"} variant='secondary' active={true} disableStyle={''} hoverStyle={''} activeStyle={''} />
      </div>
    </div>
  )
}
