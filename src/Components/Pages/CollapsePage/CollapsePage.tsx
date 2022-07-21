import React from 'react'
import { Collapse } from '../../../ui-kit/Collapse/Collapse'

const CollapsePage = () => {
  return (
    <div>
        <Collapse header={'Здесь находится текст с функцией заголовка'} children={'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. '}/>
    </div>
  )
}

export default CollapsePage