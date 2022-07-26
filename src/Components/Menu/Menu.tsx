import React, { useState } from 'react'
import './Menu.css'
import img from '../Assets/image/logo.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [showFirst, setShowFirst] = useState<boolean>(false)
  const [showSecond, setShowSecond] = useState<boolean>(false)
  const [showThird, setShowThird] = useState<boolean>(false)
  const [showFourth, setShowFourth] = useState<boolean>(false)

  const handleShowFirst = () => {
    setShowFirst(!showFirst)
  }
  const handleShowSecond = () => {
    setShowSecond(!showSecond)
  }
  const handleShowThird = () => {
    setShowThird(!showThird)
  }
  const handleShowFourth = () => {
    setShowFourth(!showFourth)
  }
  return (
    <div className='menu'>
      <div className='title-menu'>
        <Link to='/'> <img src={img} alt="" /> </Link>
        <p className='description-menu'>Дизайн стандарт для сайтов,
          порталов и информационных систем правоохранительных органов
        </p>
        <p className='version'>Версия 1.0</p>
      </div>
      <div>
        <div className='section' onClick={handleShowFirst}>О Дизайн-системе
        {!showFirst && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showFirst && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showFirst && <div className='show-menu'>
          <Link to='/structure'><div>Структура</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowSecond}>Основы и стиль
        {!showSecond && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showSecond && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showSecond && <div className='show-menu'>
          <Link to='/colors'><div>Цвета</div></Link>
          <Link to='/typography'><div>Типографика</div></Link>
          <Link to='/gridsPadding'><div>Сетка и отступы</div></Link>
          <Link to='/icons'><div>Иконки</div></Link>
          <Link to='/levelsInterface'><div>Уровни интерфейса</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowThird}>Компоненты
        {!showThird && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showThird && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showThird && <div className='show-menu'>
          <Link to='/button'><div>Button</div></Link>
          <Link to='/input'><div>Input</div></Link>
          <Link to='/tabs'><div>Tabs</div></Link>
          <Link to='/collapse'><div>Collapse</div></Link>
          <Link to='/footer'><div>Footer</div></Link>
          <Link to='/scrollarea'><div>ScrollArea</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowFourth}>История изменений
        {!showFourth && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showFourth && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showFourth && <div className='show-menu'>
          <div>Изменения</div>
        </div>}
      </div>
      {/* <Link to="/"><div>Введение</div></Link>
      <Link to="/glossary"><div>Глоссарий</div></Link>
      <Link to="/button"><div>Button</div></Link>
      <Link to="/input"><div>Input</div></Link>
      <Link to="/tabs"><div>Tabs</div></Link>
      <Link to="/collapse"><div>Collapse</div></Link>
      <Link to="/footer"><div>Footer</div></Link>
      <Link to="/scrollArea"><div>ScrollArea</div></Link> */}
    </div>
  )
}
