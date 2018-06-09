console.log("connected");
var tracker;
var angle=90;
var cwidth=500;
var cheight=500;
var bgcx=250,bgcy=250;
function setup(){
  createCanvas(cwidth,cheight);
  background(0);
  tracker=createVector(100,100);
  console.log(tracker);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
  frameRate(30);
}

function draw(){
  bgCircle();
  mainLine();
  tckpoint();
  update();


}
function update(){

    tracker.x=sin(angle);
    tracker.y=cos(angle);
    tracker.x=map(tracker.x,0,1,bgcy-50,bgcy+50);
    tracker.y=map(tracker.y,0,1,bgcx-50,bgcx+50);
    // console.log(tracker.x,tracker.y);
    angle+=1;
    var ang=angle<=360?angle:angle%360;
    fill(100,255,250);
    text("angle:"+ang,50,100);
    text("x value:"+tracker.x+50,50,120);
    text("y value:"+tracker.y+50,50,130);
}
function bgCircle(){
  background(0);
  grid();
  noFill();

  strokeWeight(3);
  stroke(255,0,100);
  ellipse(bgcx,bgcy,100);
  stroke(120,150,130);
  line(bgcx-100,bgcy,bgcx+100,bgcy);
  line(bgcx,bgcy-100,bgcx,bgcy+100);

}
function tckpoint(){
  noFill();
  stroke(140,150,255);
  arc(bgcx,bgcy,100,100,-angle+90,0);
  fill(255);
  ellipse(tracker.x+50,bgcy,5);
  ellipse(bgcx,tracker.y+50,5);
  fill(0,255,100);
  ellipse(tracker.x+50,tracker.y+50,10);
  fill(255,0,0);
  arc(bgcx,bgcy,10,10,-angle+90,0);

}
function mainLine() {
  strokeWeight(2);
  stroke(50,50,200);
  line(bgcx,bgcy,tracker.x+50,tracker.y+50);//main daigonal
  //line(tracker.x+50,bgcy,bgcx,tracker.y+50);//verticle main line
  line(tracker.x+50,bgcy,bgcx,bgcy); //horizontal main track line
  line(bgcx,tracker.y+50,bgcx,bgcy); // verticle main track line
  line(tracker.x+50,tracker.y+50,bgcx,tracker.y+50); //horizontal main track line
  line(tracker.x+50,tracker.y+50,tracker.x+50,bgcy);
}
function grid(){
  for(var i=0;i<cheight;i+=50){
    for(var c=0;c<cwidth;c+=50){
      strokeWeight(1);
      stroke(100,100,100);
      line(c,0,c,cheight);
      line(0,i,cwidth,i);
    }
  }
}
