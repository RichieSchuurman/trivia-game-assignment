    // Builds URL
    export async function getUrl(amount, category, type, difficulty){
      localStorage.setItem("type", type);
      const baseURL = "https://opentdb.com/api.php";
      const baseAmount = "?amount=";
      const baseCategory = "&category=";
      const baseDifficulty = "&difficulty=";
      const baseType = "&type=";
      const url = `${baseURL}${baseAmount}${amount}${baseCategory}${category}${baseDifficulty}${difficulty}${baseType}${type}`
    
      // Gets url, maps through the different questions and answers, setting them in localStorage to be used later in the application.
      await fetch(url)
      .then( response => response.json())
      .then( data => data.results )
      .then( results => {
  
          const question = results.map(results => results.question);
          const correctAnswer = results.map(results => results.correct_answer);
          const incorrectAnswer = results.map(results => results.incorrect_answers);
          console.log(question)
          console.log(correctAnswer)
          localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
          localStorage.setItem("incorrectAnswer", JSON.stringify(incorrectAnswer));
          localStorage.setItem("questions", JSON.stringify(question));
          
      })
  }