let greeting: Function;
// () => void

/* exemple 1 
==============*/

let greet: (a: string, b: string) => void; // <=== function signature

// 'greet' definition must match the above signature
greet = (name, greeting) => {
  console.log(`${name} says ${greeting}`);
};

/* exemple 2 
===============*/

let calc: (a: number, b: number, c: string) => number; // <=== function signature

// 'calc' definition must match the above signature
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

// using aliases

type Person = { name: string; age: number };

logDetails = (samourai: Person) => {
  console.log(`${samourai.name} is ${samourai.age} y.o`);
};
