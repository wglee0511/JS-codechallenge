const resetButton = document.querySelector(".js-reset-button");

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
const handleReset = () => {
  nameReset();
  localStorage.clear();
};

const resetInit = () => {
  resetButton.addEventListener("click", handleReset);
};

export default resetInit;
