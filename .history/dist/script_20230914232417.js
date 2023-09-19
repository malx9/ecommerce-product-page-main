"use strict";

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener(
  "click",
  () => menu.classList.remove("inactive"),
  overlay.classList.add("inactive")
);

// closeBtn.addEventListener(
//   "click",
//   () => menu.classList.add("inactive"),
//   overlay.classList.add("inactive")
// );
