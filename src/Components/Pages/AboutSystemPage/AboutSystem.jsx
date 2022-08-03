import React from 'react'
import './AboutSystem.css'
import pricing from '../../Assets/image/pricing.png'
import library from '../../Assets/image/library.png'
import plugin from '../../Assets/image/plugin.png'
import general from '../../Assets/image/general.png'
import cat from '../../Assets/image/cat.png'


export const AboutSystem = () => {
  return (
    <div>
      <div className='heading-title'>
        <h2>Как начать работу с дизайн-системой</h2>
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
      {/* <div className='pages-description'>
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
        <div className='lib-title'>
          <span>Опубликуйте библиотеку</span>
          <p>Чтобы пользоваться библиотекой, опубликуйте ее в своей команде. Для этого используйте функцию «Publish Styles and Components».</p>
          <p>В бесплатном аккаунте Figma вы можете публиковать только стили, но не сами компоненты. Поэтому рекомендуем приобрести Pro аккаунт или присоединиться к нашей команде.</p>
        </div>
        <div>
          <img src={library} alt="" />
        </div>
        <div className='link-title'>
          <span>Подключите ui_kit_design_kg</span>
          <p>В проекте продукта подключите основную библиотеку (ui_kit_design_kg) через панель Libraries.</p>
        </div>
        <div className='image-title'>
          <img classname='plugin' src={plugin} alt="" />
          <img className='general' src={general} alt="" />
        </div>
      </div> */}
    </div>
  )
}
