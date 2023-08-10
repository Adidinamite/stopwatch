let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let pauseBtn = document.getElementById("pauseBtn");
let msec =0;
let sec =0;
let min =0;
let timer = null;
let displayTime = document.getElementById("displayTime")
let isPlaying = false;
let string="00:00:00";
const resets = document.getElementById("resets");
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
    string=m+":"+s+":"+ms;
    displayTime.innerHTML = string;
}
const playTime = () =>{
    if(!isPlaying)
        timer = setInterval(startTimer,10),
        isPlaying=true;
}
const pauseTime = () =>{
    if(timer!==null){
        clearInterval(timer);
    }
    isPlaying=false;
}
const resetTime = () => {
    pauseTime();
    msec = 0;
    sec=0;
    min=0;
    displayTime.innerHTML = string;
    const pText = document.createTextNode("You reset your stopwatch at "+string)
    const  p = document.createElement('p')
    p.appendChild(pText);
    p.classList.add("allResets");
    resets.appendChild(p)
    string ="00:00:00"
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
    changeContinueToStart()
});