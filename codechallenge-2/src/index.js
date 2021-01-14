// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const head = document.querySelector("h1");
const body = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

head.style.color = "white";
body.style.backgroundColor = colors[0];

const resizeColor = (event) => {
  event.preventDefault();
  const size = window.innerWidth;
  console.log(window.innerWidth);
  if (size < 500) {
    return (body.style.backgroundColor = colors[1]);
  } else if (size < 900) {
    return (body.style.backgroundColor = colors[2]);
  } else if (size < 1300) {
    return (body.style.backgroundColor = colors[3]);
  } else if (size < 1700) {
    return (body.style.backgroundColor = colors[4]);
  }
};

window.addEventListener("resize", resizeColor);
