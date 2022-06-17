let greeting = () => {
  return "Hello World !";
};

greeting = "some thing"  // X Incorrect

//----------------------------------------------------

let greeting2: Function;

greeting2 = () => {
  return "Hello World !";
};

//------------------------------------------------------

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(4, 7));
// console.log(add(4, '7')); // X Incorrect

//-------------------------------------------------------
// optionnal argument for : c.  Required parameter must come first
const add2 = (a: number, b: number, c?: number | string) => {
  console.log(c);
  return a + b;
};

console.log(add2(1, 3, 5));
console.log(add2(1, 3));

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

// void function ---------------------------------------
const add5 = (a: number, b: number, c: number = 1) => {
  console.log(a + b);
};

console.log(add5(3, 7, 5));
console.log(add5(3, 7));
