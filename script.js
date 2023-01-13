const nextElement = document.querySelector(".next");

const prevElement = document.querySelector(".prev");

const imageContainerElement = document.querySelector(".image-container");

const imgElement = document.querySelectorAll("img");

let currentImg = 1;

let timeOut;

nextElement.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

prevElement.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgElement.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgElement.length;
  }

  imageContainerElement.style.transform = `translateX(-${
    (currentImg - 1) * 500
  }px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
