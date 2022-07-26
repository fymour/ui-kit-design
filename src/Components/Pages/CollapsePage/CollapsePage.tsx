import React from 'react'
import { Collapse } from '../../../ui-kit/Collapse/Collapse'

const CollapsePage = () => {
  return (
    <div>
      <h1>Описание</h1>
      <p>Collapse — это компонент, который позволяет сохранять большие объемы контента на небольшом пространстве за счет скрытия текста. Пользователь понимает суть содержимого из заголовка.

        Collapse особенно хорошо работает в мобильных интерфейсах или там, где вертикальное пространство имеет большое значение.</p>
      <Collapse header={'Здесь находится текст с функцией заголовка'} children={'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. '} />
    </div>
  )
}

export default CollapsePage