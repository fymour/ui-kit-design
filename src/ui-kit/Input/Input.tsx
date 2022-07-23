import React, { FC } from 'react';
import './input.css';


type AllProps = Condition & InputProps;


type Condition = {
    disabled?: boolean, 
}

type InputProps = {
    id: string,
    label: string,
    value?: string,
    placeholder: string,
    success?: string,
    error?: string,
    errorMessage?: string,
    hoverStyle?: string,
    
    onChange: (str: string) => void,
    size?: 'large' | 'medium' | 'small';
}


export const Input = ({
    id,
    label = '',
    placeholder = '',
    disabled = false,
    hoverStyle,
    success,
    onChange,
    value,
    error,
    errorMessage,
    size = 'medium',
    ...props
}: AllProps, ) => {
    
    return (
        <>
            <label className='input--label'>
                {label}
            </label>
            <input
                id={id}
                className={[`input--${size}`, `input--${error}`, `input--${success}`, `input--${hoverStyle}`].join(' ') }
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                value={value}
                placeholder={placeholder}
                {...props}
            />
            <p className='input--message'>{errorMessage}</p>

        </>
    )
}

export default Input