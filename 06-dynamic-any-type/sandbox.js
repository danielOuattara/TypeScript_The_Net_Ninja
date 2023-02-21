// dynamic type with any type in TypeScript
var age = 25;
age = true; // -> accepted
age = "Hello"; // -> accepted
age = {
    // -> accepted
    name: "Daniel"
};
console.log(age);
// ----------------------------
var mixed = [];
mixed.push(5);
mixed.push("Hello");
mixed.push(true);
console.log(mixed);
// declaring object structure
var ninja;
ninja = {
    // giving key-value to ninja object
    name: "Ryu",
    ageOld: 29
};
console.log(ninja);
ninja = {
    // giving key-value to ninja object
    name: 29,
    ageOld: "Ruy"
};
console.log(ninja);
//---------------------
var ninjaSuper;
ninjaSuper = {
    // giving key-value to ninjaSuper object
    name: "Ryu",
    age: 29
};
console.log(ninjaSuper);
ninjaSuper = {
    // giving key-value to ninjaSuper object
    name: 29,
    age: "Ruy"
};
console.log(ninjaSuper);
