/*
declare a variable variable with a string of 8

delare a variable with an output of 

*/

let a = "8";
let b = 2;  //"2"
let c = "k";
console.log(typeof b);

// converting a string to a number
a = Number(a);   // first method to conver a string into a number 
a = parseInt(a); // second methond of converting a string into a number

// Converting Booleans to Number
let d = Number(true);
let e = Number(false);
console.log("true converted to a number has value", d);
console.log("false converted to a number has value", e);

c = Number(a); // convert k into a number NOTE: it is not possible to convert a sring that is a character into a number

let result; 

result = a + b;
console.log("a + b =", result);
// result = a + c;

// result = a - b;
// result = a * b;

// converting to a string 
b = String(b);

console.log(typeof b);
console.log(result);
document.write(result);


result = a + c;

// result = a - b;
// result = a * b;


console.log(a);
console.log(b);
console.log(result);

