// function functionName() {
// // tasks
// }

// functionName()

function greetNewUsers(username) {
  console.log("Hello " + username + " How are you");
  console.log(`Hello ${username} how are you`);
}

// To gain access into my function, I have to invoke/call the function

greetNewUsers("John");
greetNewUsers("Isaac");
greetNewUsers("Jude");

function addThreeNum(a, b) {
  const c = a + b;
  console.log(c);
}

// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter a number"));
// addThreeNum(num1, num2);

// A FUNCTION THAT TAJES IN TWO OR MORE ARGUMENT AND MUNTIPLIES THEM



function multiplyThreeNum(j, w, m) {
  const multi = j * w * m;
  console.log(multi);
}

let num4 = prompt("Enter a number4");
let num5 = prompt("Enter a number5");
let num6 = prompt("Enter a number6");

multiplyThreeNum(num4, num5, num6);

multiplyThreeNum(2, 5, 4);
multiplyThreeNum(8, 7, 8);
multiplyThreeNum(5, 5, 1);

// A FUNCTION THAT FINDS THE DIFFERENT BETWEEN TWO NUMBERS

function subtrNum(g, y) {
  let answ = g - y;
  console.log(answ);
}

subtrNum(8, 4);

// A FUNCTION THAT FINDS THE DIVISION OF TWO NUMBERS

function divNum(z, e) {
  let divTotal = z / e;
  console.log(divTotal);
}

divNum(50, 2);
divNum(20, 11); 


