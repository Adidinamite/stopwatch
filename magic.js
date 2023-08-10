const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
let displayTime = document.getElementById("displayTime")
const resets = document.getElementById("resets");
let timer = null;
let isPlaying = false;
let timerStartTime = null;
let savedTime =0;
const formatTime = (milliseconds) =>{
    let result = ""
    let min =Math.floor(milliseconds/60000);
    let sec = Math.floor((milliseconds%60000)/1000);
    let ms = Math.floor(((milliseconds%60000)%1000));
    result = min.toString().padStart(2,"0")+":"+sec.toString().padStart(2,"0")+":"+ms.toString().padStart(3,"0");
    return result;
}
const startTimer = () =>
{
    let timePassed= Date.now() -timerStartTime+savedTime;
    displayTime.innerHTML=formatTime(timePassed);
    console.log("sd")
}
const playTime = () => {
    if (!isPlaying) {
        timerStartTime = Date.now();
        timer = setInterval(startTimer, 1);
        isPlaying = true;
    }
}
const pauseTime = () =>{
    if(timer!==null){
        clearInterval(timer);
    }
    savedTime= Date.now() -timerStartTime+savedTime;
    isPlaying=false;
}
const resetTime = () => {
    let pText;
    let now=Date.now();
    console.log(now,timerStartTime,savedTime);

    if(timer!==null){
        savedTime= now -timerStartTime+savedTime;
        clearInterval(timer);
        pText = document.createTextNode("You reset your stopwatch at "+formatTime(savedTime))
    }
    else
    {
        pText = document.createTextNode("You reset your stopwatch at "+formatTime(0));
    }
    isPlaying=false;
    displayTime.innerHTML = formatTime(0);
    console.log(savedTime);
    savedTime=0;
    const  p = document.createElement('p')
    p.appendChild(pText);
    p.classList.add("allResets");
    resets.appendChild(p)
}
const changeStartToContinue = () =>{
    startBtn.innerText="CONTINUE";
}
const changeContinueToStart = () =>{
    startBtn.innerText="START";
}
startBtn.addEventListener("click", ()=>{
    playTime();
    changeContinueToStart();
});
pauseBtn.addEventListener("click",() =>{
    pauseTime();
    changeStartToContinue();
});
resetBtn.addEventListener("click",() =>{
    resetTime();
    changeContinueToStart();
});