let greeting: Function;
// () => void

/* exemple 1 
==============*/

let greet: (a: string, b: string) => void; // <=== function signature

greet = (name, greeting) => {
  // greet here must match the above signature
  console.log(`${name} says ${greeting}`);
};

/* exemple 2 
===============*/

let calc: (a: number, b: number, c: string) => number;

calc = (number1, number2, action) => {
  if (action === "add") {
    return number1 + number2;
  } else {
    return number1 - number2;
  }
};

/* exemple 3 
===============*/

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} y.o`);
};

// with aliases

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} y.o`);
};
