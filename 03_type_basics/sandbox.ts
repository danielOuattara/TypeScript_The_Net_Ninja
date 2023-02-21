// straight type

const character = "Black"; // 'character' is an invariable string
// character = "Leo";      // --> Err: const; cannot change

let city = "Dubai"; // 'city' will hold string only
// city = 30;       // Error
city = "Amsterdam ";

let age = 30; // 'age' will always hold a number

let isBlackBlet = false; // isBlackBelt is always a boolean

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

/* 

NOTE: All the control process built in circonfrence2() method
      is quickly and simply handled in circonfernece() method
      by TypeScript in few lines

*/
