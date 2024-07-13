let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopStopwatch() {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateDisplay() {
    hoursDisplay.textContent = pad(hours);
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}