const apiURL = "https://noroff-assignment-users-api.herokuapp.com";
const apiKey = "api_key";

export function attemptLogin(name) {
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
