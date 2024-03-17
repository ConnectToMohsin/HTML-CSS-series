// alert("Hello")
// prompt("Answer Helo")
// alert("How are You")
// prompt("Answer se")
// alert("What about you")
// prompt("Answer Third")


// console.log("Hello Befor Set Time Out");


// setTimeout(() => {
//     console.log("I am Message In Set Time Out");
// }, 4000);




// console.log("Hello After Set Time Out");


// setInterval(() => {
//     console.log(" i am Set Interval");
// }, 3000);

setInterval(() => {
    let hours = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
let am_pm = "Am"
if (hours>=12) {
    if(hours>12){
        hours = hours - 12
    }
    am_pm = "PM"
} else if (hours == 0) {
    hours = 12
    am_pm = "Am"
}



document.getElementById("clc").innerHTML = hours+ ":" + min + ":" + sec + am_pm
    
}, 1000);
