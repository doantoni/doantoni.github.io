var inputBox = document.querySelector("input");
var maxText = document.querySelector("p span");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var reset = document.getElementById("reset");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var maxPoints = 5;


inputBox.addEventListener("change", function(){
	maxText.textContent = inputBox.value;
	maxPoints = Number(inputBox.value);	
})

buttonOne.addEventListener("click", function() {
	if(!gameOver){
		p1score++;
		if(p1score===maxPoints){
			gameOver=true;
			playerOne.classList.add("winner");
			playerTwo.classList.add("loser");
		}
		playerOne.textContent = p1score;
	}
});

buttonTwo.addEventListener("click", function() {
	if(!gameOver){
		p2score++;
		if(p2score===maxPoints){
			gameOver=true;
			playerOne.classList.add("loser");
			playerTwo.classList.add("winner");
		}
	}
	playerTwo.textContent = p2score;
});



reset.addEventListener('click', function() {
	playerOne.textContent = 0;
	playerTwo.textContent = 0;
	p1score = 0;
	p2score = 0;
	gameOver = false;
	playerOne.classList.remove("winner");
	playerTwo.classList.remove("winner");
	playerOne.classList.remove("loser");
	playerTwo.classList.remove("loser");
});


