let btnSearch
const API_ENDPOINT = "https://dad-jokes.p.rapidapi.com/random/joke";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e02e435b79mshb9262274bda6b69p175543jsn8e52920af1b0',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

const cache = () =>{
    btnSearch = document.querySelector(".btnSearch");
    contenido = document.querySelector(".contenido")
    punchline = document.querySelector(".punchline")
    
};
const setup = () =>{
};

const getJoke = () =>{
    fetch (API_ENDPOINT, options)
    .then(response => response.json())
    .then(response => 
        contenido.innerHTML = `${response.body[0].setup}` + "<br />" + `${response.body[0].punchline}`)
}

const bind = () =>{
    btnSearch.addEventListener("click", getJoke);
};
const main = () =>{
    cache();
    setup();
    bind();
}
document.addEventListener("DOMContentLoaded", main);
