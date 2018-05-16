console.log("connected");
var x=250;
var y=500;
var xlen=50;
var ylen=50;
function setup(){
	createCanvas(600,600);
	background(0);

}

function draw(){
	background(0);
   drawBranch(x,y,x,y-50);
}
function drawBranch(x,y,x1,y1){
    //background(0);
	//stroke(255,255,255,1);
	stroke(255);
	strokeWeight(1);
	line(x,y,x1,y1);

	if(y1>10){
     drawBranch(x1,y1,x1+(xlen+10),y1-50);
     drawBranch(x1,y1,x1-(xlen-10),y1-50);
	}

 
}

// if(yseed>2){
// 		drawBranch(x+xseed,y-yseed,xseed,yseed-10);
// 		drawBranch(x-xseed,y-yseed,xseed,yseed-10);
// 	}


