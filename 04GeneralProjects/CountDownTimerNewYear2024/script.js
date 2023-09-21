const newYear = "1/1/2024";
console.log("AviCodes");

var daysEl = document.querySelector('.day');
var hourEl = document.querySelector('.hour');
var minuteEl = document.querySelector('.minute');
var secondEl = document.querySelector('.second');

function timeCountDown() {
    const nowDate = new Date(); //Sat Dec 31 2022 19:01:49 GMT+0530 (India Standard Time)
    const newYearDate = new Date(newYear); //Sun Jan 01 2023 00:00:00 GMT+0530 (India Standard Time)

    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);

