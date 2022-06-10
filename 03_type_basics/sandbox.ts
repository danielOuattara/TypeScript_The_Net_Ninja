// straight type

const character = "Black"; // character will also be a string
// character = "Leo"; // --> Err: const cannot change

let city = "Dubai"; // character will also be a string only
// city = 30; // Error

let age = 30; // age will always be a number only

let isBlackBlet = false;

city = "Amsterdam ";

// -----------------------------------

const circonference = (diameter: number): number => {
  return diameter * Math.PI;
};

console.log(circonference(4));

// ------------------------------------

const circonference2 = (diameter) => {
  try {
    if (typeof diameter != "number") {
      throw Error("ERROR : diameter must be an number");
    }
    return diameter * Math.PI;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(circonference2("A"));
