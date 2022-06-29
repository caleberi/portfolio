import React, { useState } from 'react'
import PortfolioSummary from '../../Components/PortfolioSummary/PortfolioSummary';
import PortfolioResume from '../../Components/PortfolioResume/PortfolioResume';
import PortfolioRoutesPages from '../PortfolioRoutesPages/PortfolioRoutesPages';
import PortfolioProjects from '../../Components/PortfolioProjects/PortfolioProjects';
import PortfolioAbout from '../../Components/PortfolioAbout/PortfolioAbout';
import './PortfolioPage.css';
import PortfolioBlog from '../../Components/PortfolioBlog/PortfolioBlog';
import { AiOutlineUser } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { RiBriefcase2Line } from 'react-icons/ri'
import { MdOutlineArticle } from 'react-icons/md'


const PortfolioPage = () => {
    const [trackPage, setTrackPage] = useState(0)
    const pageLinks = [
        {
            id: 0,
            name: 'About',
            img: <AiOutlineUser />
        },
        {
            id: 1,
            name: 'Resume',
            img: <FaGraduationCap />
        },
        {
            id: 2,
            name: 'Portfolio',
            img: <RiBriefcase2Line />
        }, 
        {
            id: 3,
            name: 'Blog',
            img: <MdOutlineArticle />
        }
    ];

    const PageDisplay = (pageLinks: number) => {
        // 0 should be the first page
        // console.log(trackPage ,pageLinks);
        switch (trackPage){
            case 1:
                return <PortfolioResume />
            case 2:
                return <PortfolioProjects />
            case 3:
                return <PortfolioBlog />
            default:
                return <PortfolioAbout />
        }
    }

  return (
    <div className="portfolio__page">
        <div className="portfolio__pageContainer">
            <PortfolioSummary />
            <PortfolioRoutesPages>
                {PageDisplay(pageLinks[1].id)}
            </PortfolioRoutesPages>
        </div>
        <div className='portfolio__pageContainerLinks' >
            {pageLinks.map(pageLink => (
                <p 
                    className='portfolio__pageContainerLink'
                    key={pageLink.id} 
                    onClick={() => setTrackPage(pageLink.id)}
                >
                    <p>{pageLink.img}</p>
                </p>
            ))}         
        </div>
        {/* <a href=""></a> */}
    </div>
  )
}

export default PortfolioPage