var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "MOO",
        dog: "WOOF WOOF",
        cat: "I hate you human",
        whale: "..."
    }
    
    var animal = req.params.animal;
    var sound = sounds[animal];
    
    res.send("The " + animal + " says " + sound);
})


app.get("/repeat/:word/:count", function(req, res){
    var word = req.params.word;
    var count = Number(req.params.count);
    var result = "";
    //console.log(count);
    
    for (var i = 0; i < count; i++){
        result += (word + " ");
    }
    res.send(result)
})

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life'");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
})