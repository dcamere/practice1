let btnSearch
const API_ENDPOINT = "https://icanhazdadjoke.com/";

const cache = () =>{
    btnSearch = document.querySelector(".btnSearch");
    
};
const setup = () =>{
};

const getJoke = () =>{
    fetch (API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
   
    
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
