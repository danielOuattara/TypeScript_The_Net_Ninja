let greeting = () => {
  return "Hello World !";
};

console.log(greeting());

// greeting = "Hello!"  // X Incorrect: greet is known to be a function, not a string

//----------------------------------------------------

let greeting2: Function; // function declaration

greeting2 = () => {
  console.log("Hello World !");
};

greeting2();

//------------------------------------------------------

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(4, 7));
// console.log(add(4, '7')); // X Incorrect

//-------------------------------------------------------

// optional argument : c.
// Required parameter must come first

const add2 = (a: number, b: number, c?: number | string) => {
  console.log("c = ", c);
  return a + b;
};

console.log("add2(1, 3, 5) = ", add2(1, 3, 5));
console.log("add2(1, 3) = ", add2(1, 3));

//--------------------------------------------------------

// default parameter for c

const add3 = (a: number, b: number, c: number = 1) => {
  return (a + b) * c;
};

let resultAdd3 = add3(4, 3, 2); // type of type of add3

console.log(add3(3, 7, 5));
console.log(add3(3, 7));

//--------------------------------------------------------

// function type return

const add4 = (a: number, b: number, c: number = 1): number => {
  return (a + b) * c;
};
let resultAdd4 = add3(4, 3, 2); // type of type of add4

// ---------------------------------------

// void function

const add5 = (a: number, b: number, c: number = 1) => {
  console.log(a + b);
};

console.log(add5(3, 7, 5));
console.log(add5(3, 7));
