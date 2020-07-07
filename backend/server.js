 var express = require("express");
 var app = express()
 var bodyParser= require('body-parser');
 var cors = require('cors')
 app.use(cors());
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

app.post('/api',(req,res) =>{
    console.log("body =>>",req.body)
    console.log("data =>>",req.data)
    res.send(`hello`);
})

 app.listen(5000,()=>{
     console.log("server is running")
 })