import React from 'react'
import './PortfolioSummary.css';
import image from '../../assets/portfolioAssets/user.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Button from '../../MiniComponents/Button/Button';

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
            <h2>Adewole Caleb Erioluwa</h2>
            <p>Software Engineer</p>
            
            <div className="portfolio__summaryDetailIcon">
                <FaFacebookF style={style}/>
                <a href="https://www.linkedin.com/in/adewole-caleb/"><FaLinkedinIn style={style}/></a>
                <a href="https://twitter.com/soundboax"><FaTwitter style={style}/></a>
            </div>
        <Button 
            border='2px solid white'
            borderRadius='50px'
            children = 'View CV'
            color='white'
            backgroundColor='transparent'
            marginTop='50px'
            href='https://docs.google.com/document/d/1tN_KscJQdc24TMDMLSmHv7pv8RCqjwM2cp9qNXTyfWc/edit?usp=sharing'
            textColor='white'
        />
        </div>

        <div className="portfolio__summaryDetailsFooter">
            <small>2022 All rights reserved.</small>
        </div>

    </div>
  )
}

export default PortfolioSummary