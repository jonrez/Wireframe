var header = document.querySelector(".header")

header.addEventListener("mouseover", (event) => {
  var btn = event.target;
  btn.setAttribute("style", "color:#B9D9EB;")
}, false);

header.addEventListener("mouseout", (event) => {
  var btn = event.target;
   btn.setAttribute("style", "color:white;")
}, false);


window.onscroll = function() {myFunction()};

// Get the header

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}






// const header = document.querySelector(".header")
// const signature = document.querySelector(".signature")

// function createButton(name){
// var ul = document.createElement("UL")
// var btn = document.createElement("BUTTON")
// var label = document.createElement("LABEL")
// label.textContent = `${name}`
// btn.appendChild(label)
// ul.appendChild(btn)
//
//
// return ul
// }
//
// function appendToHeader(buttonName){
//   const btn = createButton(buttonName)
//   header.insertBefore(btn, signature)
// }

// appendToHeader('My Projects')
// appendToHeader('Education')
// appendToHeader('Work History')
