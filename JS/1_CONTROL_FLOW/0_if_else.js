/*
let isaac = "Tech Guru";
let d = "Django";
const u = "Physics";
const f ="Fiscal policy"

console.log(isaac);
console.log(d);
console.log(u);
console.log(f);

alert("welcome to simple app made by izzycool")
*/
let code = "JavaScript"
console.log(code);

// LOGICAL AND
// LOGICAL OPERATORS
// && - and
// a and b - wrong
// a && b - right

console.log(true && true); // output - true
console.log(true && true && false); // output - false

//LOGICAL OR
// || - or
// a or b - wrong
// a || b - right

console.log(true || true); // output - true
console.log(true || true || false); // output - true

//EQUALITY
// === 
console.log(true === true); // true
console.log(false === true); // false

//NOT EQUAL
// !==
console.log(true !== true); // false
console.log(false !== true); // true

// GREATER THAN
// >
console.log(1 > 1); // false
console.log(2 > 1); // true

//LESS THAN
// <
console.log(1 < 3); // true

//GREATER THAN OR EQUAL TO
// >=
console.log(1 >= 1); // true
console.log(1 >= 5); //true
 
//LESS THAN OR EQUAL TO
// <=
console.log(1 <= 12); // true

// IF...ELSE
let a = 0;
let b = 1;

// if (condition) {
//     //if condition is true
// }
// else {
//     // if condition is not true
// }

if (a === b) {
    console.log("Yes");
}else {
    console.log("No");
}



//Ex1
//Use the if...else statement to check if the age is greater than or equal to 18:

// if true console.log("You can sign up.");
// if false console.log("You must be at least 18 to sign up.");
let age = 18;
if (age >= 18) {
    console.log("You can can sign up ");
} else {
    console.log("You must be at least 18 to sign up.");
}


//Ex2:
// Use the if...else statement to check if the age is greater than or equal to 18 and the user is from Nigeria:

//if true console.log("You can get a griving license.");
//if false console.log("You are not eligible to get a driving license.");
let anotherAge = 18;
let country = "Nigeria";

if (anotherAge >= 18 && country === "Nigeria") {
    console.log("You can get a driving license.");
} else {
    console.log("You are not eligible to get a driving license.");
}  
    
//Ex3:
//Use the if...else statement to tell you what to do if you are hungry:
//if you are hungry console.log("Eat something.");
//if 
let isHungry = false;

if (isHungry) {
    console.log
}






// let minAge = 18;
// // let tooYoung = ();

// if (minAge >= 18) {
//     console.log("You can sign up.");
// } else {
//     console.log("you must be at least 18 to sign up.")
// };


// ELSE....IF
// if (condition) {

// } else if (condition) {
    
// } else if (condition) {

// } else {

// }

//NaN means not a number

//check if the number (posotive, negative, or zero)
let number = Number(prompt("Enter a Number"));
if (number > 0) {
    console.log(number, "The number is positive");
} else if (number === 0) {
    console.log("The number is zero")
} else if (isNaN(number) === true) {
    console.log("What you passed is not a number, but a string");
} else {
    console.log(number, "The number is a negative number");
}