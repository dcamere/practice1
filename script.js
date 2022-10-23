let count;
let minusBtn;
let plusBtn;
let inputText;
let min;
let max;

// Reasign variable values
const cache = () => {
    minusBtn = document.querySelector(".spinner__minus");
    plusBtn = document.querySelector(".spinner__plus");
    inputText = document.querySelector(".spinner__text");
    count = parseInt(inputText.value);
    min = parseInt(inputText.dataset.min);
    max = parseInt(inputText.dataset.max);
};

// Code that we want to execute at first
const setup = () => {
     console.log("Loaded JS...")
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
    return;
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
