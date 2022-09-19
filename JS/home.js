const body =document.querySelector("body");

// // create dark/light mode 
const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");

function setDarkMode(e){
    e.preventDefault();
    body.style.background = "black";
    body.style.color = "white";

}

function setLightMode(e){
    e.preventDefault();
    body.style.background = "white";
    body.style.color = "black";    
}

lightmode.addEventListener("click",setLightMode);
darkmode.addEventListener("click",setDarkMode);

//call back function
// document.querySelector(".skatespan")
//     .addEventListener("click", function() {    
//         document.querySelector("#message").innerText="User has clicked on me!";
// });
const a =document.querySelector(".skatespan");
const b = document.querySelector("#messagespan");
a.onmouseover=function(){
    b.innerText="You clicked me !";
}
// document.querySelector(".skatespan")
//     .addEventListener("click", function() {    
//       console.log("User has clicked on the button!");
// });