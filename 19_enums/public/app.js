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
// TO GENERICS
const addUUId = (object) => {
    let uid = Math.floor(Math.random() * 1e7);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne = addUUId({ name: "Daniel", age: 37, job: "Web Developer" });
console.log(docOne);
// console.log(docOne.name); // Error: doesn't work here = problem
// doesn't know what inside the object
// // using Generics
const addUUId2 = (object) => {
    let uid = Math.floor(Math.random() * 1e5);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne2 = addUUId2({ name: "Daniel", age: 37 });
console.log(docOne2);
console.log(docOne2.name); //  Working !!!
// // using Generics must extends to precise which data structure is captured
const addUUId3 = (obj) => {
    let uid = Math.floor(Math.random() * 1e5);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne3 = addUUId3({ name: "Julie" });
console.log(docOne3);
console.log(docOne3.name); // working !!!
//more specific on the type w want to pass
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
const docEnum1 = {
    uid: 1,
    ressourceName: 3,
    data: { title: "Name of the wind" },
};
const docEnum2 = {
    uid: 1,
    ressourceName: 3,
    data: { name: "Daniel" },
};
//-------------------------------------------------------------------------
// how to group ressource efficiently => use enums
// A special type in typeScript
// Using enums
var RessourceType;
(function (RessourceType) {
    RessourceType[RessourceType["BOOK"] = 0] = "BOOK";
    RessourceType[RessourceType["AUTHOR"] = 1] = "AUTHOR";
    RessourceType[RessourceType["FILM"] = 2] = "FILM";
    RessourceType[RessourceType["DIRECTOR"] = 3] = "DIRECTOR";
    RessourceType[RessourceType["PERSON"] = 4] = "PERSON";
})(RessourceType || (RessourceType = {}));
const docEnum3 = {
    uid: 1,
    ressourceName: RessourceType.AUTHOR,
    data: { title: "Name of the wind" },
};
const docEnum4 = {
    uid: 1,
    ressourceName: RessourceType.FILM,
    data: { name: "Daniel" },
};
