let count;
let minusBtn;
let plusBtn;
let inputText;

// Reasign variable values
const cache = () => {
    minusBtn = document.querySelector(".spinner__minus");
    plusBtn = document.querySelector(".spinner__plus");
    inputText = document.querySelector(".spinner__text");
    count = inputText.value;
};

// Code that we want to execute at first
const setup = () => {
     
};

// Create all custom functions
const handleCount = (operation) => {
  if (operation === "plus") {
    count++;
  } else {
    count--;
  }

  inputText.value = count;
  console.log(count);
  // operation === "plus" ? count++ : count--;
};

// Add all event listeners
const bind = () => {
    minusBtn.addEventListener("click", () => {
        handleCount("minus"); 
    });
    plusBtn.addEventListener("click", () => {
        handleCount("plus"); 
    });
};

// Execute all previous functions in order
const main = () => {
    cache();
    setup();
    bind();
};

document.addEventListener("DOMContentLoaded", main);
