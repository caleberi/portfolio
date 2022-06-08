import React from 'react'
import './Button.css'

type ButtonProps = {
   border: string;
   color: string;
   children: string;
   borderRadius: string;
   backgroundColor: string;
    marginTop?: string;
    marginRight?: string;
}

const Button = ({ children, border, borderRadius, backgroundColor, color, marginTop, marginRight}: ButtonProps) => {
  return (
    <button
        style={{
            // ES6 syntax
            border: border,
            color,
            borderRadius,
            backgroundColor,
            marginTop,
            marginRight
        }}
        className='custom-button'
    >
        {children}
    </button>
  )
}

export default Button

// let the props you pass modify the style of the component