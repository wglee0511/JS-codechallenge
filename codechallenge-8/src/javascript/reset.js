import backInit from "./background";
import toDos from "./todos";

const resetButton = document.querySelector(".js-reset-button");

const toDoResetForObj = {
  planning: document.querySelector(".js-todolist-planning"),
  finished: document.querySelector(".js-todolist-finished")
};

const nameResetForObj = {
  nameForm: document.querySelector(".js-name-form"),
  nameinput: document.querySelector(".js-name-input"),
  greetingDiv: document.querySelector(".js-greeting")
};

const nameReset = () => {
  if (nameResetForObj.greetingDiv.children.length !== 0) {
    while (nameResetForObj.greetingDiv.hasChildNodes()) {
      nameResetForObj.greetingDiv.removeChild(
        nameResetForObj.greetingDiv.firstChild
      );
    }
    nameResetForObj.greetingDiv.classList.add("none");
    nameResetForObj.nameForm.classList.remove("none");
    nameResetForObj.nameinput.value = "";
  }
};

const planningReset = () => {
  if (toDoResetForObj.planning.children.length !== 0) {
    while (toDoResetForObj.planning.hasChildNodes()) {
      toDoResetForObj.planning.removeChild(toDoResetForObj.planning.firstChild);
    }
  }
};

const finishedReset = () => {
  if (toDoResetForObj.finished.children.length !== 0) {
    while (toDoResetForObj.finished.hasChildNodes()) {
      toDoResetForObj.finished.removeChild(toDoResetForObj.finished.firstChild);
    }
  }
};

const handleReset = () => {
  nameReset();
  planningReset();
  finishedReset();
  backInit();
  localStorage.clear();
  toDos.planning = [];
  toDos.finished = [];
};

const resetInit = () => {
  resetButton.addEventListener("click", handleReset);
};

export default resetInit;
