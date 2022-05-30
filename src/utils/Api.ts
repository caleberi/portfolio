// enum
export enum Difficulty {
    EASY = "easy",
    MEDUIM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    // cool, double await 😲
    // const data = await(await fetch(endpoint)).json()

    const fetchedData = await fetch(endpoint)

    const data = await fetchedData.json()

    console.log(data)
}
