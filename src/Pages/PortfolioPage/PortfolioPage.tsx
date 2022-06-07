import React, { useState } from 'react'
import PortfolioSummary from '../../Components/PortfolioSummary/PortfolioSummary';
import PortfolioResume from '../../Components/PortfolioResume/PortfolioResume';
import PortfolioRoutesPages from '../PortfolioRoutesPages/PortfolioRoutesPages';
import PortfolioProjects from '../../Components/PortfolioProjects/PortfolioProjects';
import PortfolioAbout from '../../Components/PortfolioAbout/PortfolioAbout';
import './PortfolioPage.css';


const PortfolioPage = () => {
    const [trackPage, setTrackPage] = useState(0)
    const pageLinks = [
        {
            id: 0,
            name: 'About'
        },
        {
            id: 1,
            name: 'Resume',
        },
        {
            id: 2,
            name: 'Portfolio',
        }
    ];

    const PageDisplay = (pageLinks: number) => {
        // 0 should be the first page
        console.log(trackPage ,pageLinks);
        if(trackPage === 1){
            return <PortfolioResume />
        }else if(trackPage === 2){
            return <PortfolioProjects />
        }else{
            return <PortfolioAbout />
        }
    }

  return (
    <div className="portfolio__page">
        <div className="portfolio__pageContainer">
            {/* portfolio summary */}
            <PortfolioSummary />
            
            <PortfolioRoutesPages>
                {PageDisplay(pageLinks[1].id)}
            </PortfolioRoutesPages>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pageLinks.map(pageLink => (
                <p 
                    style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue'}}
                    key={pageLink.id} 
                    onClick={() => setTrackPage(pageLink.id)}
                >
                    {pageLink.name}
                </p>
            ))}         
        </div>
    </div>
  )
}

export default PortfolioPage