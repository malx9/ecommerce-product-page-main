"use strict";

const overlay = document.getElementById("overlay");

const mainPicture = document.getElementById("main-picture");
const lbShow = document.getElementById("lb-show");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
const lbMainPic = document.getElementById("lb-mainpic");
const lbThumbnail = document.getElementById("lb-thumbnail");

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");

const cartBtn = document.getElementById("cart-button");
const cartShow = document.getElementById("cart-show");
const cartEmpty = document.getElementById("cart-empty");
const cartItemsIn = document.getElementById("cart-itemsin");

// LIGHTBOX GALLERY_____________________

mainPicture.addEventListener(
  "click",
  () => {
    lbShow.classList.remove("inactive");
    overlay.classList.remove("inactive");
  },

  overlay.addEventListener("click", () => {
    lbShow.classList.add("inactive");
    overlay.classList.add("inactive");
  })
);

let currentpicID = 0;

lbNext.addEventListener("click", () => {
  lbMainPic.src = `images/image-product-${currentpicID++}.jpg`;
  console.log("currentpicID is now", currentpicID);
});

// SIDE MENU FUNCTIONALITY_____________________

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

// CART (HEADER)_____________________

cartBtn.addEventListener("click", () => {
  if (cartShow.classList.contains("inactive")) {
    cartShow.classList.remove("inactive");
  } else if (!cartShow.classList.contains("inactive")) {
    cartShow.classList.add("inactive");
  }
});
