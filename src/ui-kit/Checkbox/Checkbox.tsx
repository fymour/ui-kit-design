import React from 'react'
import classNames from 'classnames';
import './Checkbox.scss'

interface CheckboxProps {
    className?:string
    id: string 
    label?:string
    isChecked: boolean
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
    className, 
    id, 
    label, 
    isChecked, 
    onChange}) =>{
    return(
        <label
        className={classNames('Checkbox',className,{
            Checkbox_active: isChecked,
        })}
        htmlFor={id}
        >
            <span
            className='checkbox-inner'>
                <input className='checkbox-icon' type="checkbox"
                checked={isChecked}
                id={id}
                name={label}
                value={label}
                onChange={onChange}
                 />
            </span>
        </label>
    )
}