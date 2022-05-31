import React from 'react'
import { AnswerObject } from '../Pages/QuizPage'

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // userAnswer: boolean; watch the value below
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard = ({ question, answers, callback, userAnswer, questionNumber, totalQuestion }: QuestionCardProps) => {
  return (
    <div style={{ border: "2px dashed orange" }}>
        <p className="questionCard__number">
            Question: {questionNumber} / {totalQuestion}
        </p>

        {/* watch this */}
        <p>{question}</p>

        <div>
            {answers.map(answer => (
                <div>
                    <button 
                    // 😮‍💨 use double bangs to set something to boolean... 
                        disabled={!!userAnswer}
                        onClick={callback}
                        value={answer}
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