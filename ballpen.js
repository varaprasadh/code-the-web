var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth-10;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
window.addEventListener("click",function(event){
     console.log("click");
     var x=event.clientX;
     var y=event.clientY;
     c.clearRect(0,0,window.innerWidth,window.innerHeight);
     c.beginPath();
     c.arc(x,y,30,0,Math.PI*2,false);
     c.strokeStyle="green";
     c.stroke();
 });

window.addEventListener("mousemove",function(event){
   var x=event.clientX;
   var y=event.clientY;
  new circle(x,y,30);

});
var circle=function(x,y,r){
  c.beginPath();
  c.arc(x,y,r,0,Math.PI*2,false);
  c.stroke();
}

function animate(){
	requestAnimationFrame(animate);

}
animate();