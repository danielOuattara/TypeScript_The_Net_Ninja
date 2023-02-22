import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Mario", "year", 250);
docTwo = new Payment("Anna", "anything", 300);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log("docs = ", docs);

/* Typescript DOM & Type Casting
=================================*/

// Forms
const form = document.querySelector("form")!;

// type casting to precise an HTMl form element
const form2 = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(form2.children);

// Input
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// then add an event listener
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log("doc = ", doc);
});
