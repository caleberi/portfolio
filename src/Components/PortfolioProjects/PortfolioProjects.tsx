import React, { useState } from 'react'
import './PortfolioProjects.css';
import Pic1 from '../../assets/portfolioAssets/1-1.jpg'
import Pic2 from '../../assets/portfolioAssets/natour.png'
import Pic3 from '../../assets/portfolioAssets/pm2.png'

type CardProp = {
  id: number;
  image: string;
  name: string;
  detail: string;
  link:string
}

const PortfolioProjects = () => {
  const [projects] = useState<CardProp[]>([
    {
      id: 1,
      image: Pic3,
      name: 'Process Monitor',
      detail: 'The process monitor showing you what’s happening on your computer: processes, id, CPU and memory usage, and much more.',
      link:"https://github.com/caleberi/process-monitor"
    },
    {
      id: 2,
      image: Pic1,
      name: 'Express-gallery-service',
      detail: 'A minimal dynamically rendered website using EJS ,Node,& Express for Artist and their works . The application gathers feedback about each individual artist on the site.  ',
      link:"https://dot-treasure-constellation.glitch.me/"
    },
    {
      id: 3,
      image:Pic2,
      name: 'Natour',
      detail: 'A tour booking application using Node JS , Redis, & other technologies',
      link:"https://github.com/caleberi/Natour"
    },
  ])

  return (
        <div className="portfolioProjects">
          <h2 className="portfolioProjects__header">Portfolio</h2>
          <div className="portfolioProjects__items">
            {projects.map(project => (
              <div className="portfolioProjects__item" key={project.id}>
                <div className="portfolioProjects__imgCover" style={{position: 'relative'}}>
                  <img src={project.image} alt={`project${project.id}`} />
                </div>
                <p>{project.name}</p>
                <p className='portfolioProjects__Paragraph'>{project.detail}</p>
                <a className="portfolioProjects__Link" href={project.link}>Click Here</a>
              </div>
            ))}
          </div>
        </div>
  )
}

export default PortfolioProjects