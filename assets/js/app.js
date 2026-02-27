// ----------------------------- VARIABLE -----------------------------------
// menu
let btnOpenMenu = document.getElementById("open-btn-menu");
let btnCloseMenu = document.getElementById("close-btn-menu");
let menuMobile = document.getElementById("menu-mobile");
// slider-select
let sliderBtns = document.querySelectorAll('#btn-slider')
let sliders = document.querySelectorAll('.products-slider')
// ----------------------------- LISTENER -----------------------------------
// menu
// menuClose
btnOpenMenu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  document.body.classList.add("active");
});
// menuOpen
btnCloseMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.classList.remove("active");
});
// ----------------------------- FUNCTION -----------------------------------
// slider-select
// function
function btnSlider(i){
  sliderBtns.forEach(btn =>{
    btn.classList.remove('active')
  })
  sliders.forEach(slider =>{
    slider.classList.remove('active')
  })
  sliderBtns[i].classList.add('active')
  sliders[i].classList.add('active')
}
