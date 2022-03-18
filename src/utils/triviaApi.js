const baseURL = "https://opentdb.com/api.php";
const baseAmount = "?amount=";
const baseCategory = "&category=";
const baseDifficulty = "&difficulty=";
const baseType = "&type=";

 export async function getUrl(amount, category, type, difficulty){
    const url = `${baseURL}${baseAmount}${amount}${baseCategory}${category}${baseDifficulty}${difficulty}${baseType}${type}`

    console.log(url);

    await fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(results => {

        const question = results.map(results => results.question);
        const correctAnswer = results.map(results => results.correct_answer);
        const incorrectAnswer = results.map(results => results.incorrect_answers);

        localStorage.setItem("aa", "bb")
        console.log("blob")
        localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
        localStorage.setItem("incorrectAnswer", JSON.stringify(incorrectAnswer));
        localStorage.setItem("questions", JSON.stringify(question));

        
    })
}