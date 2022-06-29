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
  marginBottom?: string;
  href?:string,
  textColor?:string
}

const Button = ({ children, border, borderRadius, backgroundColor, color, marginTop, marginRight, marginBottom,href,textColor}: ButtonProps) => {
  if(href){
    return  (
      <button
          style={{
              // ES6 syntax
              border: border,
              color,
              borderRadius,
              backgroundColor,
              marginTop,
              marginRight,
              marginBottom
          }}
          className='custom-button'
      >
          <a href={href} style={{textDecoration:"none",color:textColor}}>{children}</a>
      </button>
    )
  }
  return (
    <button
        style={{
            // ES6 syntax
            border: border,
            color,
            borderRadius,
            backgroundColor,
            marginTop,
            marginRight,
            marginBottom
        }}
        className='custom-button'
    >
        {children}
    </button>
  )
}

export default Button

// let the props you pass modify the style of the component