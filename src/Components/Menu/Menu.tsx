import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
  return (
    <div className='menu'>
        <Link to="/introduction"><div>Введение</div></Link>
        <Link to="/button"><div>Button</div></Link>
        <Link to="/input"><div>Input</div></Link>
        <Link to="/tabs"><div>Tabs</div></Link>
        <Link to="/collapse"><div>Collapse</div></Link>
        <Link to="/dropdownMenu"><div>DropdownMenu</div></Link>
        <Link to="/scrollArea"><div>ScrollArea</div></Link>
    </div>
  )
}
