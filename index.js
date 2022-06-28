let circle = document.getElementById("circle");

let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.x;
  mouseY = e.y;
});

const animate1 = () => {
  let bound = circle?.getBoundingClientRect();

  x = x + (mouseX - x - bound.width / 2) / 10;
  y = y + (mouseY - y - bound.height / 2) / 10;

  circle.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animate1);
};

window.requestAnimationFrame(animate1);
