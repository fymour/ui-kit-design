import React from 'react'
import classNames from 'classnames';
import {Icon} from '../../ui-kit'
import './Checkbox.scss'

interface CheckboxProps {
    // className?:string
    variant?: 'deselected' | 'selected' | 'mixed'
    size?: 'small' | 'medium' | 'large';
    id: string 
    hover?: boolean
    hoverStyle: string
    active?: boolean
    activeStyle: string
    label?:string
    isChecked: boolean
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
    // className, 
    variant = 'deselected',
    size = 'small',
    id, 
    hover =false,
    hoverStyle,
    active = true,
    activeStyle,
    label, 
    isChecked, 
    onChange}) =>{
        
        if(hover){
            var hoverStyle = 'hover'
        }
        if(active){
            var activeStyle = 'active'
        }

    return(
        <label
        className={classNames('Checkbox',{
            Checkbox_active: isChecked,
        })}
        htmlFor={id}
        >
            <input className={
                [`checkbox`,
                `checkbox--${size}`,
                `checkbox--${variant}`,
                `checkbox--${hoverStyle}-${variant}`,
                `checkbox--${activeStyle}-${variant}`
             ].join(' ')
            } type="checkbox"
            checked={isChecked}
            id={id}
            name={label}
            value={label}
            onChange={onChange}
             />
            <span
            className='checkbox-span'>
                <Icon className='checkbox-icon' type={'Checkbox'} />
            </span>
        </label>
    )
}
