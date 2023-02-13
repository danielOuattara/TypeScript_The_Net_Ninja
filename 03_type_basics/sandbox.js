// straight type
var character = "Black"; // 'character' is a invariable string
// character = "Leo";      // --> Err: const; cannot change
var city = "Dubai"; // 'city' will hold string only
// city = 30;       // Error
var age = 30; // 'age' will always hold a number
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
/*

NOTE: All the control process built in circonfrence2() method
      is quickly and simply handled in circonfernece() method
      by TypeScript in few lines

*/
