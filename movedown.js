var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth-10;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var y=0;
var dy=1;
// window.addEventListener("click",function(event){
//      console.log("click");
//      var x=event.clientX;
//       y=event.clientY;
     // c.clearRect(0,0,window.innerWidth,window.innerHeight);
     // c.beginPath();
     // c.arc(x,y,30,0,Math.PI*2,false);
     // c.strokeStyle="green";
     // c.stroke();
 //});
var circles=[];
window.addEventListener("click",function(event){
   var x=event.clientX;
   var y=event.clientY;
   var cir= new circle(x,y,30);
   circles.push(cir);
});
var circle=function(x,y,r){
	 this.x=x;
	 this.y=y;
	 this.r=r;
     this.draw=function(){
     c.beginPath();
     c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
     c.stroke();
     }
       this.update=function(){
       this.y+=dy;
       this.draw();
  }
}

function animate(){
		c.clearRect(0,0,window.innerWidth,window.innerHeight);

	for(var i=0;i<circles.length;i++){
    circles[i].update();
    }
	requestAnimationFrame(animate);
}
animate();