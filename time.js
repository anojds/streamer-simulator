var sec = 0;
var min = 0;
var hour = 0;

function timenumbercount() {
    if (sec == 60) {
        sec = 0;
        min = min + 1;
    }
    if (min == 60) {
        min = 0;
        hour = hour + 1;
    }
    sec = sec + 1;
    if (sec == 60) {
        sec = 0;
        min = min + 1;
    }
    if (min == 60) {
        min = 0;
        hour = hour + 1;
    }
    document.getElementById("time").innerHTML = hour + ":" + min + ":"+ sec;
    
}
let timecountstart = setInterval(timenumbercount, 1000);