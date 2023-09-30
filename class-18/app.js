const wrapper = document.querySelector(".sliderContent");
const carousel = document.querySelector(".carousel");
const leftArrowBtn = document.querySelector("#leftArrow");
const rightArrowBtn = document.querySelector("#rightArrow");

let isDragging = false, startX, startScrollLeft, timeoutId;

const dragStart = (event) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = event.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (event) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

// https://www.youtube.com/watch?v=6QE8dXq9SOE
