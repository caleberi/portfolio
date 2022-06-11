import React, { ReducerAction, useState } from 'react'
import './PortfolioAbout.css'
import User from '.././../assets/portfolioAssets/user.jpg'
import Button from '../../MiniComponents/Button/Button'
import { BsShop, BsPencil, BsFlag } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa';
import Testimonial1 from '../../assets/portfolioAssets/testimonial-1.jpg'
import Testimonial2 from '../../assets/portfolioAssets/testimonial-2.jpg'
import { FaQuoteRight } from 'react-icons/fa'
import Client1 from '../../assets/portfolioAssets/client-1.png';
import Client2 from '../../assets/portfolioAssets/client-2.png';
import Client3 from '../../assets/portfolioAssets/client-3.png'
import Client4 from '../../assets/portfolioAssets/client-4.png'
import Client5 from '../../assets/portfolioAssets/client-5.png'
import Client6 from '../../assets/portfolioAssets/client-6.png'
import Client7 from '../../assets/portfolioAssets/client-7.png'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { BsAlarm } from 'react-icons/bs'


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

type ClientImageProp = {
    id: number;
    image: any;
}

type PricingProp = {
    id: number;
    package: string;
    price: number;
}

type FunProp = {
    id: number;
    icon?: any;
    text: string;
    count: number;
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
            name: 'Kristin Caroll',
            company: 'Helping Hands',
            image: Testimonial1
        }, 
        {
            id: 4,
            text: 'Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.',
            name: 'Robert Watskin',
            company: 'Endicott Shoes',
            image: Testimonial2
        },
        
    ])

    const [clientLists] = useState<ClientImageProp[]>([
        {
            id: 1,
            image: Client1
        },
        {
            id: 2,
            image: Client2,
        },
        {
            id: 3,
            image: Client3
        }, 
        {
            id: 4,
            image: Client4
        }, 
        {
            id: 5,
            image: Client5
        }, 
        {
            id: 6,
            image: Client6
        },
        {
            id: 7,
            image: Client7
        }
    ])
    
    const [pricingLists] = useState<PricingProp[]>([
        {
            id: 1,
            package: 'Silver',
            price: 64,
        }, 
        {
            id: 2,
            package: 'Gold',
            price: 128,
        }
    ])

    const [funs] = useState<FunProp[]>([
        {
            id: 1,
            text: 'Happy Clients', 
            count: 578,
            icon: <AiOutlineHeart />
        },
        {
            id: 2,
            text: 'Working Hours',
            count: 4780,
            icon: <BsAlarm />
        },
        {
            id: 3, 
            text: 'Awards Won',
            count: 15,
            icon: <AiOutlineStar />
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
                    <div className="portfolioAbout__testimonialCard" key={testimonial.id}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p className="portfolioAbout__testimonialCardText">{testimonial.text}</p>

                        <p className="portfolioAbout__testimonialCardBold">{testimonial.name}</p>
                        <p style={{ color: '#0AAED9', fontSize: '13px' }}>{testimonial.company}</p>

                        <FaQuoteRight style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#0AAED9', }}/>
                    </div>
                ))}
            </div>
            
        </div>

        {/* PORTFOLIO CLIENTS */}
        <div className="portfolioAbout__client">
            <div className="portfolioAbout__clientHeader">
                <h1>Clients</h1>
                <div className="portfolioAbout__clientHeaderButtons">
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>

            <div className="portfolioAbout__clients">
                {
                    clientLists.map(client => (
                        <img src={client.image} alt={`picture${client.id}`} />
                    ))
                }
            </div>
        </div>

        {/* PORTFOLIO PRICING */}
        <div className="portfolio__pricing">
            <h4>Pricing</h4>

            <div className="portfolio__pricingContainer">
                {pricingLists.map(priceList => (
                    <div className="portfolio__pricingItem">
                        <p className='portfolio__pricingPackage'>{priceList.package}</p>

                        <div className='portfolio__priceDetail'>
                            <p className='portfolio__pricingPrice'>${priceList.price}</p>
                            <small className='portfolio__pricingSmall'>per month</small>
                        </div>
                            
                        <Button 
                            border='2px solid lightgray'
                            borderRadius='50px'
                            children = 'Free Trial'
                            color='black'
                            backgroundColor='transparent'
                        />
                        <div className='portfolio__pricingText'>
                            <p>Lorem ipsum dolor</p>
                            <p>Pellentesque scelerisque</p>
                            <p>Morbi eu sagittis</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* PORTFOLIO FUN FACTS */}
        <div className="portfolio__fun">
            <h2>Fun Facts</h2>

            <div className="portfolio__funItems">
                {funs.map(fun => (
                    <div className="portfolio__funItem">
                        <p style={{fontSize: '33px', color: '#04B4E0'}}>{fun.icon}</p>
                        <p>{fun.text}</p>
                        <p>{fun.count}</p>
                        {/* <p>{fun.text}</p> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PortfolioAbout;