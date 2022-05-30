import React from 'react'

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: any;
    // userAnswer: boolean; watch the value below
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard = ({ question, answers, callback, userAnswer, questionNumber, totalQuestion }: QuestionCardProps) => {
  return (
    <div>
        <p className="questionCard__number">
            Question: {questionNumber} / {totalQuestion}
        </p>

        {/* watch this */}
        <p>{question}</p>

        <div>
            {answers.map(answer => (
                <div>
                    <button 
                        disabled={userAnswer}
                        onClick={callback}
                    >
                        <span>{answer}</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuestionCard