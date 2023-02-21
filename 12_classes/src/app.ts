/* Classes
============= */

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Daniel", "on React.js", 2000);
const invoiceTwo = new Invoice("Gaïa", "on Paw patrol", 200);

console.log(invoiceOne.format());
console.log(invoiceTwo.format());

//----------------------------------------------------------------------

//let invoices: string[] = [];

let invoices: Invoice[] = []; // <-- Only object instantiated from Invoice class

// invoices.push({client: "Amaya", details:"Bambi", amount:10})  // <-- Not allowed, read above

invoices.push(new Invoice("Amaya", "Bambi", 10));
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log("invoices = ", invoices);

//---------------------------------------------------------------

/* Typscript DOM & Type Casting
==================================*/

const anchor = document.querySelector("a");

console.log("anchor = ", anchor);
//console.log(anchor.href) // Sure that anchor exists to be able to access its "href" prop ??

/* TypeScript didn't parse the DOM, it cannot be sure 
that "anchor" element exists in the DOM */

// Option - 1

if (anchor) {
  // option-1
  // do something
} else {
  const anchor2 = document.querySelector("a")!; // exclamation mark
  console.log(anchor2.href);
}

// Option - 2

const anchor_2 = document.querySelector("a")!; // <-- "!" means I am sure it exist in the DOM

// Option - 3

const anchor_3 = document.querySelector("a");
console.log(anchor_3?.href); // <-- "?" means "if it exists, use its href property"

//------------------------------------------------------------------
// Forms

const form = document.querySelector("form")!; // TypeScript know the 'a' element

// Hover on 'form2' indicates 'Element | Null'.
// TypeScript does not know any specific class name
const form2 = document.querySelector(".new-item-form");

// console.log(form2.children);  // X Incorrect

// Solution = type casting to precise an HTMl form element
const form3 = document.querySelector(".new-item-form") as HTMLFormElement;

console.log("form3.children = ", form3.children);

//------------------------------------------------------------------
// Input

const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

//------------------------------------------------------------------
// add an event listener

form3.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
