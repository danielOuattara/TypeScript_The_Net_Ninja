// import { Invoice } from "./classes/invoice.js";
// import { Payment } from "./classes/payment.js";
// import { HasFormatter } from "./interfaces/HasFormatter.js";
// import { ListTemplate } from "./classes/ListTemplate.js";

// console.log("------------------------------------------------------");

// const form = document.querySelector(".new-item-form") as HTMLFormElement;

// // Input

// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// // list template instance

// const ul = document.querySelector("ul")!;
// const list = new ListTemplate(ul);

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   let doc: HasFormatter;

//   if (type.value === "invoice") {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }

//   list.render(doc, type.value, "end");
// });

//
//
/* ------------------------ TO GENERICS -----------------------*/

const addUUId = (object: object) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...object, uid };
};

let docOne = addUUId({ name: "Daniel", age: 37, job: "Web Developer" });

console.log(docOne);

// console.log(docOne.name); // Error: doesn't know what inside the object

console.log("-----------------------");
// Problem if I try to access any prop in that object
// Solution = generics

//--------------------------------------------------------
// using Generics

const addUUId2 = <T>(object: T) => {
  // generics also capture all infos prop in the given object
  let uid = Math.floor(Math.random() * 1e5);
  return { ...object, uid };
};

let docOne2 = addUUId2({ name: "Daniel", age: 37, job: "Singer" }); //  addUUID2() Accepts object input

console.log(docOne2);
console.log(docOne2.name); //  Working know !!!
console.log("-----------------------");

let docOne2_bis = addUUId2(["Daniel", 37, "Singer"]); //  addUUID2() Accepts object input
console.log(docOne2_bis);
console.log("-----------------------");

//

// But...

let docOne2_Test = addUUId2("Daniel"); // Non sense ! Must accept only Object here

//--------------------------------------------------------
// Solution: generics must use 'extends' to precise which data structure is captured

const addUUId3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...obj, uid };
};

let docOne3 = addUUId3({ name: "Julie" });

console.log(docOne3);
console.log(docOne3.name); // working !!!

//let docOne3_Test = addUUId3("Daniel"); // Incorrect Must accept only Object here

// -------------------------------------------------------

// more specific on the type we want to pass

const addUUId4 = <T extends { city: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...obj, uid };
};

let docOne4 = addUUId4({ city: "Timbuktu" });

console.log(docOne4);
console.log(docOne4.city); // working !!!

// -------------------------------------------------------

// generics with interfaces

interface Resource {
  uid: number;
  resourceName: string;
  data: "???"; // <----- want this to be flexible: use => generics
}

//----

interface Resource2<T> {
  // type  T
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo1: Resource2<string> = {
  uid: 1,
  resourceName: "someone",
  data: "something",
};

const docTwo2: Resource2<object> = {
  uid: 1,
  resourceName: "someone",
  data: { country: "Mali", place: "desert" },
};

const docTwo3: Resource2<[string]> = {
  uid: 1,
  resourceName: "someone",
  data: ["Mali"],
};

const docTwo4: Resource2<[string, string]> = {
  uid: 1,
  resourceName: "someone",
  data: ["Mali", "desert"],
};

const docTwo5: Resource2<string[]> = {
  uid: 1,
  resourceName: "someone",
  data: ["Mali", "desert"],
};
