const popUpContainer = document.getElementById("js-toggle-pop-up");
const shareImgContainer = document.getElementById("js-share-img-container");
const shareImage = document.getElementById("js-share-image");

// Mobile View Elements
const mobileShareIcon = document.getElementById("js-mobile-share-icon");
const mobileShareContainer = document.getElementById(
  "js-mobile-view-share-container"
);
const avatarNameContainer = document.getElementById("js-avatar-name-container");

// Define Media Query
const mediaQuery = window.matchMedia("(max-width: 650px)");

shareImgContainer.addEventListener("click", function () {
  if (mediaQuery.matches) {
    avatarNameContainer.classList.toggle("hide-container");
    mobileShareContainer.classList.toggle("show-container");
  } else {
    shareImgContainer.classList.toggle("toggle-color");
    popUpContainer.classList.toggle("hide-pop-up");
    shareImage.classList.toggle("toggle-svg-color");
  }
});

// Mobile View Event Listener

mobileShareIcon.addEventListener("click", function () {
  avatarNameContainer.classList.toggle("hide-container");
  mobileShareContainer.classList.toggle("show-container");
});
