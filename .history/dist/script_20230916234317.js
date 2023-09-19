"use strict";

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");

const cartShow = document.getElementById("cart-show");
const cartEmpty = document.getElementById("cart-empty");

// SIDE MENU FUNCTIONALITY

menuBtn.addEventListener("click", () => {
  menu.classList.remove("inactive");
  overlay.classList.remove("inactive");
  console.log("menuBtn CLICK");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("inactive");
  overlay.classList.add("inactive");
  console.log("closeBtn CLICK");
});

// CART (HEADER)
