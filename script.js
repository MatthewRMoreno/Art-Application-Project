const canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');

let isDrawing = false;

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // creating new path for drawing
}

const drawing = (e) => {
    if(!isDrawing) return; // if isDrawing is false return from here
    ctx.lineTo(e.offsetX, e.offsetY); // creating a line according to the mouse position
    ctx.stroke(); // drawing/filling the line with color
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);

