var colors = [
"rgb(245, 96, 66)",
"rgb(245, 206, 66)",
"rgb(182, 245, 66)",
"rgb(66, 245, 176)",
"rgb(66, 170, 245)",
"rgb(203, 66, 245)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent=pickedColor;

for (i=0; i< squares.length; i++){
	/*add initial colors to quares*/
	squares[i].style.backgroundColor = colors[i];
	/*add event listeners */
squares[i].addEventListener("click", function (){
	/*grab clicked color*/
var clickedColor=this.style.backgroundColor;
/*compare clicked and picked*/	
if(clickedColor===pickedColor){
	alert("You guessed right!");
} else {
	alert("Wrong!")
}
});
}