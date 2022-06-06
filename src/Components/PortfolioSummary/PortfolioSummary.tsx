import React from 'react'
import './PortfolioSummary.css';
import image from '../../assets/portfolioAssets/user.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const style = {
    color: "white",
    fontSize: "1rem",
    cursor: "pointer"
}

const PortfolioSummary = () => {
  return (
    <div className='portfolio__summary'>
        <div>
            <img src={image} alt="user" />
        </div>
        
        <div className="portfolio__summaryDetails">
            <h2>Alex Smith</h2>
            <p>Web Designer</p>
            
            <div className="portfolio__summaryDetailIcon">
                <FaFacebookF style={style}/>
                <FaLinkedinIn style={style}/>
                <FaTwitter style={style}/>
            </div>

            <button className="portfolio__summaryCV">
                Download CV
            </button>
        </div>

        <div className="portfolio__summaryDetailsFooter">
            <small>2020 All rights reserved.</small>
        </div>

    </div>
  )
}

export default PortfolioSummary