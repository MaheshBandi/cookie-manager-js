const express = require('express');
const path = require('path');
var app = express();


app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{

res.sendfile(path.join(__dirname,'/public','index.html'));
});

app.listen(3000);

console.log("Node running on 3000");