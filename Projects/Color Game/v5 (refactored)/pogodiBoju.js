var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
	// mode button event listeners
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener('click', function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Lagani mod'? numSquares = 3: numSquares = 6;
		// if(this.textContent === "Lagani mod"){
		// 	numSquares = 3;
		// } else {
		// 	numSquares = 6;
		// }
		reset();
		})
	}

	for (i=0; i< squares.length; i++){
	/*add event listeners */
	squares[i].addEventListener("click", function (){
		/*grab clicked color*/
	var clickedColor=this.style.backgroundColor;
	/*compare clicked and picked*/	
	if(clickedColor===pickedColor){
		messageDisplay.textContent = "Pogodili ste!";
		resetButton.textContent="Igraj ponovno?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {
		this.style.backgroundColor = '#232323';
		messageDisplay.textContent = "Hmmm, nije ta";
			}
		});
	}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent="Nove boje";
	//color the squares
	for (i=0; i<squares.length ; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	}
h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset()
});




function changeColors(color){
for (i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	// repeat num times
	for(var i=0 ; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	} 
	//return that array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
} 