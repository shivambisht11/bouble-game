var timer = 15;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scorevl").textContent = score;
}


function Mbubble() {
    var clut = "";

    for (var i = 1; i <= 290; i++) {
        var rn = Math.floor(Math.random() * 10);
        clut += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clut;
}


function  runTimer(){
    var timerr = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timervl").textContent = timer;
        }
        else{
            clearInterval(timerr);
            document.querySelector("#pbtm").innerHTML = `<h1>Game is Over!</h1>`;
        }
    }, 1000);
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvl").textContent = hitrn;
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        Mbubble();
        getNewHit();
    }
});


runTimer();
Mbubble();
getNewHit();