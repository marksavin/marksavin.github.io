<<<<<<< HEAD
let checked = JSON.parse(localStorage.getItem("checkbox1"));
document.getElementById("checkbox1").checked = checked;

if (document.getElementById("checkbox1").checked === true) {
  myFunction();
}

function myFunction() {
  var element = document.getElementsByClassName("intro-blue");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle("intro-red");
    console.log(element[i]);
  }

  var element = document.getElementsByClassName("intro-btn-blue");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle("intro-btn-red");
    console.log(element[i]);
  }
}

function save() {
  let checkbox = document.querySelector("#checkbox1");
  localStorage.setItem("checkbox1", checkbox.checked);
}
=======
let checked = JSON.parse(localStorage.getItem("checkbox1"));
document.getElementById("checkbox1").checked = checked;

if (document.getElementById("checkbox1").checked === true) {
  myFunction();
}

function myFunction() {
  var element = document.getElementsByClassName("intro-blue");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle("intro-red");
    console.log(element[i]);
  }

  var element = document.getElementsByClassName("intro-btn-blue");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle("intro-btn-red");
    console.log(element[i]);
  }
}

function save() {
  let checkbox = document.querySelector("#checkbox1");
  localStorage.setItem("checkbox1", checkbox.checked);
}
>>>>>>> 11b12d6f1d009aaaa5bb3a146fdff8a0bb40373b
