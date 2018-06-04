console.log('connected');

function setup(){
	createCanvas(500,500);
	background(255);
}

function draw(){
  pic();	
}
function pic(){
	for(var row=0;row<500;row++){
		for(var col=0;col<500;col++){
	      let r=random(255);
          let g=random(255);
          let b=random(255);
          strokeWeight(random(10));
          if(r<200) ellipse(random(500),random(500),10);
          stroke(r,g,b);
	      point(row,col);
	    }
   }
}