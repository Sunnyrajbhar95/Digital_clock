let h=document.getElementsByClassName("hour")[0];
let m=document.getElementsByClassName("minute")[0];
let s=document.getElementsByClassName("second")[0];
const d=new Date();
let hour=d.getHours();
let minute=d.getMinutes();
let second=d.getSeconds();
h.innerHTML=hour;
m.innerHTML=minute;

setInterval(()=>{
    s.innerHTML=second;
    second++;
    if(second===60)
    {
        minute++;
        second=0;
        m.innerHTML=minute;
    }
    if(minute===60)
    {
        hour++;
        minute=0;
        h.innerHTML=hour;
    }
    if(hour===24)
    {
        hour=0;
    }
},1000) 