// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.⭕
✅ The text of the title should change when the mouse is leaves it.⭕
✅ When the window is resized the title should change.⭕
✅ On right click the title should also change. ⭕
✅ The colors of the title should come from a color from the colors array.⭕
✅ DO NOT CHANGE .css, or .html files.⭕
✅ ALL function handlers should be INSIDE of "superEventHandler"⭕
*/
const headLine = document.querySelector("h2");

const superEventHandler = {
  mouseOver: function handleHeadOver(event) {
    event.target.innerText = "This is over";
    event.target.style.color = colors[0];
  },
  mouseOut: function handleHeadOut(event) {
    event.target.innerText = "This is out";
    event.target.style.color = colors[1];
  },
  windowResize: function handleWindowRe() {
    headLine.innerText = "Window is resizing now";
    headLine.style.color = colors[2];
  },
  rightButtonClick: function handleRightClick(event) {
    event.preventDefault();
    headLine.innerText = "Right mouse button was clicked";
    headLine.style.color = colors[3];
  }
};

function init() {
  headLine.addEventListener("mouseover", superEventHandler.mouseOver);
  headLine.addEventListener("mouseout", superEventHandler.mouseOut);
  window.addEventListener("resize", superEventHandler.windowResize);
  window.addEventListener("contextmenu", superEventHandler.rightButtonClick);
}

init();
