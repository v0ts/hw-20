const imagesEl = document.querySelectorAll(".gallery .image");
const imageContainerEl = document.querySelector(".full-image-container");
const imageEl = document.querySelector(".full-image");
let index = 0;

const openImage = (i) => {
  imageEl.src = imagesEl[i].src;
  imageContainerEl.style.display = "flex";
};

imagesEl.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    index = i;
    openImage(index);
  });
});

imageContainerEl.addEventListener("click", (e) => {
  imageContainerEl.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (imageContainerEl.style.display === "flex") {
    if (e.key === "ArrowRight") {
      index = (index + 1) % imagesEl.length;
      openImage(index);
    } else if (e.key === "ArrowLeft") {
      index = (index - 1 + imagesEl.length) % imagesEl.length;
      openImage(index);
    } else if (e.key === "Escape") {
      imageContainerEl.style.display = none;
    }
  }
});

const inputEL = document.querySelector("input");
const renderEl = document.querySelector('button[data-action="render"]');
const destroyEl = document.querySelector('button[data-action="destroy"]');
const boxEl = document.querySelector(".boxes");

renderEl.addEventListener("click", (e) => {
  createBoxes(inputEL.value);
});

destroyEl.addEventListener("click", (e) => {
  destroyBoxes();
});

const randomColor = () => {
  return Math.floor(Math.random() * (255 - 1) + 1);
};

const createBoxes = (amount) => {
  if (amount <= 100) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const divEl = document.createElement("div");
      divEl.style = `height: ${size}px; width: ${size}px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()});`;
      boxEl.append(divEl);
      size += 10;
    }
  } else {
    alert("Число має бути не більше 100");
  }
};

const destroyBoxes = () => {
  boxEl.innerHTML = "";
};
