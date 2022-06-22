import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

console.log("------------------------------------------------------");

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Input

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// TO GENERICS

const addUUId = (object: object) => {
  let uid = Math.floor(Math.random() * 1e7);
  return { ...object, uid };
};

let docOne = addUUId({ name: "Daniel", age: 37, job: "Web Developer" });

console.log(docOne);
// console.log(docOne.name); // Error: doesn't work here = problem
// doesn't know what inside the object

// // using Generics

const addUUId2 = <T>(object: T) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...object, uid };
};

let docOne2 = addUUId2({ name: "Daniel", age: 37 });

console.log(docOne2);
console.log(docOne2.name); //  Working !!!

// // using Generics must extends to precise which data structure is captured

const addUUId3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...obj, uid };
};

let docOne3 = addUUId3({ name: "Julie" });

console.log(docOne3);
console.log(docOne3.name); // working !!!

//more specific on the type w want to pass

const addUUId4 = <T extends { city: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1e5);
  return { ...obj, uid };
};

let docOne4 = addUUId4({ city: "Tumbuctu" });

console.log(docOne4);
console.log(docOne4.city); // working !!!

// generics with interfaces

interface Ressource {
  uid: number;
  ressourceNAme: string;
  data: "???"; // want this to flexible => use: generics
}

interface Ressource2<T> {
  // type  T
  uid: number;
  ressourceName: string;
  data: T;
}

const docTwo1: Ressource2<string> = {
  uid: 1,
  ressourceName: "someone",
  data: "something",
};

const docTwo2: Ressource2<object> = {
  uid: 1,
  ressourceName: "someone",
  data: { country: "Mali", place: "desert" },
};

const docTwo3: Ressource2<[string]> = {
  uid: 1,
  ressourceName: "someone",
  data: ["Mali"],
};

const docTwo4: Ressource2<[string, string]> = {
  uid: 1,
  ressourceName: "someone",
  data: ["Mali", "desert"],
};

const docTwo5: Ressource2<string[]> = {
  uid: 1,
  ressourceName: "someone",
  data: ["Mali", "desert"],
};

//---------------------------------------------------

// To ENUMS

interface Ressource3<T> {
  uid: number;
  ressourceName: number;
  data: T;
}

const docEnum1: Ressource3<object> = {
  uid: 1,
  ressourceName: 3,
  data: { title: "Name of the wind" },
};

const docEnum2: Ressource3<object> = {
  uid: 1,
  ressourceName: 3,
  data: { name: "Daniel" },
};

//-------------------------------------------------------------------------
// how to group ressource efficiently => use enums

// A special type in typeScript
// Using enums

enum RessourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Ressource4<T> {
  uid: number;
  ressourceName: RessourceType;
  data: T;
}

const docEnum3: Ressource4<object> = {
  uid: 1,
  ressourceName: RessourceType.AUTHOR,
  data: { title: "Name of the wind" },
};

const docEnum4: Ressource4<object> = {
  uid: 1,
  ressourceName: RessourceType.FILM,
  data: { name: "Daniel" },
};
