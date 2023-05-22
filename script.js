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
let x;
function setRandom() {
  let random = Math.round(Math.random() * 24);
  circles[random].classList.toggle("banaan");
  circles[random].setAttribute("r", "6");
}
setInterval(function () {
  setRandom();
}, 1000);
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
let showDiv1 = true;
div1.style.opacity = "0";
div2.style.opacity = "1";
div2.style.filter = "blur(0px)";
for (let i = 0; i < one.length; i++) {
  one[i].style.opacity = "0";
}
for (let i = 0; i < two.length; i++) {
  two[i].style.opacity = "1";
}
setInterval(() => {
  if (showDiv1) {
    div1.style.opacity = "0";
    div2.style.opacity = "1";
    for (let i = 0; i < one.length; i++) {
      one[i].style.opacity = "0";
    }
    for (let i = 0; i < two.length; i++) {
      two[i].style.opacity = "1";
    }

    div2.style.filter = "blur(0px)";
  } else {
    div1.style.opacity = "1";
    div1.style.filter = "blur(0px)";
    div2.style.opacity = "0";
    for (let i = 0; i < one.length; i++) {
      one[i].style.opacity = "1";
    }
    for (let i = 0; i < two.length; i++) {
      two[i].style.opacity = "0";
    }
  }

  showDiv1 = !showDiv1;
}, 6000);

// const india = document.querySelector(".india");
// const ind = document.getElementById("ind");
// const sa = document.getElementById("sa");
// const sa = document.getElementById("bra");
// ind.addEventListener("mouseover", function () {
//   ind.style.fill = "orange";
//   india.style.color = "orange";
// });
// ind.addEventListener("mouseout", function () {
//   ind.style.fill = "rgb(13, 188, 57)";
//   india.style.color = "#aeaeae";
// });
const countries = document.querySelectorAll(".pin");

countries.forEach((country) => {
  country.addEventListener("mouseover", () => {
    const countryCode = country.getAttribute("data-country");
    document.getElementById(`${countryCode}`).style.color = "orange";
    country.style.fill = "orange";
  });
  country.addEventListener("mouseout", () => {
    const countryCode = country.getAttribute("data-country");
    country.style.fill = "rgb(13, 188, 57)";
    document.getElementById(`${countryCode}`).style.color = "white";
  });
});
