/* Arrays
============*/
var names = ["elle", "lui", "moi"];
names.push("vous"); // --> OK
names[names.length] = "Ils"; // --> OK
names.push(5); // --> error
name[0] = 4; // --> error
names = "song"; // --> Error
//-----
var countries = [];
countries.push("Burkina Faso");
countries.push("Mali");
countries.push("Guinnee");
//-----
// mix array: more manageable
var mixed = ["ken", 4, false];
mixed.push(12); // OK
mixed[3] = "anything"; // OK
//-----
var mixedValue = [];
mixedValue.push(true);
mixedValue.push("Hello");
mixedValue.push(34);
/* Objects
==============*/
var person = {
    firstName: "Joe",
    lastName: "Doe",
    age: 37
};
person.age = 38; // --> OK
person.age = "hello"; // --> Error
person.skills = ["computing", "parachut jump"]; //--> Error: not there when initialized
// Updating object values
person = {
    firstName: "Ana",
    lastName: "Doe",
    age: 29,
    skills: ["piano", "dancing"]
};
