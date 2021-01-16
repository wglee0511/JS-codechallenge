// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

function selectCounty() {
  localStorage.clear();
  const selectOptions = select.options[select.selectedIndex];
  localStorage.setItem("Contry", JSON.stringify(selectOptions.value));
  const gettingItem = localStorage.getItem("Contry");

  console.log(gettingItem);
}

function init() {
  select.addEventListener("click", selectCounty);
}

init();
