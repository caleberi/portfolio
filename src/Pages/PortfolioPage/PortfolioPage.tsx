import React, { useState } from 'react'
import PortfolioRoutes from '../../Components/PortfolioRoutes/PortfolioRoutes';
import PortfolioSummary from '../../Components/PortfolioSummary/PortfolioSummary';
import PortfolioResume from '../../Components/PortfolioResume/PortfolioResume';
import './PortfolioPage.css';


const PortfolioPage = () => {
    const [trackPage, setTrackPage] = useState(1)
    const pageLinks = [
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
            return <PortfolioRoutes />
        }else if(trackPage === 2){
            return <PortfolioResume />
        }
    }

  return (
    <div className="portfolio__page">
        <div className="portfolio__pageContainer">
            {/* portfolio summary */}
            <PortfolioSummary />
            
            {PageDisplay(pageLinks[1].id)}
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