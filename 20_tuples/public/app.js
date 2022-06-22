import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
console.log("------------------------------------------------------");
const form = document.querySelector(".new-item-form");
// Input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // using tuples
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// TO TUPLES
let arr = ["daniel", 25, true];
arr[0] = false; // allowed !
arr[1] = "Julie"; // allowed
// flexible array item
//with tuple => item type is immutable
let myTuple = ["Hello", 23, true]; // allowed 
myTuple[0] = "Julie";
let student;
student = ["Jackie Chang", 223423]; // allowed
