var express = require("express");
var paper = require("paper");
var app = express();
//var paper = paper();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render ("home.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!")
})