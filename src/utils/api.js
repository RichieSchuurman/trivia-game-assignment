const apiURL = "https://trivia-assignment.herokuapp.com";
const apiKey = "8599272a-ba9e-4bb0-9b75-f5ac2c9390c9";

export function attemptLogin(name) {
  localStorage.setItem("name", name);
  fetch(`${apiURL}/trivia?username=${name}`)
    .then((response) => response.json())
    .then((results) => {
      if (results.length == 0) {
        return register(name)
        
      } else {
        localStorage.setItem('user',results)
        console.log(results)
        return results
      }
    })
    .catch((error) => {});
}

export function register(name) {
  fetch(`${apiURL}/trivia`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      highScore: 0,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user");
      }
      return response.json();
    })
    .then((newUser) => {
      return newUser;
    })
    .catch((error) => {});
}

export function updateScore(score){
  console.log(localStorage.getItem("name"));
  //fetch(`${apiURL}/trivia?username=${localStorage.getItem("name")}`)
}



