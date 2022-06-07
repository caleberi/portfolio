import React from 'react'
import './PortfolioAbout.css'
import User from '.././../assets/portfolioAssets/user.jpg'
import Button from '../../MiniComponents/Button/Button'

const PortfolioAbout = () => {
  return (
    <div className="portfolioAbout">
        <div className="portfolioAbout__header">
            <div className='portfolioAbout__headerImage'>
                <img src={User} alt="user" />
            </div>

            <div className="portfolioAbout__text">
                <p className="portfolioAbout__textparagraph">Web Designer</p>
                <h2 className="portfolioAbout__textheader">Alex Smith</h2>

                <div className="portfolioAbout__divText">
                    <p>I am a Full-Stack Web Developer & Web Designer based in The USA, but working Worldwide. I am passionate about designing and developing user-friendly websites. I have all the skills to create a new high quality website or improve existing websites for individuals and organisations, using the latest techniques and trends.</p>
                </div>

                <div style={{ marginTop: '50px' }}>
                    <Button name="Download CV" style={{ border: '2px solid #04B4E0', color: 'black', marginRight: '10px',  }}/>
                    <Button name='Contact' style={{ border: '2px solid #04B4E0', color: 'black' }} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioAbout;