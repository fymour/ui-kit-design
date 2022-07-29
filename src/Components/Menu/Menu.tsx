import React, { useState } from 'react'
import './Menu.css'
import img from '../Assets/image/logo.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [showFirst, setShowFirst] = useState<boolean>(false)
  const [showSecond, setShowSecond] = useState<boolean>(false)
  const [showThird, setShowThird] = useState<boolean>(false)
  const [showFourth, setShowFourth] = useState<boolean>(false)
  const [showTypography, setShowTypography] = useState<boolean>(false)

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
  const handleShowTypography = () => {
    setShowTypography(!showTypography)
  }
  return (
    <div className='menu'>
      <div className='menu-all'>
      <div className='title-menu'>
        <Link to='/'> <img src={img} alt="" /> </Link>
        <p className='description-menu'>Дизайн стандарт для сайтов,
          порталов и информационных систем правоохранительных органов
        </p>
      </div>
      <div className='sidebar'>
      <div>
        <div className='section' onClick={handleShowFirst}><a href="#" className='active'>О Дизайн-системе</a>
        {!showFirst && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showFirst && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showFirst && <div className='show-menu'>
          <Link to='/about' className='active'><div className='show-menu-link'>Как начать работу с дизайн-системой</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowSecond}><a href="#" className='active'>Основы и стиль</a>
        {!showSecond && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showSecond && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showSecond && <div className='show-menu'>
          <Link to='/colors' className="active"><div className='show-menu-link'>Система цветов</div></Link>
          <Link to='/typography' onClick={handleShowTypography} className="active"><div className='show-menu-link'>Типографика</div></Link>
         {showTypography && <div className='typography-menu'>
            <a href="#typography-title">Заголовки</a>
            <a href="#typography-text">Наборный текст, подписи, подзаголовки</a>
            <a href="#typography-length">Длина строки</a>
            <a href="#">Иерархия</a>
            <a href="#">Адаптивность </a>
          </div>}
          <Link to='/gridsPadding' className="active"><div className='show-menu-link'>Модуль и сетка</div></Link>
          <Link to='/icons' className="active"><div className='show-menu-link'>Прочие токены</div></Link>
          <Link to='/levelsInterface' className="active"><div className='show-menu-link'>Уровни интерфейса</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowThird}><a href="#" className='active'>Компоненты</a>
        {!showThird && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showThird && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showThird && <div className='show-menu'>
          <Link to='/button' className='active'><div className='show-menu-link'>Button</div></Link>
          <Link to='/input' className='active'><div className='show-menu-link'>Input</div></Link>
          <Link to='/checkbox' className='active'><div className='show-menu-link'>Checkbox</div></Link>
          <Link to='/tabs' className='active'><div className='show-menu-link'>Tabs</div></Link>
          <Link to='/collapse' className='active'><div className='show-menu-link'>Collapse</div></Link>
          <Link to='/footer' className='active'><div className='show-menu-link'>Footer</div></Link>
          <Link to='/scrollarea' className='active'><div className='show-menu-link'>ScrollArea</div></Link>
          <Link to='/modal' className='active'><div className='show-menu-link'>Modal</div></Link>
          <Link to='/popover' className='active'><div className='show-menu-link'>Popover</div></Link>
        </div>}
      </div>
      <div>
        <div className='section' onClick={handleShowFourth}><a href="#" className='active'>История изменений</a>
        {!showFourth && <div><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        {showFourth && <div><svg className='icon-down' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46921 6.5339L0.997192 1.0609L2.05795 0.000312805L6.99961 4.9429L11.9412 0.000312805L13.0019 1.0609L7.52991 6.5339C7.38931 6.6746 7.19851 6.7537 6.99961 6.7537C6.80061 6.7537 6.60981 6.6746 6.46921 6.5339Z" fill="#101828"/>
        </svg></div>}
        </div>
        {showFourth && <div className='show-menu'>
          <div className='show-menu-link'>Изменения</div>
        </div>}
      </div>

      </div>
      <p className='version'>Версия 1.0</p>
      
      
      
      {/* <Link to="/"><div>Введение</div></Link>
      <Link to="/glossary"><div>Глоссарий</div></Link>
      <Link to="/button"><div>Button</div></Link>
      <Link to="/input"><div>Input</div></Link>
      <Link to="/tabs"><div>Tabs</div></Link>
      <Link to="/collapse"><div>Collapse</div></Link>
      <Link to="/footer"><div>Footer</div></Link>
      <Link to="/scrollArea"><div>ScrollArea</div></Link> */}
    </div>
    </div>
  )
}
