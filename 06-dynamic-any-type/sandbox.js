// dynamic type with any type in TypeScript
var age = 25;
age = "Hello"; // -> OK
console.log(age);
age = true;
console.log(age);
age = {
    name: "Daniel"
};
console.log(age);
// ----------------------------
var mixed = [];
mixed.push(5);
mixed.push("Helllo");
mixed.push(true);
console.log(mixed);
// declaring object sructure
var ninja;
ninja = {
    name: "Ryu",
    ageOld: 29
};
console.log(ninja);
ninja = {
    name: 29,
    ageOld: "Ruy"
};
console.log(ninja);
//---------------------
var ninjaSuper;
ninjaSuper = {
    name: "Ryu",
    ageOld: 29
};
console.log(ninjaSuper);
ninjaSuper = {
    name: 29,
    ageOld: "Ruy" // Error : cant revert string and number
};
console.log(ninjaSuper);
