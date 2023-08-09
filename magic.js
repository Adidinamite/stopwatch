let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let pauseBtn = document.getElementById("pauseBtn");
let msec =0;
let sec =0;
let min =0;
let timer = null;
let displayTime = document.getElementById("displayTime")
const startTimer = () =>
{
    msec++;
    if(msec===100)
    {
        msec = 0;
        sec++;
        if(sec === 60)
        {
            sec = 0;
            min++;
        }
    }
    let m = min < 10 ? "0"+min:min;
    let s = sec < 10 ? "0"+sec:sec;
    let ms = msec < 10 ? "0"+msec:msec;

    displayTime.innerHTML = m+":"+s+":"+ms;
}
const playTime = () =>{
    timer = setInterval(startTimer,10);
}
const pauseTime = () =>{
    if(timer!==null){
        clearInterval(timer);
    }
}
const resetTime = () => {
    pauseTime();
    msec = 0;
    sec=0;
    min=0;
    displayTime.innerHTML = "00:00:00";
}
startBtn.addEventListener("click", playTime);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);