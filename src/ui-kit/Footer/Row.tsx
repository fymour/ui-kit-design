import React from 'react'

interface RowProps{
  children: JSX.Element | JSX.Element[],
    
}
export const Row = ({children}:RowProps) => {
  return (
    <div className='footer-row'>
      {children}
    </div>
  )
}
