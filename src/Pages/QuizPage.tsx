import React, { useState } from 'react'
import QuestionCard from '../Components/QuestionCard'
import { fetchQuizQuestions, Difficulty, QuestionState } from '../utils/Api'
import './QuizPage.css'

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
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
    // console.log(questions)

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
        if(!gameOver){
            //get user answerw
            const answer = e.currentTarget.value;
            // check answer against the correct value
            const correct = questions[number].correct_answer === answer; //this gives us true or false
            //Add score if answer is correct
            if (correct) setScore(prevScore => prevScore + 1)

            // save answer in the array of the user answers
            const answerObject = {
                question: questions[number].question,
                answer, 
                correct,
                correctAnswer: questions[number].correct_answer
            }

            setUserAnswers(prevAnswers => [...prevAnswers, answerObject])
        }
    }

    // next question
    const nextQuestion = () => {
        // move onto the next question if not the last question
        const nextQuestion = number + 1

        if(nextQuestion === TOTAL_QUESTIONS){
            setGameOver(true)
        }
        else{
            setNumber(nextQuestion)
        }

    }



    return(
        <div className='quizPage'>
            <h2>REACT TYPESCRIPT QUIZ</h2>
            {
                gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className='quizPage__start' onClick={startTrivia}>Start</button>
                ) : null
            }
            
            {!gameOver ? <p className="quizPage__score">Score: {score}</p> : null}
            {loading ? <p>Loading Questions...</p>: null }

            {!loading && !gameOver && (
                 <QuestionCard 
                    questionNumber={number + 1}
                    totalQuestion={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                /> 
            )}
            
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
                <button className="quizPage__nextQuestion" onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}