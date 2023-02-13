"use strict";
var greeting = function () {
    return "Hello World !";
};
console.log(greeting());
// greeting = "Hello!"  // X Incorrect: greet is known to be a function, not a string
//----------------------------------------------------
var greeting2; // fucntion declaration
greeting2 = function () {
    console.log("Hello World !");
};
greeting2();
//------------------------------------------------------
var add = function (a, b) {
    return a + b;
};
console.log(add(4, 7));
// console.log(add(4, '7')); // X Incorrect
//-------------------------------------------------------
// optionnal argument : c.
// Required parameter must come first
var add2 = function (a, b, c) {
    console.log("c = ", c);
    return a + b;
};
console.log("add2(1, 3, 5) = ", add2(1, 3, 5));
console.log("add2(1, 3) = ", add2(1, 3));
//--------------------------------------------------------
// default parameter for c
var add3 = function (a, b, c) {
    if (c === void 0) { c = 1; }
    return (a + b) * c;
};
var resultAdd3 = add3(4, 3, 2); // type of type of add3
console.log(add3(3, 7, 5));
console.log(add3(3, 7));
//--------------------------------------------------------
// function type return
var add4 = function (a, b, c) {
    if (c === void 0) { c = 1; }
    return (a + b) * c;
};
var resultAdd4 = add3(4, 3, 2); // type of type of add4
// ---------------------------------------
// void function
var add5 = function (a, b, c) {
    if (c === void 0) { c = 1; }
    console.log(a + b);
};
console.log(add5(3, 7, 5));
console.log(add5(3, 7));
