"use strict";

var final_hour, final_minute, final_seconds,newDateObj,t;


function counter() {
    newDateObj = new Date((new Date()).getTime() + 45*60000);
    // newDateObj = new Date((new Date()).getTime() + 10000);        //For testing  
    cnt();
}

function cnt() {

    var date = new Date()
    var diff = newDateObj - date;

    var minute;
    var second;

    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    minute = min;
    second = sec;

    if(minute <= 9){
        minute = '0' + minute;
    }

    if(second <= 9){
        second = '0' + second;
    }

    var clock = minute + ":" + second;
    document.getElementById("count").innerHTML = clock


    t = setTimeout(cnt,1000);

    if(min <= 0){
        if(sec <= 0){
            clearTimeout(t);
            document.getElementById("count").innerHTML = "Start Again";
        }
    }
}

// counter();
