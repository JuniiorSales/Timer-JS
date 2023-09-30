const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");

const BtnStart = document.querySelector("#startBtn");
const BtnPause = document.querySelector("#pauseBtn");
const BtnResume = document.querySelector("#resumeBtn");
const BtnReset = document.querySelector("#resetBtn");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;
let isPaused = false;

//Events
startTimer = () => {

    isPaused = false;

    interval = setInterval(() => {

        if (isPaused == false) {
            miliseconds += 10;
        }
        if (miliseconds == 1000) {
            seconds++;
            miliseconds = 0;
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        milisecondsEl.textContent = formatMili(miliseconds);
        secondsEl.textContent = formatTimer(seconds);
        minutesEl.textContent = formatTimer(minutes);

    }, 10);

    BtnStart.style.display = "none";
    BtnPause.style.display = "block";

}
pauseTimer = () => {
    isPaused = true;
    BtnPause.style.display = "none";
    BtnResume.style.display = "block";
}

resumeTimer = () => {
    isPaused = false;
    BtnResume.style.display = "none";
    BtnPause.style.display = "block";
}

resetTimer = () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    BtnPause.style.display = "none";
    BtnResume.style.display = "none";
    BtnStart.style.display = "block";
}


//Format Text
formatMili = (time) => {
    let timeStg = time.toString();
    return time < 100 ? timeStg.padStart(3, "00") : time;
}
formatTimer = (time) => {
    return time < 10 ? "0" + time : time;
}



//Buttons Events
BtnPause.addEventListener("click", pauseTimer);
BtnStart.addEventListener("click", startTimer);
BtnResume.addEventListener("click", resumeTimer);
BtnReset.addEventListener("click", resetTimer);
