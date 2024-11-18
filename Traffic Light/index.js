function stopButton(colors) {
    document.getElementById("readyButton").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goButton").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
    document.getElementById("stopButton").style.backgroundColor = colors;
    document.getElementById("stopLight").style.backgroundColor = colors;
}

function readyButton(colors) {
    document.getElementById("stopButton").style.backgroundColor = "#4b5069";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("goButton").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyButton").style.backgroundColor = colors;
    document.getElementById("readyLight").style.backgroundColor = colors;
}

function goButton(colors) {
    document.getElementById("readyButton").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("stopButton").style.backgroundColor = "#4b5069";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("goButton").style.backgroundColor = colors;
    document.getElementById("goLight").style.backgroundColor = colors;
}