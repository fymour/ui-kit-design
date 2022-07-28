import React from 'react'
import './AboutSystem.css'
import pricing from '../../Assets/image/pricing.png'

export const AboutSystem = () => {
  return (
    <div>
      <div className='heading-title'>
        <h2>Как начать работу с дизайн-системой</h2>
      </div>

      <div className='semi-title'>
        <span>Просто следуйте инструкции:</span>
        <div className='semi-text'>Присоединитесь к команде</div>
        <p>Создайте команду в Figma и пригласите в нее всех дизайнеров, работающих над продуктом.</p>
        <p>Внутри командного пространства можно создавать общие файлы и папки. Редактировать и добавлять файлы в командный воркспейс могут только участники с Pro аккаунтами в Figma.</p>
      </div>
      <div>
          <img src={pricing} alt="" />
      </div>
      <div className='pro-title'>
        <span>Приобрести Pro аккаунт можно по ссылке.</span>
        <p>Вы также можете использовать дизайн-систему без команды, скопировав себе этот файл, но тогда вы не сможете автоматически получать свежие обновления.</p>
        <p>Вы также можете присоединиться к общей команде design.gov.kg. Для этого напишите нам.</p>
      </div>
    </div>
  )
}
