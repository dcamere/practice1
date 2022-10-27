let btnSearch;
let input;
let pkmnData
const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";



const cache = () =>{
    btnSearch = document.querySelector(".btnSearch");
    input = document.querySelector(".input");
    pkmnData = document.querySelector(".pkmnData");

}
const capitalizeWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// const returnTwoTypes = (pkmnMove) =>{
//     if (pkmnMove){
//         return (pkmnMove)
//     } else {
//         return false
//     }
// }
const cardTemplate = (pokemon) =>{
    return `
    <h3>${capitalizeWord(pokemon.name)}</h3>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <img src="${pokemon.sprites.back_default}" alt="${pokemon.name} back">
    <p>Order: ${pokemon.order} </p>
    <p>Types: 
    ${pokemon && pokemon.types[0] && pokemon.types[0] && pokemon.types[0].name ?
        /* smogg, igual es mejor hacer un map en vez de estas condicionales 
        y preguntar si existe length en el array, mañana lo vemos xd*/
        `<ul><li>${pokemon?.types[0]?.type?.name}</li>` : ""
    }
    ${
        pokemon && pokemon.types[1] && pokemon.types[1].name ?
       ` <li>${pokemon?.types[1]?.type?.name}</li></ul>` : ""
    }
    </p>
    <p>Weight: ${pokemon.weight} </p>`
}
const buildData = (pokemon) =>{
    const newDiv = document.createElement("div");
    newDiv.innerHTML = cardTemplate(pokemon);
    pkmnData.appendChild(newDiv);

}
const getPkmn = (e) =>{

    //this retrieves user's input, turns it into string and into lower case
    const pkmnToSearch = e.currentTarget.closest(".inputAndSearch").querySelector(".input").value.toString().toLowerCase();
    console.log(pkmnToSearch)
    
    fetch(API_ENDPOINT + pkmnToSearch)
    .then (response => response.json())
    .then (response => {
        console.log(response);
        buildData(response);
        
        
    })

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