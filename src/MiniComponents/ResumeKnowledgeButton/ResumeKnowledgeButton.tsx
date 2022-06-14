import React from 'react'
import './ResumeKnowledgeButton.css';

type ButtonProp = {
    id: number;
    name: String;
    styles: React.CSSProperties
}

const ResumeKnowledgeButton = ({ name, id, styles }: ButtonProp) => {
  return (
    // <div>ResumeKnowledgeButton</div>
    <button key={id} style={styles} className="resumeKnowledgeButton">
        {name}
    </button>
  )
}

export default ResumeKnowledgeButton