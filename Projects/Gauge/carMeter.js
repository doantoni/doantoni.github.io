let gasPedal = document.querySelector(".gas-pedal");
let brakePedal = document.querySelector(".brake-pedal");
const shiftGear = document.querySelector(".clutch-pedal");
const leftArrow = document.querySelectorAll("div.leftArrow");
const leftCircle = document.querySelector(".left");
const rightCircle = document.querySelector(".right");
const pinkCircle = document.querySelector(".pink-circle");

let divs = [];
let displayIncrement = 0;
let rotateIncrement = 0;
let gear = 0;
let currentSpeed = 0;


// Indicators for left circle

    for(let i=0; i<7; i++){
        
        //create 40 circle divs and append to left
    
        divs[i] = document.createElement("div");
        divs[i].className = "circle";
        leftCircle.append(divs[i]);
        
        // create indicators and long indicators
        const indicator = document.createElement("div");
        indicator.className = "indicator";
      
        
        // append indicators to their rightful locations
        
        divs[i].append(indicator);
        divs[i].style.transform = `rotate(${((i+1)*45)-90}deg)`;
    }

    
 

 // Indicators for right circle

    for(let i=0; i<21; i++){
        
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
    
        if(i % 2 !== 0){
            divs[i].append(indicator);
        } else {
            divs[i].append(indicatorLong);
        }
        divs[i].style.transform = `rotate(${(i*13.5)-45}deg)`;
    }

// Creating array of left indicators and long indicators

        const leftIndicators = document.querySelectorAll(".left .indicator");

        const allLongIndicators = document.querySelectorAll(".circle .indicator-long");
        console.log(allLongIndicators);

// Changing styles for left indicators 

        for (const indic of leftIndicators){
            indic.style.height = "2%";
            indic.style.width = "2%";
        }

        for (const indic of allLongIndicators){
            indic.style.height = "2%";
            indic.style.width = "2%";
        }

// Creating paragraphs elements inside left indicators

    for (let i = 0; i<leftIndicators.length; i++){
        const innerParagraphs = document.createElement("p");
        leftIndicators[i].appendChild(innerParagraphs);
    }


// Creating paragraph elements inside long indicators

        for (let i = 0; i<allLongIndicators.length ; i++){
            const innerParagraphs = document.createElement("p");
            allLongIndicators[i].appendChild(innerParagraphs);
        }

 // Selecting all paragraphs inside left indicators and long indicators 

const leftParagraphs = document.querySelectorAll(".left p");

const rightParagraphs = document.querySelectorAll(".right p");

// Logic for adding numbers to left paragraphs and long paragraphs

        for ( let i = 0 ; i<leftParagraphs.length ; i++){
            leftParagraphs[i].textContent = i;
            leftParagraphs[i].style.transform = `rotate(${(-(i+1)*45)+90}deg)`
        }

        for(i=0; i<rightParagraphs.length - 3 ; i++){
        
            rightParagraphs[i].textContent = i*20;
            
        } 

        for(i=0; i<rightParagraphs.length ; i++){
        
         
             rightParagraphs[i].style.transform = `rotate(${45-(i*2)*13.5}deg)`;
        } 

        rightParagraphs[8].textContent = "180";
        rightParagraphs[9].textContent = "220";
        rightParagraphs[10].textContent = "260";

// Gas pedal logic


let gasInterval = function(){
    setTimeout(function(){
        leftArrow[0].style.transition = "0.2s";
        setInterval(function(){
        if(leftArrow[0].style.transform == "rotate(225deg)"){
            leftArrow[0].style.transform = "rotate(215deg)";
        } else if (leftArrow[0].style.transform == "rotate(215deg)"){
            leftArrow[0].style.transform = "rotate(225deg)";
        }
    }, 200)}, 1200);
}

let gasFunction = function(){
    
        let speed = leftArrow[1].style.transform;
            leftArrow[0].style.transform = "rotate(225deg)";
            leftArrow[0].style.transition = "2s";
            /* gasInterval(); */
            
            pinkCircle.style.transition = "2s"
            pinkCircle.style.transform = "rotate(270deg)";
            setTimeout(function(){
                pinkCircle.style.clipPath = "polygon(0 8%, 29% 49%, 50% 85%, 0 85%)";
            }, 500)
            console.log(speed);
          
}

gasPedal.addEventListener("click", gasFunction
);

// Brake pedal logic

brakePedal.addEventListener("click", function(){
    let speed = leftArrow[1].style.transform;
    gear = 0;
    displayIncrement = 0;
    rotateIncrement = 0;
    currentSpeed = 0;
    leftArrow[0].style.transform = "rotate(-45deg)";
    setTimeout(function(){
        pinkCircle.style.clipPath = "polygon(51% 0, 95% 0, 95% 50%, 50% 85%, 0 85%, 0% 60%, 0 0)";
    }, 500)
    pinkCircle.style.transform = "rotate(0deg)";
    leftArrow[1].style.transform = "rotate(-45deg)" 
    document.querySelector(".left h2").textContent = "P";
    document.querySelector(".right h2").textContent = displayIncrement;
    console.log(speed);
})

//Shift pedal logic

shiftGear.addEventListener("click", function (){

    
    if (gear < 6){
        gear +=1;
     
        document.querySelector(".left h2").textContent = gear;

    setInterval(function(){
        
        if(currentSpeed < displayIncrement){
            currentSpeed += 1;
            document.querySelector(".right h2").textContent = `${currentSpeed}`;
        }
    }, 37);
    

    if (displayIncrement < 225){
        displayIncrement += 45;
    } else if (displayIncrement === 225){
        displayIncrement += 35;
    }

    if (displayIncrement <= 135){
        rotateIncrement += 60.75;
    }
    
    if (displayIncrement > 135 && displayIncrement <= 225){
        rotateIncrement += 33;
    }

    if(displayIncrement > 225 && displayIncrement <= 260 && rotateIncrement <= 248.25){
        rotateIncrement += 21;
    } 

    console.log(`Rotate increment: ${rotateIncrement}`)
    
    

    leftArrow[0].style.transition = "0.5s";
    leftArrow[0].style.transform = "rotate(45deg)";
    pinkCircle.style.transition = "0.5s";
    pinkCircle.style.transform = "rotate(90deg)";
    setTimeout(function(){
        
        pinkCircle.style.clipPath = "polygon(51% 0, 95% 0, 95% 50%, 50% 85%, 0 85%, 0% 60%, 0 0)";
    }, 300)
    setTimeout(function returnRev (){
        leftArrow[0].style.transition = "2s";
        leftArrow[0].style.transform = "rotate(225deg)";
        pinkCircle.style.transition = "2s";
        pinkCircle.style.transform = "rotate(270deg)";
        setTimeout(function(){
            
            pinkCircle.style.clipPath = "polygon(0 8%, 29% 49%, 50% 85%, 0 85%)";
        }, 300)
    }, 500);
    leftArrow[1].style.transform = `rotate(${rotateIncrement - 45}deg)`;
}
})


    


    