import React from 'react'
import './Footer.scss'



type Device = "desktop" | "tablet" | "mobile"
type Size = "large" | "medium" |"small"
interface FooterProps {
    device?: Device;
    size?: Size;
    children: JSX.Element | JSX.Element[];
}
export const Footer = ({
    size = "medium", 
    device = "desktop",
    children
}: FooterProps) => {
  return ( 
    <div className={
      [ `footer--${device}--${size}`,`footer--${size}`, ].join(" ")}>
        {children}
    </div>
  )
}
