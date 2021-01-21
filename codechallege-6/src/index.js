// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const banner = document.querySelector(".banner");
const rangeInput = document.querySelector(".range-input");
const numberSubmitForm = document.querySelector(".number-submit-form");
const numInput = numberSubmitForm.querySelector(".number-submit-input");
const gameBoard = document.querySelector(".game-board");

let firstPara = gameBoard.querySelector(".wrong-select");
let secondPara = gameBoard.querySelector(".my-choice");
let thirdPara = gameBoard.querySelector(".machine-choice");

let selectNumber = rangeInput.value;

let gameResult = document.createElement("h3");
gameBoard.appendChild(gameResult);

const handleBanner = (num) => {
  banner.innerText = `generate a number between 0 and ${num}`;
};

const handleRangeSelect = () => {
  const rangeNumber = parseInt(rangeInput.value, 10); // todo : range.value
  selectNumber = rangeNumber;
  handleBanner(selectNumber);
};

const gameLogic = (sel, sednum, gen) => {
  console.log(sel, sednum, gen);
  if (sednum > sel) {
    firstPara.innerText = "You have got a wrong number"; // todo :innerHtml
    secondPara.innerText = "";
    thirdPara.innerText = "";
    gameResult.innerText = "";
  } else if (!sednum) {
    firstPara.innerText = "You have got a wrong number";
    secondPara.innerText = "";
    thirdPara.innerText = "";
  } else {
    firstPara.innerText = "";
    secondPara.innerText = `You choose : ${sednum}`;
    thirdPara.innerText = `the machine choose : ${gen}`;
    if (sednum === gen) {
      gameResult.innerText = "You won!";
    } else {
      gameResult.innerText = "You lost!";
    }
  }
};

const handleSubmitNumber = (e) => {
  e.preventDefault();
  const selectedNumber = parseInt(numInput.value, 10);
  const generateNumber = Math.floor(Math.random() * selectNumber + 1);
  gameLogic(selectNumber, selectedNumber, generateNumber);
};

const init = () => {
  banner.innerText = `generate a number between 0 and ${rangeInput.value}`;
  rangeInput.addEventListener("input", handleRangeSelect);
  numberSubmitForm.addEventListener("submit", handleSubmitNumber);
};
init();
