let count;
let minusBtn;
let plusBtn;
let inputText;
let min;
let max;
let spinner;
let info;

// Reasign variable values
const cache = () => {
    minusBtn = document.querySelector(".spinner__minus");
    plusBtn = document.querySelector(".spinner__plus");
    inputText = document.querySelector(".spinner__text");
    count = parseInt(inputText.value);
    min = parseInt(inputText.dataset.min);
    max = parseInt(inputText.dataset.max);
    spinner = document.querySelector(".spinner");
    info = document.querySelector(".info");
};

const getPokemons = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => response.json())
  .then(data => console.log(data));
};

// Code that we want to execute at first
const setup = () => {
     console.log("Loaded JS...")
     getPokemons();
};

// Create all custom functions
const handleCount = (operation) => {
  if (operation === "plus") {
    if (count === max) { 
      console.log("Reached Max");
      return;
    }
    count++;
  } else {
    if (count <= min) { 
      console.log("Reached Min");
      return;
    }
    count--;
  }
  
  inputText.value = count;
  console.log(count);
  // operation === "plus" ? count++ : count--;
};

const updateCount = (e) => {
  const currentValue = parseInt(e.currentTarget.value);

  if (currentValue > max || currentValue < min) {
    e.currentTarget.value = '';
    e.currentTarget.focus();
    console.log("Out of range!");

    let errorDiv;
    if (document.querySelector(".spinner__error")) {
      errorDiv = document.querySelector(".spinner__error");
    } else {
      errorDiv = document.createElement("div");
      errorDiv.classList.add("spinner__error");
      errorDiv.innerHTML = "Out of range";
      spinner.appendChild(errorDiv);
    }
    
    return;
  } else {
    document.querySelector(".spinner__error").remove();
  }

  count = e.currentTarget.value;
  console.log(e.currentTarget.value);
};

// Add all event listeners
const bind = () => {
    minusBtn.addEventListener("click", () => {
        handleCount("minus"); 
    });
    plusBtn.addEventListener("click", () => {
        handleCount("plus"); 
    });
    inputText.addEventListener("blur", updateCount);
};

// Execute all previous functions in order
const main = () => {
    cache();
    setup();
    bind();
};

document.addEventListener("DOMContentLoaded", main);
