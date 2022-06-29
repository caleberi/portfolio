import React, { useState } from 'react'
import './PortfolioAbout.css'
import User from '.././../assets/portfolioAssets/user.jpg'
import Button from '../../MiniComponents/Button/Button'
import {  BsPencil } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa';



type WhatProp = {
    id: number;
    header: string;
    text: string;
    image: any;
}

const PortfolioAbout = () => {
    const [whatList] = useState<WhatProp[]>([
        {
            id: 1,
            header: 'Backend',
            text: `Build scalable and functional system support for organisation 🎯`,
            image: <FaDesktop />
        },
        {
            id: 2,
            header: 'Technical Writing',
            text: `Write technical document for APIs🌮 `,
            image: <BsPencil/>
        },
    ])

  return (
    <div className="portfolioAbout">
        <div className="portfolioAbout__header">
            <div className='portfolioAbout__headerImage'>
                <img src={User} alt="user" />
            </div>

            <div className="portfolioAbout__text">
                <p className="portfolioAbout__textparagraph">Software Engineer</p>
                <h2 className="portfolioAbout__textheader">Adewole Caleb Erioluwa</h2>

                <div className="portfolioAbout__divText">
                    <p>
                        I am a Software Engineer based in Nigeria. I am passionate about building scalable and fast backend systems using JavaScript , Python , C/C++ , TypeScript , Golang and Java . I have worked for few tech companies and have created solutions that have helped increase productivity .
                    </p>
            </div>

                <div className="portfolioAbout__buttonContainer" style={{ marginTop: '50px' }}>
                    <Button 
                        border='2px solid #74787a'
                        borderRadius='50px'
                        children = 'View Resume'
                        color='black'
                        backgroundColor='white'
                        marginRight='10px'
                        marginBottom='15px'
                        href='https://docs.google.com/document/d/1VLdPpXZp3hn4m_Y2QmpfwqLEuWUsgP5fqHcQZ7bBTRA/edit?usp=sharing'
                        textColor='black'
                    />
                </div>
            </div>
        </div>

        {/* PORTFOLIO ABOUT WHAT */}
        <div className='portfolioAbout__what'>
            <h3 className="portfolioAbout__whatHeader">What <span style={{ color: '#d9004f' }}>I Do</span></h3>
            <div className="whatHeader__lists">
                {whatList.map(what => (
                    <div key={what.id} className='whatHeader__list'>
                        <h1>{what.image}</h1>
                        <h2>{what.header}</h2>
                        <p>{what.text}</p>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default PortfolioAbout;