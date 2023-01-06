var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var largura = 100;
var altura = 90;
var roverX = 10;
var roverY = 10;
var img = "marte.jpg";
var roverImg = "rover.png";
var fundo = new Image();
var rover = new Image();
function add() {
	fundo.onload = carregarfundo;
	fundo.src = img;

	rover.onload = carregarrover;
	rover.src = roverImg;
}
function carregarfundo() {
	ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
}
function carregarrover() {
	ctx.drawImage(rover, roverX, roverY, largura, altura);
}


var x= document.getElementById("myAudio");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var largura = 100;
var altura = 90;
var rouverX = 10;
var rouverY = 10;
var img = "BirthdayImage.jpg";
var rouver = "rover.png";



function carregarfundo() {
	ctx.drawImage(fundo, 0, 0, canvas.width, canvas.heigth);
}









function t () {
x.play


}

