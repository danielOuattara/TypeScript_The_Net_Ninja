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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//------------------- TO GENERICS
const addUUId = (object) => {
    let uid = Math.floor(Math.random() * 1e2);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne = addUUId({ name: "Daniel", age: 37, job: "Web Developer" });
console.log(docOne);
// console.log(docOne.name); // Error: doesn't know what inside the object
// Problem if I try to access any prop in that object
// Solution = generics
//--------------------------------------------------------
// using Generics
const addUUId2 = (object) => {
    // generics capture all infos prop in the given object
    let uid = Math.floor(Math.random() * 1e5);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne2 = addUUId2({ name: "Daniel", age: 37 }); //  addUUID2() Accepts object input
console.log(docOne2);
console.log(docOne2.name); //  Working know !!!
// But...
let docOne2_Test = addUUId2("Daniel"); // Non sense ! Must accept only Object here
//--------------------------------------------------------
// using Generics must 'extends' to precise which data structure is captured
const addUUId3 = (obj) => {
    let uid = Math.floor(Math.random() * 1e5);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne3 = addUUId3({ name: "Julie" });
console.log(docOne3);
console.log(docOne3.name); // working !!!
//let docOne3_Test = addUUId3("Daniel"); // Incorrect Must accept only Object here
// -------------------------------------------------------
//more specific on the type we want to pass
const addUUId4 = (obj) => {
    let uid = Math.floor(Math.random() * 1e5);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne4 = addUUId4({ city: "Tumbuctu" });
console.log(docOne4);
console.log(docOne4.city); // working !!!
const docTwo1 = {
    uid: 1,
    ressourceName: "someone",
    data: "something",
};
const docTwo2 = {
    uid: 1,
    ressourceName: "someone",
    data: { country: "Mali", place: "desert" },
};
const docTwo3 = {
    uid: 1,
    ressourceName: "someone",
    data: ["Mali"],
};
const docTwo4 = {
    uid: 1,
    ressourceName: "someone",
    data: ["Mali", "desert"],
};
const docTwo5 = {
    uid: 1,
    ressourceName: "someone",
    data: ["Mali", "desert"],
};
