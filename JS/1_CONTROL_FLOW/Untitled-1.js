let code = "JavaScript";
console.log(code);

// LOGICAL OPERATORS
// LOGICAL AND
// && - and
// a and b - wrong
// a && b - right

console.log(true && true); // output - true
console.log(true && true && false); // output - false

// LOGINAL OR
// || - or
// a or b - wrong
// a || b - right

console.log(true || true); // output - true
console.log(true || true || false); // output - true

// EQUALITY
// ===
console.log(true === true); // true
console.log(false === true); // false

// NOT EQUAL
// !==
console.log(true !== true); // false
console.log(false !== true); // true

// GREATER THAN
// >
console.log(1 > 1); // false

// LESS THAN
// <
console.log(1 < 1); // false

// GREATER THAN OR EQUAL TO
// >=
console.log(1 >= 1); // true

// LESS THAN OR EQUAL TO
// <=
console.log(1 <= 21); // true

// IF...ELSE CONDITIONAL STATEMENT
let a = 0,
  b = 1;

// if (condition) {
//   // if condition is true
// } else {
//   // if condition is not true
// }
if (a === b) {
  console.log("Yes");
} else {
  console.log("No");
}

// Ex1
// Use the if...else statement to check if the age is greater than or equal to 18:

// if true console.log('You can sign up.');
// if false console.log('You must be at least 18 to sign up.');
let age = 18;
if (age >= 18) {
  console.log("You can sign up.");
} else {
  console.log("You must be at least 18 to sign up.");
}

// Ex2
// Use the if...else statement to check if the age is greater than or equal to 18 and the user is from Nigeria:
let anotherAge = 18;
let country = "Nigeria";

if (anotherAge >= 19 && country === "Nigeria") {
  console.log("You can get a driving license.");
} else {
  console.log("You are not eligible to get a driving license.");
}
// if true console.log('You can get a driving license.');
// if false console.log('You are not eligible to get a driving license.');

let isHungry = false;

// if your are hungry console.log('Eat something.');
if (isHungry) {
  console.log("Eat something.");
} else {
  console.log("Sit and Code.");
}
// if false console.log('Sit and Code.');
