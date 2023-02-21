"use strict";
/* ---------------------------------
TypeScript DOM & Type Casting*/
//----------------------------------------------------------------
var anchor = document.querySelector("a");
console.log("anchor = ", anchor);
// console.log(anchor.href); // Error
/*
Error const anchor: HTMLAnchorElement | null .
'anchor' is possibly 'null'.ts(18047)

TypeScript didn't parse the DOM, it cannot be sure
that "anchor" element exists in the DOM */
//------------------
// Solution - 1
var anchor2 = document.querySelector("a");
if (anchor2) {
    console.log(anchor2.href);
}
//------------------
// Solution - 2
var anchor_2 = document.querySelector("a");
console.log(anchor_2 === null || anchor_2 === void 0 ? void 0 : anchor_2.href); // <-- "?" means "if it exists, use its href property"
//------------------
// Solution - 3
var anchor_3 = document.querySelector("a"); // <-- "!" means I am sure it exist in the DOM
console.log(anchor_3.href);
//------------------
// Solution - 4
var anchor_4 = document.querySelector("a"); // define as HTMLAnchorElement
console.log(anchor_4.href);
//------------------------------------------------------------------
//
//  Handle Forms
//---
var form = document.querySelector("form");
// console.log(form.children); // X Incorrect
// Hover on 'form1' indicates 'Element | Null'.
// TypeScript does not know any specific class name
//---
// Solution -> use "!" to force explain TypeScript that the element does exist
var form2 = document.querySelector(".new-item-form");
console.log(form2.children); // Correct
//---
// Solution -> type casting to precise an HTMl form element
var form3 = document.querySelector(".new-item-form");
console.log("form3.children = ", form3.children);
//------------------------------------------------------------------
// Input
//---
var type = document.querySelector("#type");
type.addEventListener("change", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var tofrom = document.querySelector("#tofrom");
tofrom.addEventListener("change", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var details = document.querySelector("#details");
details.addEventListener("change", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var amount = document.querySelector("#amount");
amount.addEventListener("focusout", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//------------------------------------------------------------------
// add an event listener
form3.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
