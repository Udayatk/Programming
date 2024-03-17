let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let isDrawing = false;

function startDrawing(event) {
  isDrawing = true;
  context.beginPath();
  let x = event.offsetx;
  let y = event.offsety;
  context.moveTo(x, y);
  event.preventDefault();
}

function drawing(event) {
  if (isDrawing) {
    let x = event.offsetX;
    let y = event.offsetY;
    context.lineTo(x, y);
    context.stroke();
    event.preventDefault();
  }
}

function stopDrawing(event) {
  isDrawing = false;
  event.preventDefault();
}
