var canvas=document.querySelector('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var c=canvas.getContext('2d');
c.fillStyle="green";

var circle=function(x,y,radius,dx,dy){
 this.x=x;
 this.y=y;
 this.radius=radius;
 this.dx=dx;
 this.dy=dy;

 this.draw=function(){
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
      c.stroke();
 }

this.upadate=function(){
	if(this.x>window.innerWidth+this.radius || this.x-this.radius<0){
		this.dx =-this.dx;
	}
	if(this.y>window.innerHeight+this.radius ||this.y-this.radius<0){
		this.dy=-this.dy;
	}
	 this.x+=this.dx;
	 this.y+=this.dy;
	 this.draw();
}

}
var circles=[];

for(var i=0;i<100;i++){
var temp=new circle(Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.random()*70,1,1);
circles.push(temp);
}
function animate(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(animate);
    for(i=0;i<circles.length;i++){
    	circles[i].upadate();
    }
	

}
animate();
