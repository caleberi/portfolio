import React from 'react'
import './ResumeProgressBar.css'

type ProgressBarProp = {
    width?: string;
    backgroundColor: string;
    name: string; // progress bar name
    percent: number;
    border: string;
}

const ResumeProgressBar = ({ width, backgroundColor, name, percent, border }: ProgressBarProp) => {
  return (
    <div className="progress__container">
        <div className="progress__header">
            <p>{name}</p>
            <p>{percent}%</p>
        </div>
        <div className="resumeProgressBar" style={{
            border: border
        }}>
            <div className="resumeProgressBarInner" 
                style={{
                    width: `${percent}%`, 
                    backgroundColor,
                }}
            >
                {/* width is here... */}
            </div>
        </div>
    </div>
  )
}

export default ResumeProgressBar