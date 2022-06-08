import React, { useState } from 'react'
import './PortfolioAbout.css'
import User from '.././../assets/portfolioAssets/user.jpg'
import Button from '../../MiniComponents/Button/Button'
import { BsShop, BsPencil, BsFlag } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa';
import Testimonial1 from '../../assets/portfolioAssets/testimonial-1.jpg'
import Testimonial2 from '../../assets/portfolioAssets/testimonial-2.jpg'

type WhatProp = {
    id: number;
    header: string;
    text: string;
    image: any;
}

type TestimonialProp = {
    id: number;
    text: string;
    name: string;
    company: string;
    image: any;
}


const PortfolioAbout = () => {
    const [whatList] = useState<WhatProp[]>([
        {
            id: 1,
            header: 'Ecommerce',
            text: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.',
            image: <BsShop />
        },
        {
            id: 2,
            header: 'CopyWriting',
            text: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.',
            image: <BsPencil/>
        },
        {
            id: 3,
            header: 'Web Design',
            text: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.',
            image: <FaDesktop />
        },
        {
            id: 4,
            header: 'Management',
            text: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.',
            image: <BsFlag />
        }
    ])

    const [testimonialList] = useState<TestimonialProp[]>([
        {
            id: 1,
            text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
            name: 'Julia Hickman',
            company: 'Omni Source',
            image: Testimonial1
        },
        {
            id: 2,
            text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
            name: 'Robert Watskin',
            company: 'Endicott Shoes',
            image: Testimonial2
        },
        {
            id: 3,
            text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
            name: 'Julia Hickman',
            company: 'Omni Source',
            image: Testimonial1
        }
    ])

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
                    <Button 
                        border='2px solid #04B4E0'
                        borderRadius='50px'
                        children = 'Download CV'
                        color='black'
                        backgroundColor='white'
                        marginRight='10px'
                    />

                    <Button 
                        border='2px solid gray'
                        borderRadius='50px'
                        children = 'Contact'
                        color='black'
                        backgroundColor='transparent'
                    />
                </div>
            </div>
        </div>

        {/* PORTFOLIO ABOUT WHAT */}
        <div className='portfolioAbout__what'>
            <h3 className="portfolioAbout__whatHeader">What <span style={{ color: '#0AAED9' }}>I Do</span></h3>
            <div className="whatHeader__lists">
                {whatList.map(what => (
                    <div key={what.id} className='whatHeader__list'>
                        {/* <img src={what.image} alt={what.header} /> */}
                        <h1>{what.image}</h1>
                        <h2>{what.header}</h2>
                        <p>{what.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* PORTFOLIO TESTIMONIAL */}
        <div className="portfolioAbout__testimonial">
            <div className="portfolioAbout__testimonialHeader">
                <h3>Testimonial</h3>

                <div className="portfolioAbout__testimonialButtons">
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>
            
            {/* testimonial cards */}
            <div className="portfolioAbout__testimonialCards">
                {testimonialList.map(testimonial => (
                    <div className="portfolioAbout__testimonialCard">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p>{testimonial.text}</p>

                        <b>{testimonial.name}</b>
                        <p style={{ color: '#0AAED9' }}>{testimonial.company}</p>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default PortfolioAbout;