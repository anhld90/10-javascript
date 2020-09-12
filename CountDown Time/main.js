let d = new Date();
let year = d.getFullYear() + 1;
let newYear = '1 Jan'+' '+ year;

function countDown(){
    let mSecondNewYear = new Date(newYear);
    let mSecondCurYear = new Date();
    let mSecondSub = mSecondNewYear - mSecondCurYear;
    let secondSub = mSecondSub / 1000;
    let days = Math.floor(secondSub/(60*60*24));
    let hours = Math.floor(secondSub/(60*60)) % 24;
    let mins = Math.floor(secondSub/60) % 60;
    let seconds = Math.floor(secondSub) % 60;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = formatNumber(hours);
    document.getElementById('mins').innerHTML = formatNumber(mins);
    document.getElementById('seconds').innerHTML = formatNumber(seconds);
}

function formatNumber(number){
    return number<10?'0'+number:number;
}

countDown();

setInterval(countDown, 1000);