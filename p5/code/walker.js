console.log("connecter");


var walkers=[];
var t=10;
var x=100;
var y=100;
function setup(){
	createCanvas(500,500);
	background(255);


}
function draw(){
	 var walk=new walker();
	 walk.turn();
	 walk.display();
     //need to be analysed!.
	// if(mouseIsPressed){
	// 	 var walk=new walker(mouseX,mouseY);
	// 	 walkers.push(walk);
	// }
 //   if(walkers){
 //   	for(var i=0;i<walkers.length;i++){
  
	// 	  walkers[i].turn();
	// 	  walkers[i].display();
 //     }	
 //  }
}

var walker=function(){
     
	  this.turn=function(){
       var dir=floor(random(4));
       switch(dir){
       	case 0: x++; break;
       	case 1: y++; break;
       	case 2: x--; break;
       	case 3: y--; break;
       }
      }
      this.display=function(){
      	fill(0);
      	point(x,y);
	    }
}
