import "../styles.css";
import backInit from "./background";
import getTimeNow from "./clock.js";
import nameInit from "./name.js";
import resetInit from "./reset";
import toDoInit from "./todolist";
import weatherInit from "./weather";

const totalInit = () => {
  getTimeNow();
  setInterval(getTimeNow, 1000);
  nameInit();
  resetInit();
  weatherInit();
  backInit();
  toDoInit();
};

totalInit();
