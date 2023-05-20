// setRandomClass();
// setInterval(function () {
//   setRandomClass();
// }, 2000); // number of milliseconds (2000 = 2 seconds)

// function setRandomClass() {
//   var ul = $("svg");
//   var items = ul.find("circle");
//   var number = items.length;
//   var random = 10;
//   items.removeClass("banaan");
//   items.eq(random).addClass("banaan");

//   // Increase the radius of the selected circle
//   items.eq(random).attr("r", "10"); // Update the "r" attribute value to increase the radius
// }
const circles = document.querySelectorAll(".pin");
console.log(circles);
let x;
function setRandom() {
  let random = Math.round(Math.random() * 25);
  circles[random].classList.toggle("banaan");
  circles[random].setAttribute("r", "7");
}
setInterval(function () {
  setRandom();
}, 1000);
