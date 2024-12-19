const buttonElement = document.querySelector('button');
const jokeElement = document.querySelector('#joke-button');
const jokeContainerElement = document.querySelector('#joke-container');
const jokeTextElement = document.querySelector('#joke-text');
const jokeTitleElement = document.querySelector('#joke-title');

const getJoke = async() => {
    const response = await fetch("https://blague-api.vercel.app/api?mode=dev");
    const data = await response.json();
    return data;
}

buttonElement.addEventListener('click', async () => {
    const joke = await getJoke();
    jokeTitleElement.textContent = joke.blague;
    jokeTextElement.textContent = joke.reponse;
    jokeContainerElement.showModal();
});
