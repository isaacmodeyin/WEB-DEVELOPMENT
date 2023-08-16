let myHouse = {
  numRooms: 5, // property
  colorHouse: "blue", // property
  kitchenTen: "",
  name: "Blue House",

  allowPeople: function () {
    // Method
    let occupation = prompt("enter");
    if (occupation.toUpperCase() === "DEVELOPER") {
      console.log("You're Welcome 💻🤑👨🏼‍💻");
    } else {
      console.log("Wrong Address");
    }
  },

  napTime: function () {
    alert("Sleep by 13:00");
  },
};

myHouse.allowPeople();

let bottle = {
  color: "pink",
  shape: "cylinder",
  used: function (content) {
    console.log("drink " + content);
  },
};

//  ACCESSING THE CONTENT OF AN OBJECT

console.log(bottle);
console.log(bottle.color);
console.log(bottle["color"]);

bottle.used("water");
bottle.used("coffee");
bottle.used("garri");

console.log(myHouse);
















// let myHouse = {
//   numRooms: 5,
//   allowPeople: function () {
//     let occupation = prompt("What is your occupation?");
//     if (occupation.toLowerCase() === "developer") {
//       console.log("You're Welcome")
//     } else {
//       console.log("Get out my friend 🐔😝, we need developers here!!!")
//     }
//   }
// }

// let bottle = {
//   color: "Pink",
//   shape: "cylinder",
//   used: function (content) {
//     console.log("drink " + content);
//   },
// };

// // ACCESSING THE CONTENT OF AN OBJECT
// console.log(bottle);
// console.log(bottle.color);
// console.log(bottle["color"]);

// bottle.used("water");
// bottle.used("pepsi")

// myHouse.allowPeople();