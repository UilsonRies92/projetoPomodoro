"use strict"

var mm = 0;
var ss = 0;

var tempo = 1000; //conversão milésimos para segundo
var cron;

function start(){
cron = setInterval(() => {timer();}, tempo);

}

function pause(){
    
    clearInterval(cron);

}
function stop(){
    clearInterval(cron);
    mm = 0;
    ss = 0;

    document.getElementById('contador').innerText = "00:00"
}

function timer(){
    ss++;

    if (ss == 60){
        ss = 0;
        mm++;
    }
    var format =(mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss); //botar a esquerda
    document.getElementById('contador').innerText = format;
    if (mm >= 25){
        clearInterval(cron);
        mm = 0;
        ss = 0;
        document.getElementById('contador').innerText = "00:00"
}}