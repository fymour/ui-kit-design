import React from 'react'
import { FooterLink } from './FooterLink';


interface FooterGroupProps {
    title: string;
    children: JSX.Element | JSX.Element[],
}
export const FooterGroup = ({title, children}: FooterGroupProps) => {
  return (
    <ul className='footer-ul'>
        {title}
        {children}
    </ul>
  )
}
