// straight type
var character = "Black"; // character will also be a string
// character = "Leo"; // --> Err: const cannot change
var city = "Dubai"; // character will also be a string only
// city = 30; // Error
var age = 30; // age will always be a number only
var isBlackBlet = false;
city = "Amsterdam ";
// -----------------------------------
var circonference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circonference(4));
// ------------------------------------
var circonference2 = function (diameter) {
    try {
        if (typeof diameter != "number") {
            throw Error("ERROR : diameter must be an number");
        }
        return diameter * Math.PI;
    }
    catch (error) {
        console.log(error.message);
    }
};
console.log(circonference2("A"));
