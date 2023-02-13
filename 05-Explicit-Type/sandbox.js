// ---------------------------------------------
// implicit types: automatic inference made by TypeScript itself
var age = 3;
var max_number = 200;
var lastName = " John";
// ---------------------------------------------
// explicit types (initialization only)
var person;
var price;
var isLoggedIn;
var ninja;
var dontKnow;
var nothing;
var voider;
// person = 23; // Incorrect, string expected
person = "Twenty three"; // Correct
// price = "4"; // Incorrect, number expected
price = 4; // Correct
// --------------------------------------------------------------
// arrays
var list1; // --> array of strings declaration but NOT initialized
// list1.push('apple');  // --> error in Browser: list1 is undefined
var list2 = []; // --> array of strings declaration + initialization
// Now list2 is a array
list2.push("apple"); // OK
// --------------------------------------------------------------
var numbers1; // --> array of numbers declaration
// numbers1.push(3);  // --> error in browser: numbers1 is undefined
var numbers2 = []; // --> array of numbers declaration + initialization
numbers2.push(3); // --> OK
// --------------------------------------------------------------
// union types : (mixed array)
var mixedArray = [];
mixedArray.push("tomato");
mixedArray.push(3);
mixedArray[2] = "air";
//mixedArray.push(false); // Error = boolean not assignable to mixedArray
var uuid;
uuid = "Hello";
uuid = 4;
// uuid = false // --> Error = boolean not assignable to uuid
// --------------------------------------------------------------
// objects
var agent1;
agent1 = {
    name: "007",
    nationality: "british",
    age: 47
};
// explicit object declaration
var agent2;
// Error: agent32 declaration must content
// all of the proprieties when initialized
agent2 = {
    name: "Daniel"
};
agent2 = {
    name: "daniel",
    nationality: "marsian",
    age: 14143,
    skills: ["swim", "fight", "slide"]
};
