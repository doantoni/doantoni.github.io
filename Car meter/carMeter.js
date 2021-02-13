let gasPedal = document.querySelector(".gas");
let brakePedal = document.querySelector(".brake");
const leftArrow = document.querySelectorAll("div.leftArrow");

console.log(leftArrow[0], leftArrow[1]);

gasPedal.addEventListener("click", function(){
        leftArrow[0].classList.add("rotateArrow");
        leftArrow[1].classList.add("rotateArrow");
    }     
)

brakePedal.addEventListener("click", function(){
    leftArrow[1].classList.remove("rotateArrow");
    leftArrow[0].classList.remove("rotateArrow");
})