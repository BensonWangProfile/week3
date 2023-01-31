"use strict";

// toggle button
var toggleBtn = document.querySelector("#toggleBtn");
var menu = document.querySelector(".navbar"); //要用class才可以用classList

toggleBtn.addEventListener("click", function () {
  menuToggle();
});

function menuToggle() {
  menu.classList.toggle("top-[-100%]");
  menu.classList.toggle("top-[84px]");
}
//# sourceMappingURL=all.js.map
