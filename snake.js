function snake(){
	this.x = 0;
	this.y = 0;
	this.speedx = 1;
	this.speedy = 0;

	this.update= function(){
		this.x=this.x+this.speedx*scl;
		this.y=this.y+this.speedy*scl;

		this.x=constrain(this.x,0,width-scl);
		this.y=constrain(this.y,0,height-scl);
	}

	this.show=function(){
		fill("white");
		rect(this.x,this.y,scl,scl);

	}

	this.dir=function(x,y){
		this.speedx = x;
		this.speedy = y;
	}

	this.eats=function(food){
		var d=dist(this.x,this.y,food.x,food.y);
		if (d<1) {
			return true;
		}else{
			return false;
		}
	}
}