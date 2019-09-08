var colors = generatecolors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
colordisplay.textContent = pickedcolor;

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors = generatecolors(3);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors = generatecolors(6);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++) {
		
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});



resetbutton.addEventListener("click", function(){
	colors = generatecolors(6);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background = colors[i];
		
	}
	h1.style.background = "steelblue";
	resetbutton.textContent = "New game";
	message.textContent = "";


})

for(var i=0;i<squares.length;i++) {
	squares[i].style.background = colors[i];
	//add inital colors
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor){
			message.textContent = "Correct";
			changeColor(clickedcolor);
			h1.style.background = clickedcolor;
			resetbutton.textContent = "Play Again?"
		}
		else {
			this.style.background = "#232323";
			message.textContent = "try again";
		}
		
	});
}

function changeColor(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background = color;
	}
}

function pickcolor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatecolors(num) {
	var arr = [];
	for(var i = 0;i<num;i++) {
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}