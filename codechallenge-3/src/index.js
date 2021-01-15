import "./styles.css";

// You're gonna need this
//const head = document.div.appendChild("h1");
//head.innerText = "Time Untill Christmas";

const NINE_HOURS_MILLISECONDS = 32400000; //why..?
const calculatorForDate = {
  secondToDay: 60 * 60 * 24,
  secondToHour: 60 * 60,
  secondToMinute: 60
};
const head = document.createElement("h2");
const word = document.body.appendChild(head);
const timeword = document.createElement("p");
const timePanel = document.body.appendChild(timeword);

function getTime() {
  // Don't delete this.

  const currentDate = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const timeGapSeconds = (currentDate.getTime() - xmasDay.getTime()) / 1000;
  //const second = ;
  //const minute = ;
  const day = Math.floor(timeGapSeconds / calculatorForDate.secondToDay);
  const hour = Math.floor(
    timeGapSeconds / calculatorForDate.secondToHour - day * 24
  );
  const minute = Math.floor(
    timeGapSeconds / calculatorForDate.secondToMinute -
      day * 24 * 60 -
      hour * 60
  );
  const second = Math.floor(
    timeGapSeconds -
      day * calculatorForDate.secondToDay -
      hour * calculatorForDate.secondToHour -
      minute * calculatorForDate.secondToMinute
  );

  timePanel.innerHTML = `
  ${day < 10 ? "0${day}" : day}d :
  ${hour < 10 ? `0${hour}` : hour}h :
  ${minute < 10 ? `0${minute}` : minute}m : 
  ${second < 10 ? `0${second}` : second}s
  `;
}

function init() {
  word.innerText = "Elapsed time Christmas : ";
  getTime();
  setInterval(getTime, 1000);
}
init();
