var colors = [
"rgb(245, 96, 66)",
"rgb(245, 206, 66)",
"rgb(182, 245, 66)",
"rgb(66, 245, 176)",
"rgb(66, 170, 245)",
"rgb(203, 66, 245)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
	messageDisplay.textContent = "Correct!";
	changeColors(clickedColor);
} else {
	this.style.backgroundColor = '#232323';
	messageDisplay.textContent = "Try Again";
}
});
}

function changeColors(color){
for (i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}