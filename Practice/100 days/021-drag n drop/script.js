const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = function () {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
};

const dragEnd = function () {
  this.className = "fill";
};

const dragOver = function (e) {
  // Ref: https://developer.cdn.mozilla.net/en-US/docs/Web/API/Document/dragover_event
  e.preventDefault();
};