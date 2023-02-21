// ------------------------ 1
const logDetails = (uuid: string | number, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};

logDetails("123", "x-plane");

// ------------------------ 2
const greet = (user: { name: string; uuid: string | number }) => {
  console.log(` ${user.name} uuid is ${user.uuid}`);
};

greet({ name: "Daniel", uuid: 13453 });

//------------------------- 3

const greet2 = (user: { name: string; uuid: string | number }) => {
  console.log(`${user.name} say hello !`);
};

/* There is many Code Rep above, how ot handle this ? 
------------------------------------------------------*/

/* 
functions that use the same parameter: 
to reduce verbose => use of "type" aliases to DRY 

===> keyword : "type" used to define aliases
type definition: types can be combined
*/

// define a alias
type StringOrNumber = string | number;

// new -------------------------- 1
const logDetails2 = (uuid: StringOrNumber, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};

// define another aliases; types can be combined
type ObjectWithName = { name: string; uuid: StringOrNumber };

// new --------------------------- 2
const greet3 = (user: { name: string; uuid: StringOrNumber }) => {
  console.log(`${user.name} say hello !`);
};

// new 3

const greet4 = (user: ObjectWithName) => {
  console.log(`${user.name} say hello !`);
};
