let btnSearch;
let input;
const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";



const cache = () =>{
    btnSearch = document.querySelector(".btnSearch");
    input = document.querySelector(".input");

}

const getPkmn = (e) =>{

    //this retrieves user's input, turns it into string and into lower case
    const pkmnToSearch = e.currentTarget.closest(".inputAndSearch").querySelector(".input").value.toString().toLowerCase();
    console.log(pkmnToSearch)
    
    fetch(API_ENDPOINT + pkmnToSearch)
    .then (response => response.json())
    .then (response => console.log(response))

}

const bind = () =>{
    btnSearch.addEventListener("click", getPkmn)
    input.addEventListener("keypress", (e)=>{
        if (e.key === "Enter"){
            getPkmn(e);
        }
    })
}



const main = () =>{
    cache();
    bind();
}

document.addEventListener("DOMContentLoaded", main)