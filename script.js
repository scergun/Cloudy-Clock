/*let time = new Date()

const hoursDOM = document.querySelector("#hours");
const minutesDOM = document.querySelector("#minutes");
const secondsDOM = document.querySelector("#seconds");


let hours = () => {

    let hour = time.getHours();
    hoursDOM.innerHTML = hour
};

let minutes = () => {

    let minute = time.getMinutes();
    minutesDOM.innerHTML = minute
};

let seconds = () => {

    let second = time.getSeconds();
    secondsDOM.innerHTML = second
};

let times = () => {

    hours(), minutes(), seconds()
};

change = () => { setTimeout(times(), 2000) };

window.addEventListener("DOMContentLoaded", times());




console.log(times())
*/

setInterval(showTime, 1000);

function showTime() {
    const hoursDOM = document.querySelector("#hours");
    const minutesDOM = document.querySelector("#minutes");
    const secondsDOM = document.querySelector("#seconds");

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hoursDOM.innerHTML = hour;
    minutesDOM.innerHTML = min;
    secondsDOM.innerHTML = sec;
}

showTime();


