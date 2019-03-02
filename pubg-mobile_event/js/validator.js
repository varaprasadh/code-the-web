var others = [];
function teamData(){
   
    var other_p_ele=document.querySelectorAll('.p');
    other_p_ele.forEach(ele=>{
        others.push(ele.value);
        
        
    })
    console.log(others);
    
}
function allDetails(){
    var pname=document.querySelector('.pname').value;
    var pid=document.querySelector('.pid').value;
    var pmobile=document.querySelector('.pmobile').value;
    var file=document.querySelector('#screenshot').files[0];
    var teammems =others.length?others:[];
    console.log(file);
    if (pname.length < 2 || pid.length < 3 || /\d{ 10, 12 }/.test(!pmobile)|| !file){
     alert("fill correctly")
    }
    var data = {
        name: pname,
        playerid: pid,
        player_mobile: pmobile,
        team: teammems,
        file: file,
        filename:file.name
    }
    addToDatabase(data);
  
}