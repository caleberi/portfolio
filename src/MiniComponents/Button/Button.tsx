import React from 'react'
import './Button.css'

type ButtonProps = {
    name: string
    style?: React.CSSProperties
}

const Button = ({name, style}: ButtonProps) => {
  return (
    <button style={style} >
        {name}
    </button>
  )
}

export default Button