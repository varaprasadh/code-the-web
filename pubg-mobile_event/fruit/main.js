
function createCard(data){
    var temp =`<div class="item" data-itemData="${JSON.stringify(data)}">
                <div class="image"><img src="${data.imgsrc}" alt=""></div>
                <div class="details">
                    <div class="name">name: ${data.name}</div>
                    <div class="name">gameid: ${data.pid}</div>
                    <div class="mobile">mobile: ${data.mobile}</div>
                    <div class="team">Team:{${data.team.toString()}}</div>
                </div>
            </div>`;
    return temp;
}

window.onload=function(){
  var db=firebase.database();
  var picdb=firebase.storage();
  console.log(db,picdb);
  db.ref('Members').on('value',function(snapshot){
      var members=snapshot.val();
      var memList=Object.keys(members);
      memList.forEach(key=>{
          console.log(members[key]); 
          var mem_data = members[key];
          var pid=mem_data.pid;
          var filename=mem_data.filename;
          var name=mem_data.name;
          var mobile=mem_data.mobile;
          var team=mem_data.team.toString();

          picdb.ref('Screenshots/'+pid)
              .getDownloadURL().then(url=>{
                var data={
                 pid,
                 name,
                 mobile,
                 imgsrc:url,
                 team
                }
            
                  console.log(createCard(data));
                  document.querySelector('.list').innerHTML += createCard(data);
                  document.querySelector('.item').addEventListener('click',e=>{
                    
                  })
              })
      })
  })
  
}