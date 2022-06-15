import React, { useState } from 'react'
import './PortfolioProjects.css';
import Pic1 from '../../assets/portfolioAssets/1-1.jpg'
import Pic2 from '../../assets/portfolioAssets/2-1.jpg'
import Pic3 from '../../assets/portfolioAssets/3-1.jpg'
import Pic4 from '../../assets/portfolioAssets/4-1.jpg'
import Pic5 from '../../assets/portfolioAssets/5-1.jpg'
import Pic6 from '../../assets/portfolioAssets/6-1.jpg'

type CardProp = {
  id: number;
  image: string;
  name: string;
  detail: string;
}

const PortfolioProjects = () => {
  const [projects] = useState<CardProp[]>([
    {
      id: 1,
      image: Pic1,
      name: 'SoundCloud Audio',
      detail: 'Audio SoundCloud'
    },
    {
      id: 2,
      image: Pic2,
      name: 'Detailed Project 2',
      detail: 'Project 2'
    },
    {
      id: 3,
      image: Pic3,
      name: 'Vimeo Video',
      detail: 'Vimeo Video 1'
    },
    {
      id: 1,
      image: Pic4,
      name: 'Detailed Project 1',
      detail: 'Project 1'
    },
    {
      id: 1,
      image: Pic5,
      name: 'Mockup Design 1',
      detail: 'Mockups'
    },
    {
      id: 1,
      image: Pic1,
      name: 'SoundCloud Audio',
      detail: 'Audio SoundCloud'
    },
  ])
  return (
        <div className="portfolioProjects">
          <h2 className="portfolioProjects__header">Portfolio</h2>


          <div className="portfolioProjects__items">
            {projects.map(project => (
              <div className="portfolioProjects__item" key={project.id}>
                {/* <div className="portfolioProjects__overlay"> */}
                  <img src={project.image} alt={`project${project.id}`} />
                {/* </div> */}
                <p>{project.name}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default PortfolioProjects