var dbref;
var name="bean";
database=firebase.database();
window.onload=function(){
   loadPosts();
};
function submit(){
	var name=document.getElementById('name-box').value;
	var post=document.getElementById('post-box').value;
    if(name != "" && post != ""){
	   console.log(post);
	   firebase.database().ref("your book/").push({
		"name":name,
		"post":post
	});
	console.log("success");
	location.reload();
     }

     else{
     	alert("make sure that you are doing well!");
     }
}
function loadPosts(){
	var ref=database.ref("your book");
	ref.on('value',getData,errData);
	console.log(ref);
}

function getData(data){
    console.log(data.val());
    var raw=data.val();
    var keys=Object.keys(raw);
    console.log(keys);
    for(var i=keys.length-1;i>=0;i--){
    	var key=keys[i];
    	var name=raw[key].name;
    	var post=raw[key].post;
        var final_post=`<div id="name">${name}</div> <br/> <div id="text">${post}</div>`;
        var list_item=document.createElement("li");
        list_item.classList.add("post-card");
        list_item.innerHTML=final_post;
        document.getElementById("post-list").appendChild(list_item);
        }

}
function errData(err){
	console.log("error"+err.msg);
}
