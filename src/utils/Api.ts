import { shuffleArray } from "./QuestionUtils";

// enum
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

// props from the API
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string
}

// this uses types from the Question and adds answers property to it.
export type QuestionState = Question & { answers: string[] }

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    // cool, double await 😲
    const data = await(await fetch(endpoint)).json()

    // const fetchedData = await fetch(endpoint)

    // const data = await fetchedData.json()

    // console.log(data)

    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }
    ))
    
}
