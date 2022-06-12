import React from 'react'
import './ButtonCarousel.css';

type ButtonProps = {
  children: React.ReactChild,
  handleClick: () => void,
}


const ButtonCarousel = ({children, handleClick,}: ButtonProps) => {

  
  return (
    <button onClick={handleClick} className="buttonCarousel">
      {children}
    </button>
  )
}

export default ButtonCarousel