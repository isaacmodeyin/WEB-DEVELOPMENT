const btn = document.querySelectorAll("button");
console.log(btn);

// Select the body of my document
console.log(document.body);

// document.addEventListener("event", callBackFunction)

// btn[0].addEventListener("click", saySomething);

// function saySomething() {
//     alert("Hello");
// }

btn[0].addEventListener("click", () => {
   if(document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "";
    btn[0].innerText = "Turn Black";
    // textConnect
    } else {
        document.body.style.backgroundColor = "black";
        btn[0].innerText = "Back To Default";
   }


});

btn[1].addEventListener("click", () => {
    document.body.style.backgroundColor="green"
});

btn[2].addEventListener("click", () => {
    document.body.style.backgroundColor="yellow"
});



btn[2].addEventListener("click", () => {
    alert("Hello");
});