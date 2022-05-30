import React, { useState } from 'react'
import QuestionCard from '../Components/QuestionCard'
import { fetchQuizQuestions, Difficulty, QuestionState } from '../utils/Api'

const TOTAL_QUESTIONS = 10

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export const QuizPage = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
    console.log(questions)

    // starting game
    const startTrivia = async () => {
        // clicking the start button
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        )

        setQuestions(newQuestions)

        setScore(0)
        setUserAnswers([])
        setNumber(0)

        setLoading(false)
        
    }

    // selectinng answer
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    // next question
    const nextQuestion = () => {

    }

    return(
        <div>
            <h2>REACT TYPESCRIPT QUIZ</h2>
            {
                gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className='question__start' onClick={startTrivia}>Start</button>
                ) : null
            }
            
            {!gameOver ? <p className="question__score">Score:</p> : null}
            <p>Loading Questions</p>

            {/* <QuestionCard 
                questionNumber={number + 1}
                totalQuestion={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            /> */}

            <button className="question__next" onClick={nextQuestion}>Next Question</button>
        </div>
    )
}