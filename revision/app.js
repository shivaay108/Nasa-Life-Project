const http = require('http'); 
const express = require('express')
const port = 9000;

const app = express();

app.get('/', (req,res)=>{
    res.send("this is runningon express");
})

app.listen(port);