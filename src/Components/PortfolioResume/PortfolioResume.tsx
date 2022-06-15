import React, { useState } from 'react'
import ResumeCertificates from '../../MiniComponents/ResumeCertificates/ResumeCertificates'
import ResumeKnowledgeButton from '../../MiniComponents/ResumeKnowledgeButton/ResumeKnowledgeButton'
import ResumeProgressBar from '../../MiniComponents/ResumeProgressBar/ResumeProgressBar'
import './PortfolioResume.css'
import Client2 from '../../assets/portfolioAssets/client-2.png';
import Client6 from '../../assets/portfolioAssets/client-6.png';

const PortfolioResume = () => {

  const [certificates] = useState([
    {
      id: 1, 
      image: Client2,
      title: 'Psychology of intertnation Design',
      membershipId: 3432,
      date: '19 April 2022'
    },
    {
      id: 2, 
      image: Client6,
      title: 'Psychology of intertnation Design',
      membershipId: 3555,
      date: '19 April 2022'
    }
  ])

  const [knowledges] = useState([
    {
      id: 1,
      name: 'Marketing',
    },
    {
      id: 2,
      name: 'Print'
    },
    {
      id: 3,
      name: 'Digital Design',
    },
    {
      id: 4,
      name: 'Social Media'
    }, 
    {
      id: 5,
      name: 'Time Management'
    }, 
    {
      id: 6,
      name: 'Communications'
    }, 
    {
      id: 7,
      name: 'Problem Solving'
    },
    {
      id: 8,
      name: 'Social Networking'
    }, 
    {
      id: 9,
      name: 'Flexibility'
    }
  ])

  return (
    <div className="resume">
      <h2>Portfolio Resume</h2>
   
      <div className="resume__grid">
        <div className="resume__gridLeft">
          {/* EDUCATION */}
          <div className="resume__gridLeftEducation">
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>
            <h3>Education</h3>

          </div>
        </div>
        
        <div className="resume__gridRight">
          <h3>Design Skills</h3>
          <ResumeProgressBar 
            backgroundColor="#04B4E0"
            name='Web Design'
            percent={90}
            border='1px solid blue'
          />

          <ResumeProgressBar 
            backgroundColor="#04B4E0"
            name='Print Design'
            percent={65}
            border='1px solid blue'
          />

          <ResumeProgressBar 
            backgroundColor="#04B4E0"
            name='Logo Design'
            percent={80}
            border='1px solid blue'
          />

          <ResumeProgressBar 
            backgroundColor="#04B4E0"
            name='Graphic Design'
            percent={90}
            border='1px solid blue'
          />

          <h3>Coding Skills</h3>   
          <ResumeProgressBar 
            backgroundColor="#0BA376"
            name='Javascript'
            percent={95}
            border='1px solid #0BA376'
          />

          <ResumeProgressBar 
            backgroundColor="#0BA376"
            name='PHP'
            percent={85}
            border='1px solid #0BA376'
          />

          <ResumeProgressBar 
            backgroundColor="#0BA376"
            name='HTML/CSS'
            percent={100}
            border='1px solid #0BA376'
          />

          <ResumeProgressBar 
            backgroundColor="#0BA376"
            name='Smarty/Twig'
            percent={75}
            border='1px solid #0BA376'
          />

          <ResumeProgressBar 
            backgroundColor="#0BA376"
            name='Perl'
            percent={90}
            border='1px solid #0BA376'
          />      


          <div className="resume__knowledge">
            <h3 className="resume__knowledgeHeader">Knowledges</h3>

            <div className="resume__knowledgeButtonContainer">
              {knowledges.map((knowledge) => (
                <ResumeKnowledgeButton styles={{ border: 'none',background: '#04B4E0', color: '#fff', padding: '10px', margin: '3px 2px', borderRadius: '5px', cursor: 'pointer' }} id={knowledge.id}  name={knowledge.name} />
              ))}
            </div>
          </div> 

        </div>
      </div>

{/* CERTIFICATE CONTAINER */}
      <div className="resume__certificatesContainer">
        <h3 className="resume__certificatesHeader">Certificates</h3>

        <div className="resume__certificatesItems">
          {certificates.map((certificate) => (
            <div className="resume__certificatesItem">

              <div className="resume__contentImage">
                <img src={certificate.image} alt={`certificate${certificate.id}`} />
              </div>
              <div className="resume__content">
                <p>{certificate.title}</p>
                <p>Membership ID: {certificate.membershipId}</p>
                <p>{certificate.date}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioResume