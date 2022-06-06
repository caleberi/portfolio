import React from 'react'
import './PortfolioRoutes.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const portfoliostyle = {
    height: '100%',
    backgroundColor: 'white',
    flex: 0.7,
    borderRadius: '20px'
}
const PortfolioRoutes = () => {
  return (
        <div style={portfoliostyle}>
            <p>Routes page</p>
        </div>
  )
}

export default PortfolioRoutes