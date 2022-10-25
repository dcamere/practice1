let btnSearch;
let input;
const API_ENDPOINT = "https://pokeapi.co/api/v2/";



const cache = () =>{
    btnSearch = document.querySelector(".btnSearch");
    input = document.querySelector(".input");

}

const getPkmn = (e) =>{
    console.log(e.currentTarget.closest(".inputAndSearch").querySelector(".input").value.toString().toLowerCase());
    // const pkmnToSearch = e.currentTarget

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