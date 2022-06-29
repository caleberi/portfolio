import React, { useState } from 'react'
import './PortfolioResume.css'
import Client2 from '../../assets/portfolioAssets/certificate-1.png';
import ResumeEducation from '../../MiniComponents/ResumeEducation/ResumeEducation'
import ResumeExperience from '../../MiniComponents/ResumeExperience/ResumeExperience'

const PortfolioResume = () => {

  const [certificates] = useState([
    {
      id: 1, 
      image: Client2,
      title: 'Udacity Nanodegree Program Graduate',
      membershipId: "AVDZL3KY",
      date: '28 June 2022'
    }
  ])

  const [experiences] = useState([
    {
      id: 3, 
      role: 'Cloud DevOps Nanodegree',
      text: `
      ● Deployed a static website using AWS S3 Bucket for storing file content and AWS CloudFront for caching contents on edge location to improve latency to a lower rate by improving proximity to nearer users in specific regions.\n
      ● Designed and deployed a web application using AWS Cloudformation , AWS S3 Bucket .
      ● Built and automated a CI/CD pipeline using Ansible Playbook, CircleCi and AWS
      ● Operationalized a microservice by deploying a machine learning inference API using docker and kubernetes.
      ● Deployed a static website using AWS S3 Bucket for storing file content and AWS CloudFront for caching contents on edge location to improve latency to a lower rate by improving proximity to nearer users in specific regions. ● Designed and deployed a web application using AWS Cloudformation , AWS S3 Bucket . ● Built and automated a CI/CD pipeline using Ansible Playbook, CircleCi and AWS ● Operationalized a microservice by deploying a machine learning inference API using docker and kubernetes.
      
      - Skills: DevOps · Cloud Computing · AWS Command Line Interface (CLI) · Amazon EC2 · Amazon VPC · Amazon Web Services (AWS) · AWS Identity and Access Management (AWS IAM) · AWS CloudFormation · Amazon S3 · Aws CloudFront`,
      company: 'ALX_AFRICA',
      startYear: 2022,
      // if no finishYear => display current
    },
    {
      id: 2, 
      role: 'Software Engineer Intern',
      text:`
      Nomba (formerly Kudi), makes it easy for merchants/small businesses to digitally collect and process payments.
      Responsibilities:

      ● Implemented data storage for vendor services to ensure data persistence using Javascript.
      ● Engaged in code base maintenance in languages such as Java , JavaScript , Python.
      ● Uploaded POS terminal id with Java to process over 1k transactions.
      ● Engaged in bank related document processing to prevent loss of funds.
      ● Implementing scripts to allow fast processing of funds during fraud checks.
      ● Maintenance of fraud checking and payment services.Nomba (formerly Kudi), makes it easy for merchants/small businesses to digitally collect and process payments. Responsibilities: ● Implemented data storage for vendor services to ensure data persistence using Javascript. ● Engaged in code base maintenance in languages such as Java , JavaScript , Python. ● Uploaded POS terminal id with Java to process over 1k transactions. ● Engaged in bank related document processing to prevent loss of funds. ● Implementing scripts to allow fast processing of funds during fraud checks. ● Maintenance of fraud checking and payment services.
      
      - Skills: Object-Oriented Programming (OOP) · Spring Boot · Redis · Microservices · Systems Design · JavaScript · Python (Programming Language) · Java
      `,
      company: 'Nomba',
      startYear: 2022,
      // finishYear: 2016
    },
    {
      id: 1, 
      role: 'Software Engineer Intern',
      text: `
      KUDI is a financial service provider focused on providing access to electronic banking and financial services by leveraging conversational interfaces, natural language processing and artificial intelligence to provider faster access, frictionless experience, and ultimately boost financial inclusion in emerging markets. 

      Responsibilities: 
      ● Designed and Implemented a transactional feature for crediting and debiting funds using Java & Spring boot thereby eliminating the previously used company method of processing funds and improving agent satisfaction by 80% .
      
      ● Implemented a message resolution feature to help better inform users about transactions made . Thereby reducing consumer message issues by increasing message clarity by 70%.
      
      ● Fixed and maintained code base in Python , JavaScript , Java .
      
      ● Created jobs for slack notification .
           
      - Skills: Object-Oriented Programming (OOP) · Spring Boot · Redis · Systems Design · JavaScript · Python (Programming Language) · Java`,
      company: 'Kudi',
      startYear: 2021,
      finishYear: 2021
    },
  ])

  return (
    <div className="resume">
      <h2>Portfolio Resume</h2>
   
      <div className="resume__grid">
        <div className="resume__gridLeft">
          {/* EDUCATION */}
          <div className="resume__gridLeftEducation">
            <h3>Education</h3>
            <ResumeEducation 
              text='
              ● Activities and societies: Microsoft Student Community, Google Developer Student ClubActivities and societies: Microsoft Student Community, Google Developer Student Club
              ● Relevant Coursework: Data Structures and Analysis of Algorithms, Artificial Intelligence, Object-Oriented Programming, Introduction to Digital Systems, Computer Programming, Operating Systems Principles, Principles of Compilers.'
              year={2016}
              course='Computer Science And Engineering'
              school='Obafemi Awolowo University'
              styles={{paddingBottom: '10px'}}
            />
             <ResumeEducation 
              text='Udacity, Inc. is an American for-profit educational organization founded by Sebastian Thrun, David Stavens, and Mike Sokolsky offering massive open online courses'
              year={2022}
              course='Cloud Devops'
              school='Udacity Nanodegree'
              styles={{paddingTop: '5px'}}
            />
        
            <div className="resume__experience">
              <h3>Experience</h3>
              
              <div className="resume__experiences">
                {experiences.map((experience) => (
                  <ResumeExperience  
                    startYear={experience.startYear} 
                    finishYear={experience.finishYear}
                    role={experience.role}
                    company={experience.company}
                    text={experience.text}
                  />
                ))}
              </div>
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