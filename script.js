const hLine = document.getElementById("h-line");
const vLine = document.getElementById("v-line");
const coords = document.getElementById("coords");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  hLine.style.top = `${y}px`;
  vLine.style.left = `${x}px`;

  coords.style.left = `${x + 15}px`;
  coords.style.top = `${y + 15}px`;
  coords.innerText = `X:${x.toFixed(0)} Y:${y.toFixed(0)}`;
});
