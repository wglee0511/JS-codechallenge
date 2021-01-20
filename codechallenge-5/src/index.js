// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form");
const listInput = form.querySelector("input");
const listPending = document.querySelector(".js-form-pending");
const listFinish = document.querySelector(".js-form-finished");

let toDos = {
  pendings: [],
  finis: []
};

const saveToDos = () => {
  localStorage.setItem("Pending", JSON.stringify(toDos.pendings));
};
const saveToDosForFinish = () => {
  localStorage.setItem("Finish", JSON.stringify(toDos.finis));
};

const handleDelete = (event) => {
  const btnPath = event.target;
  const parentPath = btnPath.parentNode;
  listPending.removeChild(parentPath);
  const newToDos = toDos.pendings.filter(
    (toDo) => toDo.id !== parseInt(parentPath.id, 10)
  );
  console.log(newToDos);
  toDos.pendings = newToDos;
  saveToDos();
};

const handleDeleteForFinish = (event) => {
  const btn = event.target.parentNode;
  listFinish.removeChild(btn);
  const newToDos = toDos.finis.filter(
    (toDo) => toDo.id !== parseInt(btn.id, 10)
  );
  toDos.finis = newToDos;
  saveToDosForFinish();
};

const changeListForPending = (text, id) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const pendingId = id;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelete);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", handleChage);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = pendingId;

  listPending.appendChild(li);

  const toDoObj = {
    text: text,
    id: pendingId
  };

  toDos.pendings.push(toDoObj);
  saveToDos();
};

const handleChageForFinish = (event) => {
  const btnPath = event.target;
  const parentPath = btnPath.parentNode;
  const innerTextForPending = parentPath.firstChild.innerText;
  const listForId = parseInt(parentPath.id, 10);
  changeListForPending(innerTextForPending, listForId);

  const newToDos = toDos.finis.filter((toDo) => toDo.id !== listForId, 10);
  console.log(newToDos);

  listFinish.removeChild(parentPath);

  toDos.finis = newToDos;
  saveToDosForFinish();
};

const listFillForFinish = (text, id) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const finishId = id;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDeleteForFinish);
  backBtn.innerText = "⭕";
  backBtn.addEventListener("click", handleChageForFinish);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = finishId;
  listFinish.appendChild(li);

  const toDoObj = {
    text: text,
    id: finishId
  };

  toDos.finis.push(toDoObj);

  saveToDosForFinish();
};

const handleChage = (event) => {
  const btnPath = event.target;
  const parentPath = btnPath.parentNode;
  const innerTextForFinish = parentPath.firstChild.innerText;
  const listForId = parseInt(parentPath.id, 10);

  listFillForFinish(innerTextForFinish, listForId);

  const newToDos = toDos.pendings.filter((toDo) => toDo.id !== listForId);
  listPending.removeChild(parentPath);

  toDos.pendings = newToDos;
  saveToDos();
};

const listFill = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const newId = Math.floor(Math.random() * 1000000000000);

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelete);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", handleChage);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;

  listPending.appendChild(li);

  const toDoObj = {
    id: newId,
    text: text
  };

  toDos.pendings.push(toDoObj);
  saveToDos();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = listInput.value;
  listFill(currentValue);
  listInput.value = "";
};

const loadToDos = () => {
  const loadPendings = localStorage.getItem("Pending");
  if (loadPendings) {
    JSON.parse(loadPendings).forEach((obj) => listFill(obj.text));
  }
};

const loadToDosForFinish = () => {
  const loadFinis = localStorage.getItem("Finish");
  if (loadFinis) {
    JSON.parse(loadFinis).forEach((obj) => listFillForFinish(obj.text, obj.id));
  }
};

const init = () => {
  loadToDos();
  loadToDosForFinish();
  form.addEventListener("submit", handleSubmit);
};

init();
