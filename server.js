//jshint esversion:6

const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hellow");
});

app.get("/about", function(req, res){
    res.send("I am Ernest and I love eating and coding")
});

app.listen(3000, function(){
    console.log("Server at 3000");
});
