const circle = document.querySelector(".circle-div");
const h1 = document.querySelector("h1");
let divs = [];
let multiplier = 0;



for(let i=1; i<=40; i++){
    
    // create function for adding circles and markings
    function incrementedAdding (){

        
            divs[i] = document.createElement("div");
            divs[i].className = "circles";
            circle.append(divs[i]);
       
               const marking = document.createElement("div");
               marking.className = "marking";
               const markingLong = document.createElement("div");
               markingLong.className = "marking-long";
       
               if(i % 4 !== 0){
                   divs[i].append(marking);
               } else {
                   divs[i].append(markingLong);
               }
               
               setTimeout(function (){
                   divs[i].style.width = "101%";
               divs[i].style.height = "101%";
                   divs[i].style.transform = `rotate(${i*9}deg)`
               }, 500);
            }

                
    
    

    // create conditionals for speeding up adding the markings in the circle
    circle.addEventListener("click", function(){
        h1.textContent = "We create circle divs in JS and one marking on each one";
        setTimeout(function(){
            h1.textContent = "Then we rotate each circle according to the degree we want each marking to be at";
        }, 4000);

        if (i< 4){
            setTimeout(incrementedAdding, 1000*i)
            
    } else if (i >= 4 && i < 10){
       
        setTimeout(function(){
            setTimeout(incrementedAdding, 500*i);
            
        }, 2000)
        
    } else {
        setTimeout(function(){
            setTimeout(function(){
                divs[i] = document.createElement("div");
                divs[i].className = "circles-no-border";
                circle.append(divs[i]);
           
                   const marking = document.createElement("div");
                   marking.className = "marking";
                   const markingLong = document.createElement("div");
                   markingLong.className = "marking-long";
           
                   if(i % 4 !== 0){
                       divs[i].append(marking);
                   } else {
                       divs[i].append(markingLong);
                   }
                   
                   setTimeout(function (){
                       divs[i].style.width = "101%";
                   divs[i].style.height = "101%";
                       divs[i].style.transform = `rotate(${i*9}deg)`
                   }, 500);
            }, 100*i);
           
        }, 5000);
    
    }

    setTimeout(function (){
        document.querySelector(".arrow").style.transform = "translate(0%)";
        h1.textContent = "Then we add an arrow";
    }, 11000);

    setTimeout(function (){
        h1.textContent = "And maybe a slider input to rotate the arrow";
        document.querySelector(".input").style.transform = "translateY(0vh)";
    }, 12000);

    setTimeout(function (){
        h1.style.color = "transparent";
       
    }, 14000);
    })     
 }

 

 function updateTextInput(val) {
    document.getElementById('textInput').value=`${val}°`;
    document.querySelector(".arrow").style.transform = `rotate(${val}deg)`; 
  }

  const firstInput = document.querySelector("#range");
  firstInput.value = 0;
  
  firstInput.addEventListener("click", function(){
        document.querySelector("p").style.display = "block";
  })