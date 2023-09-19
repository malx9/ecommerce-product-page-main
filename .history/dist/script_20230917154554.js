"use strict";

const overlay = document.getElementById("overlay");

// desktop photo gallery variables
const mainPicture = document.getElementById("main-picture");

// lightbox variables
const lbShow = document.getElementById("lb-show");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
const lbMainPic = document.getElementById("lb-mainpic");
const lbThumbnail = document.querySelectorAll(".lb-thumbnail");

// mobile side menu variables
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");

// cart (header) variables
const cartBtn = document.getElementById("cart-button");
const cartShow = document.getElementById("cart-show");
const cartEmpty = document.getElementById("cart-empty");
const cartItemsIn = document.getElementById("cart-itemsin");

// LIGHTBOX GALLERY_____________________

mainPicture.addEventListener("click", () => {
  lbShow.classList.remove("inactive");
  overlay.classList.remove("inactive");
});

if (screen.width >= 1009) {
  overlay.addEventListener("click", () => {
    lbShow.classList.add("inactive");
    overlay.classList.add("inactive");
  });
}

let currentpicID = 1;

lbNext.addEventListener("click", () => {
  if (currentpicID === 4) {
    return;
  } else if (currentpicID < 4) {
    currentpicID++;
    lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
    console.log("currentpicID is now", currentpicID);
  }
});

lbPrev.addEventListener("click", () => {
  if (currentpicID == 1) {
    return;
  } else if (currentpicID >= 1) {
    currentpicID--;
    lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
    console.log("currentpicID is now", currentpicID);
  }
});

lbThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const src = thumbnail.getAttribute("src");
    const part = src.split("-");
    const clickedThumbnail = part[2];
    currentpicID = clickedThumbnail;
    lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
  });
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

cartBtn.addEventListener("blur", () => {
  cartShow.classList.add("inactive");
});
