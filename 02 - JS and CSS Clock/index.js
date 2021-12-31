
const secondHandElem = document.querySelector('.second-hand');
const minuteHandElem = document.querySelector('.min-hand');
const hourHandElem   = document.querySelector('.hour-hand');


function updateTime(){
    const time = new Date();
    const seconds = time.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    secondHandElem.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = time.getMinutes();
    console.log(minutes);
    const minutesDegree = ((minutes / 60) * 360) + 90 ;
    minuteHandElem.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = time.getHours();
    console.log(hours);
    const hoursDegree = ((hours / 12) * 360)  + 90;
    hourHandElem.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(updateTime, 1000);

