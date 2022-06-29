import React from 'react'
import './ResumeEducation.css'

type ResumeEducationProps = {
    year: number;
    text: string;
    school: string;
    course: string;
    styles?: React.CSSProperties;
}

const ResumeEducation = ({year, text, school, course, styles}: ResumeEducationProps) => {
  return (
    <section className="resumeEducation" style={styles}>
        <div className="resumePointer">
            <div className="innerPointer"></div>
        </div>
        <section className="resumeEducation__left">
            <p className="education__leftYear">{year}</p>
            <div className="education__leftSchool">
                <p>{school}</p>
            </div>
        </section>
        <section className="resumeEducation__right">
            <p className="education__rightCourse">{course}</p>
            <div className="education__rightText">
                <p>
               {text}
                </p>
            </div>
        </section>
    </section>
  )
}

export default ResumeEducation