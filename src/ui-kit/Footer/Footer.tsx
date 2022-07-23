import React from 'react'
import { FooterGroup } from './FooterGroup'
import { FooterLink } from './FooterLink'
import './Footer.scss'



// type Device = "desktop" | "tablet" | "mobile"
type Size = "large" | "medium" |"small"
interface FooterProps {
    // device?: Device;
    size?: Size;
    children: JSX.Element | JSX.Element[];
}
export const Footer = ({
    size = "medium", 
    children
}: FooterProps) => {
  return ( 
    <div className={[`footer` ].join(" ")}>
        {children}
    </div>
  )
}
