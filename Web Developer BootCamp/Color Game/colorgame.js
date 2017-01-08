var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match pciked color
	colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
    	squares[i].style.background = colors[i];
    }
});

for (var i = 0; i < squares.length; i++) {
    //Add intital colors to squares
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		//grab color of clicked picture
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares 
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	h1.style.background = "#232323";
	//change each color to the correct color	
}

function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand]; 
}

function generateRandomColors(num) {
	//make an array 
	//add num random colors to array
	//return array
	var arr = [];

	for (var i = 0; i < num; i++) {
		//get the random colors, push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	//green too
	//blue as well
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}	