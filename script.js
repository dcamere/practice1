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
  console.log(typeof count)
     
};

// Create all custom functions
const handleCount = (operation) => {
  if (operation === "plus") {
    if(count === max){
      console.log(`You can't go above ${max}`);
      return;
    }
    count++;
  } else {
    if(count <= min){
      console.log(`You can't go below ${min}`);
      return;
    }
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
