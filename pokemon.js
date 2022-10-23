let input;
let btnSearch;
let loader;
let pokemonCardContainer;
const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

const cache = () => {
    input = document.querySelector(".input");
    btnSearch = document.querySelector(".btnSearch");
    loader = document.querySelector(".loader");
    pokemonCardContainer = document.querySelector(".pokemon");
};

const capitalizeWord = (str) => {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

const pokemonTemplate = (pokemon) => {
    return `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <img src="${pokemon.sprites.back_default}" alt="${pokemon.name}" />
    <h3>${capitalizeWord(pokemon.name)}</h3>
    <span>Movimientos:</span>
    <div class="pokemon__moves">
        ${
            pokemon.moves.length && 
            pokemon.moves.map((item, index) => {
                return `<div>
                    <a href="${item.move.url}" target="_blank">${capitalizeWord(item.move.name)}</a>
                </div>`
            }).join(" ")
        }
    </div>
    `; 
}

const buildPokemonCard = (pokemon) => {
    console.log("built pokemon card");
    // removes pokemon if already searched for one
    if (document.querySelector(".pokemon__single")) {
        document.querySelector(".pokemon__single").remove();
    }
    // created the pokemon card
    const newDiv = document.createElement("div");
    newDiv.classList.add("pokemon__single");
    newDiv.innerHTML = pokemonTemplate(pokemon);
    pokemonCardContainer.appendChild(newDiv);
};

const handleLoader = (isActive) => {
     if (isActive) {
        loader.classList.add("loader--active"); // show loader
     } else {
        if (loader.classList.contains("loader--active")) {
            loader.classList.remove("loader--active"); // hide loader
        }
     }
};

const getPokemon = (e) => {
    // pokemon value in lowercase (will be used to call the api later)
    const pokemonToSearch = e.currentTarget.closest(".search").querySelector(".input").value.toString().toLowerCase();
    
    handleLoader(true); // show loader

    // API call with the lowercased pokemon string
    fetch(API_ENDPOINT + pokemonToSearch)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        buildPokemonCard(data);
    }).finally(() => {
        handleLoader(false); 
    })
};

const bind = () => {
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            getPokemon(e);
        }
    })
    btnSearch.addEventListener("click", getPokemon);
};

const main = () => {
    cache();
    bind(); 
}

document.addEventListener("DOMContentLoaded", main);