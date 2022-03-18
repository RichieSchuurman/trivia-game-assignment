
const apiURL = "https://trivia-assignment.herokuapp.com";
const apiKey = "8599272a-ba9e-4bb0-9b75-f5ac2c9390c9";

// Sets localstorage for user to be used throughout the application
export function attemptLogin(name) {
  localStorage.setItem("name", name);
  fetch(`${apiURL}/trivia?username=${name}`)
    .then((response) => response.json())
    .then((results) => {

      if (results.length == 0) {

        localStorage.setItem("name", name)
        
        return register(name)
      } else {    

        localStorage.setItem("name", name)

        return results
      }
    })
    .catch((error) => {});
}

// Creates new user
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

// Sets local storage id to current user id
export function updateScore(score){
  fetch(`${apiURL}/trivia/?username=${localStorage.getItem("name")}`)
    .then((response) => response.json())
    .then((results) => {

      if (results.length == 0) {

        localStorage.setItem("userId", results[0].id)
        
      }
    })
    .catch((error) => {});


//uses id to update current user's highscore with the given score
// fetch(`${apiURL}/trivia/${localStorage.getItem("userId")}`, {
//   method: 'PATCH', // NB: Set method to PATCH
//   headers: {
//       'X-API-Key': apiKey,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//       // Provide new highScore to add to user with id 1
//       highScore: score  
//   })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Could not update high score')
//     }
//     return response.json()
//   })
//   .then(updatedUser => {
//     // updatedUser is the user with the Patched data
//   })
//   .catch(error => {
//   })

}



