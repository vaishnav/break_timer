"use strict";

var final_hour, final_minute, final_seconds;
var newDateObj = new Date((new Date()).getTime() + 45*60000);

function counter() {

    var date = new Date()
    var diff = newDateObj - date;

    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    if(min <= 9){
        min = '0' + min;
    }

    if(sec <= 9){
        sec = '0' + sec;
    }

    var clock = min + ":" + sec;
    document.getElementById("count").innerHTML = clock

    setTimeout(counter,1000);
}

// counter();
