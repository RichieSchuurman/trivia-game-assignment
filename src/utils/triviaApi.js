const baseURL = "https://opentdb.com/api.php";
const baseAmount = "?amount=";
const baseCategory = "&category=";
const baseDifficulty = "&difficulty=";
const baseType = "&type=";

export function getUrl(amount, category, type, difficulty){
    const url = `${baseURL}${baseAmount}${amount}${baseCategory}${category}${baseDifficulty}${difficulty}${baseType}${type}`

    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(results => {
        const question = results.map(results => results.question);
        console.log(question);
    })
}