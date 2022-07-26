import React from 'react'
import { Input } from '../../../ui-kit/Input/Input'

const InputPage = () => {
  return (
    <div>
      <h1>Описание</h1>
      <div className='pages-description'>
      <p>Input – это поле ввода, которое позволяет пользователю писать или редактировать текст. Input обычно находится в форме, но также могут быть частью модального окна, поиска или карточки.</p>
      <h3>Слот Label</h3>
      <p>В слот заголовка компонента Input можно вставлять не только текст, а также, например, иконки. Для сохранения визуального веса рекомендуется использовать иконки размера small. Иконки можно использовать например, для создания всплывающих подсказок с использованием компонента Tooltip</p>
      <Input id={'1'} label={'Empty'} placeholder={'Enter the value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
          } }/>
      <h3>Success input</h3>
      <Input id={'1'} success={'success'} label={'Success'} placeholder={'Enter the value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
      } }/>
      <h3>Error input</h3>
      <Input id={'1'} errorMessage={'Wrong message'} error={'error'} label={'Error'} placeholder={'Enter the value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
      } }/>
       <h3>Disabled input</h3>
      <Input id={'1'} disabled={true} label={'Disabled'} placeholder={'Enter the value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
      } }/>
      <h3>Hover input</h3>
      <Input id={'1'} hoverStyle={'hoverStyle'} label={'Hover'} placeholder={'Enter the value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
      } }/>
      </div>
    </div>
  )
}

export default InputPage