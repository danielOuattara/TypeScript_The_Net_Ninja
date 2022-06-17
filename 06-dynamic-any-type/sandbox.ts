// dynamic type with any type in TypeScript

let age: any = 25;

age = "Hello"; // -> accepted

age = true; // -> accepted 

age = {  // -> accepted
  name: "Daniel",
};

console.log(age);

// ----------------------------

let mixed: any[] = [];
mixed.push(5);
mixed.push("Helllo");
mixed.push(true);
console.log(mixed);

// declaring object sructure
let ninja: { name: any; ageOld: any };

ninja = {
  // giving key-value to ninja object
  name: "Ryu",
  ageOld: 29,
};

console.log(ninja);

ninja = {
  // giving key-value to ninja object
  name: 29,
  ageOld: "Ruy",
};

console.log(ninja);

//---------------------

let ninjaSuper: { name: any; ageOld: number };

ninjaSuper = {
  // giving key-value to ninjaSuper object
  name: "Ryu",
  ageOld: 29,
};

console.log(ninjaSuper);

ninjaSuper = {
  // giving key-value to ninjaSuper object
  name: 29,
  ageOld: "Ruy", // Error : cant revert string and number
};

console.log(ninjaSuper);
