// toggle button
const toggleBtn = document.querySelector("#toggleBtn");
const menu = document.querySelector(".navbar");  //要用class才可以用classList

toggleBtn.addEventListener("click", function(){
  menuToggle();
});


function menuToggle(){
  menu.classList.toggle("top-[-100%]");
  menu.classList.toggle("top-[84px]");
}

