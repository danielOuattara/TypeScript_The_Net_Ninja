"use strict";
var greeting;
// () => void
//
/* example 1
==============*/
var greet; // <=== function signature
// 'greet' definition must match the above signature
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//
/* example 2
===============*/
var calc; // <=== function signature
// 'calc' definition must match the above signature
calc = function (number1, number2, action) {
    if (action === "add") {
        return number1 + number2;
    }
    else {
        return number1 - number2;
    }
};
//
/* example 3
===============*/
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " y.o"));
};
logDetails({ name: "Anna", age: 37 });
var logDetails2 = function (obj) { return undefined; };
logDetails2 = function (samurai) {
    console.log("".concat(samurai.name, " is ").concat(samurai.age, " y.o"));
};
logDetails2({ name: "John", age: 32 });
