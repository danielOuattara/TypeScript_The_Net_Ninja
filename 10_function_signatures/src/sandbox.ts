let greeting: Function;
// () => void

//
/* example 1 
==============*/

let greet: (a: string, b: string) => void; // <=== function signature

// 'greet' definition must match the above signature
greet = (name, greeting) => {
  console.log(`${name} says ${greeting}`);
};

//
/* example 2 
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

//
/* example 3 
===============*/

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} y.o`);
};
logDetails({ name: "Anna", age: 37 });

//
/* example 4:  using aliases 
=============================*/

// why is not visible in .js ????

type Person = { name: string; age: number };

let logDetails2 = (obj: Person) => undefined as void;

logDetails2 = (samurai) => {
  console.log(`${samurai.name} is ${samurai.age} y.o`);
};

logDetails2({ name: "John", age: 32 });
