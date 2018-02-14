var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
c.fillRect(20,20,40,40);
c.fillRect(40,70,70,50);
c.fillStyle='blue';
c.beginPath();
c.moveTo(100,200);
c.lineTo(200,200);
c.strokeStyle='green';
c.stroke();

c.beginPath();
c.arc(400,400,50,0,Math.PI*2,false);
c.strokeStyle='orange';
c.stroke();

/*for(var i=0;i<100;i++){
     c.beginPath();
     c.strokeStyle="black"
     c.arc(Math.random()*500,Math.random()*600,Math.random()*100,0,Math.PI*2,false);
     c.stroke();
} */
var i=0;
function animate(){
	 requestAnimationFrame(animate);
	 c.clearRect(0,0,window.innerWidth,window.innerHeight);
     c.beginPath();
     c.strokeStyle="black"
     c.arc(Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.random()*100,0,Math.PI*2,false);
     c.stroke();
     c.fill();
   i++;
 
}
animate();