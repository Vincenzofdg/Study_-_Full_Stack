/* Referente ao { Accept: 'application/json' } }
> curl -H "Accept: text/html" "https://icanhazdadjoke.com/"
> curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"
> curl -H "Accept: application/json" "https://icanhazdadjoke.com/"
*/

const joke = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(theJoke => document.getElementById('jokeContainer').innerText = theJoke.joke);    
};

window.onload = () => fetchJoke();
