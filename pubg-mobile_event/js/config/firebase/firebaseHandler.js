var db=firebase.database();
var picdb=firebase.storage();
function addToDatabase(data){
// addLoader();
db.ref("/Members/"+data.playerid).set(
    {
        name:data.name,
        pid:data.playerid,
        mobile:data.player_mobile,
        team:data.team,  
        filename:data.filename  
    }
).then(docref=>{
    console.log(docref.id);
    // removeLoader();
}).catch(err=>err);
    var picref = picdb.ref('/Screenshots/' + data.playerid);
var task=picref.put(data.file);
addLoader();
task.on('state_changed',
    function progress(snapshot) {
        var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent);
        updateLoader(percent);
    }
,
    function error() {
        console.log("error");
        alert("somthing went wrong..contact us directly!");
    }
    ,
    function completed() {
     removeLoader();
     alert("registration succeded");
    });
}