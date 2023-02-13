const character = "Black";
console.log(character);

const inputs = document.querySelectorAll("input");
console.log("typeof inputs = ", typeof inputs);

console.log("Collection of input :", inputs);

inputs.forEach((input) => {
  console.log(input);
});

let numbers = [0, 1, 3, 4];
console.log("numbers = ", numbers);
let username = "John";
