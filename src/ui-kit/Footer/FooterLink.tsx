import React from 'react'

interface FooterLinkProps {
    href:string;
    children: JSX.Element | JSX.Element[] | React.ReactNode;
}
export const FooterLink = (
    {
        href,
        children,

    }:FooterLinkProps) => {
  return (
    <li className='footer-li'>
        <a href={href}>
            {children}
        </a>
    </li>
  )
}
