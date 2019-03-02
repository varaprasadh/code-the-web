const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/fruit',(req,res)=>{
    res.sendFile(path.join(__dirname,'fruit','admin.html'))
})
app.listen(process.env.PORT || port, () => {
    console.log("listening on port " + port);
})