// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const numberButtons = document.querySelectorAll(".js-number");
const operationButtons = document.querySelectorAll(".js-operation");
const calLcd = document.querySelector(".js-cal");
const equalBtn = document.querySelector(".js-equal");
const clearBtn = document.querySelector(".js-clear");

let storeValue = [];
let storeValueForCal = [];

const handleNumberClick = (e) => {
  const buttonValue = e.target.value;
  storeValue.push(buttonValue);

  const interateArray = storeValue.join("");
  calLcd.innerText = `${interateArray}`;
  //console.log(storeValue);
};
const handleOperationClick = (e) => {
  const calNumber = storeValue.join("");
  storeValueForCal.push(calNumber);
  const operationValue = e.target.value;
  storeValueForCal.push(operationValue);
  storeValue = [];
  calLcd.innerText = "";
};

const handleEqualClick = () => {
  const finalStoreValue = storeValue.join("");
  storeValueForCal.push(finalStoreValue);
  const finalEquation = storeValueForCal.join("");
  const finNum = eval(finalEquation);
  calLcd.innerText = `${finNum}`;
  storeValue = [];
  storeValueForCal = [];
};

const handleclearClick = () => {
  calLcd.innerText = "";
  storeValue = [];
  storeValueForCal = [];
};

const init = () => {
  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", handleNumberClick);
  });
  operationButtons.forEach((operationButton) => {
    operationButton.addEventListener("click", handleOperationClick);
  });
  equalBtn.addEventListener("click", handleEqualClick);
  clearBtn.addEventListener("click", handleclearClick);
};

init();
