// ============ TIMER ============ //
// ============ TIMER ============ //
// ============ TIMER ============ //


var sec = 0;
var min = 0;
var hour = 0;

var secval = document.getElementById("seconds");
var minval = document.getElementById("minutes");
var hourval = document.getElementById("hour");

var interval;

function renderVal() {
    secval.textContent = sec 
    minval.textContent = min 
    hourval.textContent = hour;
}

function setInitialValues() {
    sec = parseInt(prompt("Enter initial seconds:"));
    min = parseInt(prompt("Enter initial minutes:"));
    hour = parseInt(prompt("Enter initial hours:"));
    renderVal();
}

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

    interval = setInterval(function () {
        if (sec === 0 && min === 0 && hour === 0) {
            stop();
            return;
        }

        sec--;
        if (sec === -1) {
            sec = 59;
            min--;
            if (min === -1) {
                min = 59;
                hour--;
                if (hour === -1) {
                    hour = 11;
                }
            }
        }
        renderVal();
    }, 1000);
}

function stop() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;

    clearInterval(interval);
}

function reset() {
    stop();
    setInitialValues();
}

setInitialValues();