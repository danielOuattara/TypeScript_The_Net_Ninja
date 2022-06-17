// 1
const logDetails = (uuid: string | number, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};

// 2
const greet = (user: { name: string; uuid: string | number }) => {
  console.log(`${user.name} say hello !`);
};

// 3

const greet2 = (user: { name: string; uuid: string | number }) => {
  console.log(`${user.name} say hello !`);
};

// there is many Code Rep above, how ot handle this ?

// ----------------------------------------------------------------------

/* functions that use the same parameter: 
   to reduce verbose => use of "type" alliases to DRY 
*/

// ===> keyword : "type" used to define aliases

// type definition: types can be combined

type StringOrNumber = string | number; // define a alias
type ObjectWithName = { name: string; uuid: StringOrNumber }; // define another aliase

// new 1
const logDetails2 = (uuid: StringOrNumber, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};

// new 2
const greet3 = (user: { name: string; uuid: StringOrNumber }) => {
  console.log(`${user.name} say hello !`);
};

// new 3

const greet4 = (user: ObjectWithName) => {
  console.log(`${user.name} say hello !`);
};
