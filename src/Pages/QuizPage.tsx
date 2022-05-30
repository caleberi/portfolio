import React, { useState } from 'react'
import QuestionCard from '../Components/QuestionCard'
import { fetchQuizQuestions, Difficulty } from '../utils/Api'

const TOTAL_QUESTIONS = 10

export const QuizPage = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    // starting game
    const startTrivia = async () => {

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
            <button className='question__start' onClick={startTrivia}>Start</button>
            <p className="question__score">Score:</p>
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