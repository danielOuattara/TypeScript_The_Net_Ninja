"use strict";
// ------------------------ 1
var logDetails = function (uuid, item) {
    console.log("".concat(item, " has a uuid of ").concat(uuid));
};
logDetails("123", "x-plane");
// ------------------------ 2
var greet = function (user) {
    console.log(" ".concat(user.name, " uuid is ").concat(user.uuid));
};
greet({ name: "Daniel", uuid: 13453 });
//------------------------- 3
var greet2 = function (user) {
    console.log("".concat(user.name, " say hello !"));
};
// new -------------------------- 1
var logDetails2 = function (uuid, item) {
    console.log("".concat(item, " has a uuid of ").concat(uuid));
};
// new --------------------------- 2
var greet3 = function (user) {
    console.log("".concat(user.name, " say hello !"));
};
// new 3
var greet4 = function (user) {
    console.log("".concat(user.name, " say hello !"));
};
