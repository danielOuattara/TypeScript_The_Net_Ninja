// ---------------------------------------------
// implicit types: automatic inference made by TypeScript itself

let age = 3;
const max_number = 200;
let lastName = " John";

// ---------------------------------------------
// explicit types (initialization only)

let person: string;
let price: number;
let isLoggedIn: boolean;
let ninja: object;
let dontKnow: undefined;
let nothing: null;
let voider: void;

// person = 23; // Incorrect, string expected
person = "Twenty three"; // Correct

// price = "4"; // Incorrect, number expected
price = 4; // Correct

// --------------------------------------------------------------
// arrays

let list1: string[]; // --> array of strings declaration but NOT initialized
// list1.push('apple');  // --> error in Browser: list1 is undefined

let list2: string[] = []; // --> array of strings declaration + initialization
// Now list2 is a array
list2.push("apple"); // OK

// --------------------------------------------------------------

let numbers1: number[]; // --> array of numbers declaration
// numbers1.push(3);  // --> error in browser: numbers1 is undefined

let numbers2: number[] = []; // --> array of numbers declaration + initialization
numbers2.push(3); // --> OK

// --------------------------------------------------------------
// union types : (mixed array)

let mixedArray: (string | number)[] = [];

mixedArray.push("tomato");
mixedArray.push(3);
mixedArray[2] = "air";
//mixedArray.push(false); // Error = boolean not assignable to mixedArray

let uuid: string | number;
uuid = "Hello";
uuid = 4;
// uuid = false // --> Error = boolean not assignable to uuid

// --------------------------------------------------------------
// objects

let agent1: object;

agent1 = {
  name: "007",
  nationality: "british",
  age: 47,
};

// explicit object declaration
let agent2: {
  name: string;
  nationality: string;
  age: number;
};

// Error: agent32 declaration must content
// all of the proprieties when initialized
agent2 = {
  name: "Daniel",
};

agent2 = {
  name: "daniel",
  nationality: "marsian",
  age: 14143,
  skills: ["swim", "fight", "slide"], // X Incorrect: 'skills' does not exist in type of agent2
};
