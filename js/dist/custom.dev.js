"use strict";

// Start Cards
// Click Button butt
// var divWindow = document.getElementById("cardWindow"),
//     buttonWindow = document.getElementById("butt");
// function hhh() {
//     "use strict";
//     divWindow.classList.toggle("hidden");
// };
var runWindow = document.getElementById("myWindow"),
    runButton = document.getElementById("show"),
    runSpan = document.getElementsByClassName("close")[0];

runButton.onclick = function () {
  runWindow.style.display = "block";
}; // filter


filterSelection("engine");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, Arr1, arr2;
  Arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, Arr1, arr2;
  Arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), i);
    }
  }

  element.className = arr1.join(" ");
} // Add active class to the current button (highlight it)


var btnWindowHeader = document.getElementById("windowHeader");
var btns = btnWindowHeader.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = docuement.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // End Cards