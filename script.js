const colorPicker = document.getElementById("colorPicker");
const lineWidth = document.getElementById("lineWidth");

const canvas = document.querySelector("#board");
const ctx = canvas.getContext("2d");
let isDrawing = false;

// Технічні параметри пензля
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.strokeStyle = "#f8d1f8";
// Логіка малювання
canvas.onmousedown = (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};
canvas.onmouseup = () => (isDrawing = false);
canvas.onmousemove = (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
};
