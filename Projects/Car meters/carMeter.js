let gasPedal = document.querySelector(".gas-pedal");
let brakePedal = document.querySelector(".brake-pedal");
const shiftGear = document.querySelector(".clutch-pedal");
const leftArrow = document.querySelectorAll("div.leftArrow");
let rotateIncrement = 45;

console.log(leftArrow[0], leftArrow[1]);

gasPedal.addEventListener("click", function(){
        leftArrow[0].style.transform = "rotate(225deg)";
        leftArrow[1].style.transition = "2s";
        leftArrow[1].style.transform = "rotate(45deg)";
    }     
)

brakePedal.addEventListener("click", function(){
    leftArrow[0].style.transform = "rotate(-45deg)";
    leftArrow[1].style.transform = "rotate(-45deg)" 
})


shiftGear.addEventListener("click", function (){
    rotateIncrement += 45;
    leftArrow[0].style.transition = "1s";
    leftArrow[0].style.transform = "rotate(150deg)";
    setTimeout(function returnRev (){
        leftArrow[0].style.transform = "rotate(225deg)";
        leftArrow[0].style.transition = "2s";
    }, 1000);
    leftArrow[1].style.transform = `rotate(${rotateIncrement}deg)`;
})