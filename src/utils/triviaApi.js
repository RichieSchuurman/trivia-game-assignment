
    export async function getUrl(amount, category, type, difficulty){
        
        console.log("asd")
        localStorage.setItem("type", type);
      const baseURL = "https://opentdb.com/api.php";
      const baseAmount = "?amount=";
      const baseCategory = "&category=";
      const baseDifficulty = "&difficulty=";
      const baseType = "&type=";
      const url = `${baseURL}${baseAmount}${amount}${baseCategory}${category}${baseDifficulty}${difficulty}${baseType}${type}`

      localStorage.setItem("url", url)
  
      await fetch(url)
      .then( response => response.json())
      .then( data => data.results )
      .then( results => {
  
          const question = results.map(results => results.question);
          const correctAnswer = results.map(results => results.correct_answer);
          const incorrectAnswer = results.map(results => results.incorrect_answers);

          localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
          localStorage.setItem("incorrectAnswer", JSON.stringify(incorrectAnswer));
          localStorage.setItem("questions", JSON.stringify(question));
          
      })

  }

  export async function restart(url){

    localStorage.setItem("score", "")
    localStorage.setItem("userAnswers", "")
    localStorage.setItem("correctAnswers", "")
    localStorage.setItem("resultQuestions", "")
    localStorage.setItem("questionNumber", "0");
    localStorage.setItem("score", "0")

    await fetch(url)
    .then( response => response.json())
    .then( data => data.results )
    .then( results => {

        const question = results.map(results => results.question);
        const correctAnswer = results.map(results => results.correct_answer);
        const incorrectAnswer = results.map(results => results.incorrect_answers);

        localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
        localStorage.setItem("incorrectAnswer", JSON.stringify(incorrectAnswer));
        localStorage.setItem("questions", JSON.stringify(question));
        
    })
}