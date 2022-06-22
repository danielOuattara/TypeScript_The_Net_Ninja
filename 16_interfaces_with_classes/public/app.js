import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("Mario", "year", 250);
docTwo = new Payment("Anna", "anything", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("docs = ", docs);
/* Typscript DOM & Type Casting
=================================*/
// Forms
const form = document.querySelector("form");
// type casting to precise an HTMl form element
const form2 = document.querySelector(".new-item-form");
console.log(form2.children);
// Input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// then add an event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log("doc = ", doc);
});
