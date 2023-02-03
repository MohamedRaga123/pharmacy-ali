// Menu Order
let orders = document.querySelector(".orders");
let btnClose = document.querySelector(".close-orders");
let contant_order = document.querySelector(".contant-Order");
orders.addEventListener("click", function () {
  contant_order.style.left = `0`;
});
btnClose.addEventListener("click", function () {
  contant_order.style.left = `-100%`;
});

// Menu links Header
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(`active`);
  navMenu.classList.toggle(`active`);
});

// up btn
let span = document.querySelector(".up");
console.log(span);
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
