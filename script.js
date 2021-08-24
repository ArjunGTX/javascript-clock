window.onload = setClock();
setInterval(setClock,1000);

function setClock(){
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondsHand = document.getElementById('secondsHand');
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours())/12;
    rotation(hourHand,hourRatio);
    rotation(minuteHand,minuteRatio);
    rotation(secondsHand,secondsRatio)
}

function rotation(element,degree){
    element.style.setProperty('--rotation',degree*360);
}