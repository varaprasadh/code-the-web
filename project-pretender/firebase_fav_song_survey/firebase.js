 
function submit(){
	var dbref=firebase.database().ref();

	var name=document.getElementById('_name').value;
	var number=document.getElementById('_number').value;
	var song=document.getElementById('_song').value;
   if(!isNaN(Number(number)) && number.length==10){
   	//alert("string"+number +"\nnumber:"+Number(number));

  //  dbref.child("number").set(Number(number));
    firebase.database().ref("users/"+Number(number)).set({
    	"name":name,
    	"song":song
    });
    window.location="https://www.youtube.com/results?search_query="+song;
    alert("saved successfully\nthanks");
   }
   else{
   	alert("enter correct number");
   }
}
