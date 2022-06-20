import React from 'react'
import './ResumeExperience.css'

type ResumeExperienceProps = {
    year?: number;
    text?: string;
    school?: string;
    course?: string;

    startYear?: number;
    finishYear?: number;
    role?: string;
    company?: string;

    styles?: React.CSSProperties;
}

const ResumeExperience = ({year, text, school, course, finishYear, role, company,startYear, styles}: ResumeExperienceProps) => {
  return (
    <section className="resumeExperience" style={styles}>
        <div className="resumePointer">
            <div className="innerPointer"></div>
        </div>
        <section className="resumeExperience__left">
            {finishYear ? (<p className='education__leftYear'>{startYear} - {finishYear}</p>) : (<p className='education__leftYear'>{startYear} - current</p>)}
            <div className="education__leftSchool">
               <p>
                    {company}
               </p>
            </div>
        </section>
        <section className="resumeExperience__right">
            <p className="education__rightCourse">{role}</p>
            <div className="education__rightText">
                <p>
               {text}
                </p>
            </div>
        </section>
    </section>
  )
}

export default ResumeExperience