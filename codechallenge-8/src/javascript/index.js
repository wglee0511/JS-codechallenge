import "../styles.css";
import getTimeNow from "./clock.js";
import nameInit from "./name.js";
import resetInit from "./reset";
import weatherInit from "./weather";

const totalInit = () => {
  getTimeNow();
  setInterval(getTimeNow, 1000);
  nameInit();
  resetInit();
  weatherInit();
};

totalInit();
