"use strict";
/* ---------------------------------
Typscript DOM & Type Casting*/
//----------------------------------------------------------------
var anchor = document.querySelector("a");
console.log("anchor = ", anchor);
//console.log(anchor.href) // Sure that anchor exists to be able to access its "href" prop ?? 
/* TypeScript didn't parse the DOM, it cannot be sure
that "anchor" element exists in the DOM */
// Option - 1
if (anchor) { // option-1
    // do something
}
else {
    var anchor2 = document.querySelector("a"); // exclamation mark
    console.log(anchor2.href);
}
// Option - 2
var anchor_2 = document.querySelector("a"); // <-- "!" means I am sure it exist in the DOM
// Option - 3
var anchor_3 = document.querySelector("a");
console.log(anchor_3 === null || anchor_3 === void 0 ? void 0 : anchor_3.href); // <-- "?" means "if it exists, use its href property"
//------------------------------------------------------------------
// Forms
var form = document.querySelector("form"); // TypeScript know the 'a' element
// Hover on 'form2' indicates 'Element | Null'. 
// TypeScript does not know any specific class name
var form2 = document.querySelector(".new-item-form");
// console.log(form2.children);  // X Incorrect
// Solution = type casting to precise an HTMl form element
var form3 = document.querySelector(".new-item-form");
console.log("form3.children = ", form3.children);
//------------------------------------------------------------------
// Input
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
//------------------------------------------------------------------
// add an event listener
form3.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
