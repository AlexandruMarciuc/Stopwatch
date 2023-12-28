"use strict";
const miliseconds = document.querySelector("#miliseconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");

let milisecondsCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;
let houtsCounter = 0;

let intervalId;

buttonStart.onclick = function () {
  clearInterval(intervalId);

  intervalId = setInterval(function () {
    milisecondsCounter++;

    if (milisecondsCounter === 100) {
      milisecondsCounter = 0;
      secondsCounter++;

      if (secondsCounter === 60) {
        secondsCounter = 0;
        minutesCounter++;

        if (minutesCounter === 60) {
          minutesCounter = 0;
          hoursCounter++;
        }

        minutes.textContent =
          minutesCounter < 10 ? "0" + minutesCounter : minutesCounter;
      }

      seconds.textContent =
        secondsCounter < 10 ? "0" + secondsCounter : secondsCounter;
    }

    miliseconds.textContent =
      milisecondsCounter < 10 ? "0" + milisecondsCounter : milisecondsCounter;
  }, 10); // Update every 10 milliseconds for better accuracy
};

buttonStop.onclick = function () {
  clearInterval(intervalId);
};

buttonReset.onclick = function () {
  clearInterval(intervalId);
  secondsCounter = 0;
  minutesCounter = 0;
  houtsCounter = 0;
  seconds.textContent = "00";
  miliseconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
};
