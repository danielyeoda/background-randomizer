var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function randomizeColor(){
	function randomizeX(){
		return Math.floor((Math.random()*255)+0);
		}

	var colora = "rgb(" + randomizeX() + "," + randomizeX() + "," + randomizeX() + ")";
	var colorb = "rgb(" + randomizeX() + "," + randomizeX() + "," + randomizeX() + ")";
	console.log ("random color a = " + colora);
	console.log ("random color a = " + colorb);

	body.style.background = 
	"linear-gradient(to right, " + colora + ", " + colorb + ")";
	css.textContent = body.style.background + ";";

	console.log("gradient set!");
}
 
random.addEventListener("click", randomizeColor);

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	console.log("gradient set!");

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
