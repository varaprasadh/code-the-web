console.log("connected");
var x=200;
var y=200;
var d=40;
var color=0;
function setup(){
	createCanvas(600,600);
	background(0);
	//noLoop();

}
function draw(){
	// color=(color+10)%255;
	//stroke(floor(random(254)));
	//background(0);
	stroke(random(255),random(255),random(255),255);
	strokeWeight(.1);
	noFill();
	drawCircle(x,y,d);

}
function drawCircle(x,y,d){
    ellipse(x,y,random(10));

	 if(d>2){
	   	//4 way decresing circles;
	    // drawCircle(x+d/2,y,d/2);
	    // drawCircle(x-d/2,y,d/2);
	    // drawCircle(x,y+d/2,d/2);
	    // drawCircle(x,y-d/2,d/2);

    //some colorful animation along with mouse;
	drawCircle(mouseX+d/2,mouseY,d/2);
	drawCircle(mouseX-d/2,mouseY,d/2);
	drawCircle(mouseX,mouseY+d/2,d/2);
	drawCircle(mouseX,mouseY-d/2,d/2);
    }
    
	
}