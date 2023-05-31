const nftContainer = document.querySelector(".nft-container");
const nftSlider = document.querySelector(".nft-slider");
const nftSlidersCard = document.querySelectorAll(".nft-slider_card");
const nftBtnPrev = document.querySelector("#nft-btn-prev");
const nftBtnNext = document.querySelector("#nft-btn-next");
const nftSlidesCount = nftSlidersCard.length;

const aboutContainer = document.querySelector(".about-container");
const aboutSlider = document.querySelector(".about-slider");
const aboutSlidersCard = document.querySelectorAll(".about-slider_card");
const aboutBtnPrev = document.querySelector("#about-btn-prev");
const aboutBtnNext = document.querySelector("#about-btn-next");
const aboutSlidesCount = aboutSlidersCard.length;

// slider.style.left = `-${(nftSlidesCount - 1) * 100}vh`;

let activeSlideIndexNft = 0;
let activeSlideIndexAbout = 0;

nftBtnPrev.addEventListener("click", () => {
  changeSlideNft("left");
});

nftBtnNext.addEventListener("click", () => {
  changeSlideNft("right");
});

aboutBtnPrev.addEventListener("click", () => {
  changeSlideAbout("left");
});

aboutBtnNext.addEventListener("click", () => {
  changeSlideAbout("right");
});

function changeSlideNft(direction) {
  if (direction === "right") {
    activeSlideIndexNft++;
    if (activeSlideIndexNft === nftSlidesCount) {
      activeSlideIndexNft = 0;
    }
  } else if (direction === "left") {
    activeSlideIndexNft--;
    if (activeSlideIndexNft < 0) {
      activeSlideIndexNft = nftSlidesCount - 1;
    }
  }

  const width = nftContainer.clientWidth;

  nftSlider.style.transform = `translateX(-${activeSlideIndexNft * width}px`;
}

function changeSlideAbout(direction) {
  if (direction === "right") {
    activeSlideIndexAbout++;
    if (activeSlideIndexAbout === aboutSlidesCount) {
      activeSlideIndexAbout = 0;
    }
  } else if (direction === "left") {
    activeSlideIndexAbout--;
    if (activeSlideIndexAbout < 0) {
      activeSlideIndexAbout = aboutSlidesCount - 1;
    }
  }

  const width = aboutContainer.clientWidth;

  aboutSlider.style.transform = `translateX(-${
    activeSlideIndexAbout * width
  }px`;
}

history.pushState("", document.title, window.location.pathname); //https://www.navy.online
