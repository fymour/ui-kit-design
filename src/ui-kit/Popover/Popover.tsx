import React , { useState } from 'react'
import './Popover.css'

type AllProps = Condition & PopoverProps;

type Condition = {
    disabled?: boolean, 
}

type PopoverProps = {
    hoverStyle?: string,
}

export const Popover = ({
    hoverStyle,
    ...props
}: AllProps, ) => {

    const [showPopover, setShowPopover] = useState<boolean>(false)

    const handleShowPopover = () => {
        setShowPopover(!showPopover)
    }

    return (
        <div className='popover-menu'>
           <button onClick={handleShowPopover}>Open Popover <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8H10V0H8V8H0V10H8V18H10V10H18V8Z" fill="white"/>
</svg>
 </button>
           {showPopover && <div className='popover'>
            <p className='popover-title'>Popover Title</p>
            <p className='popover-description'>Graphical control element that hovers over its parent window and blocks any other interaction with until it is selected. It can contain various other graphical control element </p>
        </div>}
        </div>
    )
}