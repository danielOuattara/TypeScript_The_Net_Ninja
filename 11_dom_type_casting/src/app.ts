/* ---------------------------------
TypeScript DOM & Type Casting*/

//----------------------------------------------------------------
const anchor = document.querySelector("a");

console.log("anchor = ", anchor);
// console.log(anchor.href); // Error

/* 
Error const anchor: HTMLAnchorElement | null . 
'anchor' is possibly 'null'.ts(18047)

TypeScript didn't parse the DOM, it cannot be sure 
that "anchor" element exists in the DOM */

//------------------
// Solution - 1

const anchor2 = document.querySelector("a");
if (anchor2) {
  console.log(anchor2.href);
}
//------------------
// Solution - 2

const anchor_2 = document.querySelector("a");
console.log(anchor_2?.href); // <-- "?" means "if it exists, use its href property"

//------------------
// Solution - 3
const anchor_3 = document.querySelector("a")!; // <-- "!" means I am sure it exist in the DOM
console.log(anchor_3.href);

//------------------
// Solution - 4
const anchor_4 = document.querySelector("a") as HTMLAnchorElement; // define as HTMLAnchorElement
console.log(anchor_4.href);

//------------------------------------------------------------------
//
//  Handle Forms

//---

const form = document.querySelector("form");
// console.log(form.children); // X Incorrect

// Hover on 'form1' indicates 'Element | Null'.
// TypeScript does not know any specific class name

//---

// Solution -> use "!" to force explain TypeScript that the element does exist
const form2 = document.querySelector(".new-item-form")!;
console.log(form2.children); // Correct

//---

// Solution -> type casting to precise an HTMl form element
const form3 = document.querySelector(".new-item-form") as HTMLFormElement;

console.log("form3.children = ", form3.children);

//------------------------------------------------------------------
// Input

//---
const type = document.querySelector("#type") as HTMLSelectElement;
type.addEventListener("change", (event) => {
  const eventTarget = event.target as HTMLSelectElement;
  console.log(eventTarget.value);
});

//---
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
tofrom.addEventListener("change", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---
const details = document.querySelector("#details") as HTMLInputElement;
details.addEventListener("change", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---
const amount = document.querySelector("#amount") as HTMLInputElement;
amount.addEventListener("focusout", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});
//------------------------------------------------------------------
// add an event listener

form3.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
