let gasPedal = document.querySelector(".gas-pedal");
let brakePedal = document.querySelector(".brake-pedal");
const shiftGear = document.querySelector(".clutch-pedal");
const leftArrow = document.querySelectorAll("div.leftArrow");
const leftCircle = document.querySelector(".left");
const rightCircle = document.querySelector(".right");

let divs = [];
let rotateIncrement = 45;

// Indicators for left circle

    for(let i=1; i<=40; i++){
        
        //create 40 circle divs and append to left
    
        divs[i] = document.createElement("div");
        divs[i].className = "circle";
        leftCircle.append(divs[i]);
        
        // create indicators and long indicators
        const indicator = document.createElement("div");
        indicator.className = "indicator";
        const indicatorLong = document.createElement("div");
        indicatorLong.className = "indicator-long";
        
        // append indicators to their rightful locations
    
        if(i % 4 !== 0){
            divs[i].append(indicator);
        } else {
            divs[i].append(indicatorLong);
        }
        divs[i].style.transform = `rotate(${i*9}deg)`;
    }

    
 

 // Indicators for right circle

    for(let i=1; i<=40; i++){
        
        //create 40 circle divs and append to right
    
        divs[i] = document.createElement("div");
        divs[i].className = "circle";
        rightCircle.append(divs[i]);
        
        // create indicators and long indicators
        const indicator = document.createElement("div");
        indicator.className = "indicator";
        const indicatorLong = document.createElement("div");
        indicatorLong.className = "indicator-long";
        
        // append indicators to their rightful locations
    
        if(i % 4 !== 0){
            divs[i].append(indicator);
        } else {
            divs[i].append(indicatorLong);
        }
        divs[i].style.transform = `rotate(${i*9}deg)`;
    }

// Creating array of long indicators

        const allLongIndicators = document.querySelectorAll(".circle .indicator-long");
        console.log(allLongIndicators);

// Creating paragraph elements inside long indicators

        for (let i = 0; i<allLongIndicators.length ; i++){
            const innerParagraphs = document.createElement("p");
            allLongIndicators[i].appendChild(innerParagraphs);
        }

 // Selecting all paragraphs inside long indicators

 const leftParagraphs = document.querySelectorAll(".left p");
const rightParagraphs = document.querySelectorAll(".right p");

// Logic for adding numbers to long paragraphs

        for(i=0 ; i<leftParagraphs.length - 1 ; i++){
            
            leftParagraphs[leftParagraphs.length - 1].textContent = "0";
            leftParagraphs[i].textContent = `${(i+1)*10}`;
            leftParagraphs[i].style.transform = `rotate(-${(i+1)*36}deg)`;
        }

        for(i=0; i<rightParagraphs.length - 1 ; i++){
            rightParagraphs[rightParagraphs.length - 1].textContent = "0";
            rightParagraphs[i].textContent = `${(i+1)*10}`;
            rightParagraphs[i].style.transform = `rotate(-${(i+1)*36}deg)`;
        }

// Gas pedal logic


gasPedal.addEventListener("click", function(){
        leftArrow[0].style.transform = "rotate(225deg)";
        leftArrow[1].style.transition = "2s";
        leftArrow[1].style.transform = "rotate(45deg)";
    }     
)

// Brake pedal logic

brakePedal.addEventListener("click", function(){
    leftArrow[0].style.transform = "rotate(0deg)";
    leftArrow[1].style.transform = "rotate(0deg)" 
})

//Shift pedal logic

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