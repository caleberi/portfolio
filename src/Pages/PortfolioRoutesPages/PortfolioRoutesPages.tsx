import React from 'react'
import './PortfolioRoutesPages.css'

type PageRoutesProp = {
    children: React.ReactNode,
}

const PortfolioRoutesPages = ({ children } : PageRoutesProp) => {
  return (
    <div className="portfolioRoutesPages">
        {children}
    </div>
  )
}

export default PortfolioRoutesPages