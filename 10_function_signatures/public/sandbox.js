"use strict";
var greeting;
// () => void
/* exemple 1
==============*/
var greet; // <=== function signature
greet = function (name, greeting) {
    // greet here must match the above signature
    console.log("".concat(name, " says ").concat(greeting));
};
/* exemple 2
===============*/
var calc;
calc = function (number1, number2, action) {
    if (action === "add") {
        return number1 + number2;
    }
    else {
        return number1 - number2;
    }
};
/* exemple 3
===============*/
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " y.o"));
};
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " y.o"));
};
