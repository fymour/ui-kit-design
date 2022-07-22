import React from 'react'
import './Footer.scss'

interface RowProps{
  children: JSX.Element | JSX.Element[],
  className: string;
}
export const Row = ({className, children}:RowProps) => {
  return (
    <div className={[`${className}`, 'footer-row'].join(' ')}>
      {children}
    </div>
  )
}
