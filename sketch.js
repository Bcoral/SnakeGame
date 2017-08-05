var snake;
var scl=40;
var food;
var score=0;

function setup() {
    createCanvas(1800,800);
    snake = new snake();
    frameRate(15);
    pickLocations();
}

function draw() {
	background(50)
	snake.update();
	snake.show();

	if(snake.eats(food)){
		pickLocations();
		score++;
		document.getElementById('Puntos').innerHTML=score;
	};

	fill(255,0,100);
	rect(food.x,food.y,scl,scl);

	console.log(score);
}

function keyPressed(){
	if(keyCode== UP_ARROW){
		snake.dir(0,-1);
	}else if (keyCode== DOWN_ARROW) {
		snake.dir(0,1);
	}else if (keyCode== LEFT_ARROW) {
		snake.dir(-1,0);
	}else if (keyCode== RIGHT_ARROW) {
		snake.dir(1,0);
	}
}	

function pickLocations(){
	var cols=floor(width/scl);
	var rows=floor(height/scl);
	food=createVector(floor(random(cols)),floor(random(rows)))
	food.mult(scl)
}














