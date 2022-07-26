import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className='navbar'>
        <Link to="/">
        <div className='logo'>
          UI Design Kit
        </div>
        </Link>
      </div>
    </div>
  )
}
