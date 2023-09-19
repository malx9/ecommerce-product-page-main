"use strict";

const overlay = document.getElementById("overlay");

// mobile photo gallery variables
const mobilePrev = document.getElementById("mobile-prev");
const mobileNext = document.getElementById("mobile-next");

// desktop photo gallery variables
const mainPicture = document.getElementById("main-picture");
const mainThumbnail = document.querySelectorAll(".main-thumbnail");

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

// cart functionality variables
const cartMinus = document.getElementById("cart-minus");
const cartPlus = document.getElementById("cart-plus");
const cartAdd = document.getElementById("cart-add");
const cartAmount = document.getElementById("cart-current-amount");
const cartItemsAmount = document.getElementById("cart-items-amount");
const cartTotal = document.getElementById("cart-total");
const cartRemoveBtn = document.getElementById("cart-remove-btn");
const cartAmountIndicator = document.getElementById("cart-amount-indicator");
const checkout = document.getElementById("checkout");

// CART FUNCTIONALITY

let itemsInTemp = 0; // amount of items added but not yet put in the cart
let itemsIn = [0]; // amount of items put in the cart (for calcs)
let total = 0;

cartPlus.addEventListener("click", () => {
  itemsInTemp = itemsInTemp + 1;
  cartAmount.innerHTML = itemsInTemp;
  console.log(itemsInTemp);
}),
  cartMinus.addEventListener("click", () => {
    if (itemsInTemp < 1) {
      return false;
    } else if (itemsInTemp >= 0) {
      itemsInTemp = itemsInTemp - 1;
      cartAmount.innerHTML = itemsInTemp;
      console.log(itemsInTemp);
    }
  }),
  cartAdd.addEventListener("click", () => {
    if (itemsInTemp == 0) {
      return false;
    } else {
      itemsInTemp = itemsIn[0] + itemsInTemp;
      itemsIn[0] = itemsInTemp;
      cartItemsAmount.innerHTML = itemsIn[0];
      cartAmountIndicator.innerHTML = itemsIn[0];
      cartAmountIndicator.classList.remove("inactive");
      cartEmpty.classList.add("inactive");
      cartItemsIn.classList.remove("inactive");
      checkout.classList.remove("inactive");

      total = 125 * itemsIn[0];
      cartTotal.innerHTML = "$" + total + ".00";

      itemsInTemp = 0;
      cartAmount.innerHTML = 0;
      console.log(itemsIn);
    }
  }),
  cartRemoveBtn.addEventListener("click", () => {
    if (itemsIn[0] == 1) {
      cartEmpty.classList.remove("inactive");
      cartItemsIn.classList.add("inactive");
      checkout.classList.add("inactive");
      cartAmountIndicator.classList.add("inactive");
      cartShow.classList.add("inactive");
      itemsIn[0] = 0;
    } else {
      itemsIn[0] = itemsIn[0] - 1;
      cartItemsAmount.innerHTML = itemsIn[0];
      total = 125 * itemsIn[0];
      cartTotal.innerHTML = "$" + total + ".00";
      cartAmountIndicator.innerHTML = itemsIn[0];
    }
  }),
  // MOBILE GALLERY_____________________

  mobilePrev.addEventListener("click", () => {
    if (currentpicID == 1) {
      return;
    } else if (currentpicID >= 1) {
      currentpicID--;
      mainPicture.src = `images/image-product-${currentpicID}.jpg`;
      console.log("currentpicID is now", currentpicID);
    }
  });

mobileNext.addEventListener("click", () => {
  if (currentpicID === 4) {
    return;
  } else if (currentpicID < 4) {
    currentpicID++;
    mainPicture.src = `images/image-product-${currentpicID}.jpg`;
    console.log("currentpicID is now", currentpicID);
  }
});

// DESKTOP GALLERY_____________________

mainThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const src = thumbnail.getAttribute("src");
    const part = src.split("-");
    const clickedThumbnail = part[2];
    currentpicID = clickedThumbnail;
    mainPicture.src = `images/image-product-${currentpicID}.jpg`;
  });
});

// LIGHTBOX GALLERY_____________________

mainPicture.addEventListener(
  "click",
  () => {
    if (window.innerWidth > 1009) {
      lbShow.classList.remove("inactive");
      overlay.classList.remove("inactive");
    } else return false;
  },

  overlay.addEventListener("click", () => {
    lbShow.classList.add("inactive");
    overlay.classList.add("inactive");
  })
);

let currentpicID = 1;

lbNext.addEventListener("click", () => {
  if (currentpicID === 4) {
    return;
  } else if (currentpicID < 4) {
    currentpicID++;
    lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
    mainPicture.src = `images/image-product-${currentpicID}.jpg`;
    console.log("currentpicID is now", currentpicID);
  }
});

lbPrev.addEventListener("click", () => {
  if (currentpicID == 1) {
    return;
  } else if (currentpicID >= 1) {
    currentpicID--;
    lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
    mainPicture.src = `images/image-product-${currentpicID}.jpg`;
    console.log("currentpicID is now", currentpicID);
  }
});

function activateThumbnail() {
  const src = this.getAttribute("src");
  const part = src.split("-");
  const clickedThumbnail = part[2];
  currentpicID = clickedThumbnail;
  lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
  mainPicture.src = `images/image-product-${currentpicID}.jpg`;
  // lbThumbnail.classList.remove("thumbnail-border");
  this.classList.add("thumbnail-border");
}

lbThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", activateThumbnail);
});

// lbThumbnail.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", () => {
//     const src = thumbnail.getAttribute("src");
//     const part = src.split("-");
//     const clickedThumbnail = part[2];
//     currentpicID = clickedThumbnail;
//     lbMainPic.src = `images/image-product-${currentpicID}.jpg`;
//     mainPicture.src = `images/image-product-${currentpicID}.jpg`;
//   });
// }); // THIS WORKS FINE TOO BUT IT MAY NEEDS A REGULAR FUNCTION FOR THIS KW

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

overlay.addEventListener("click", () => {
  menu.classList.add("inactive");
  overlay.classList.add("inactive");
});

// CART (HEADER)_____________________

cartBtn.addEventListener("click", () => {
  if (cartShow.classList.contains("inactive")) {
    cartShow.classList.remove("inactive");
  } else if (!cartShow.classList.contains("inactive")) {
    cartShow.classList.add("inactive");
  }
});

// cartBtn.addEventListener("blur", () => {
//   cartShow.classList.add("inactive");
// });
