
// querySelector(selector)

const h1 = document.querySelector("h1");yu;


const a = document.querySelector(".a");

const b = document.querySelector("#b");

// console.log(h1);
// console.log(a);
// console.log(b);


//querySelectorAll()
const allH1 = document.querySelectorAll("h1");

console.log(allH1[1])
console.log(allH1);



const sea = document.querySelectorAll("div");

// const seafood = document.querySelector(".seafood");
// const seafood = document.querySelector("#seafood");

console.log(sea);

console.log(sea[0]);
console.log(sea[1]);
console.log(sea[2]);


// getElementById()
const seafood = document.getElementById("seafood");
console.log(seafood);

// getElementsByClassName()
const seafood_1 = document.getElementsByClassName("seafood");
console.log(seafood_1);

// getElementById()
const seaafood =
    document.getElementById("seafood");
console.log(seaafood);

// getElementsByTagName()
const div = document.getElementsByTagName("div");
console.log(div);