const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
// const path = require('path');
// const router = express.Router();
//
const app = express();

// app.use(express.static(__dirname + '/public'))
// app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/portfolioDB", {useNewUrlParser: true});
// mongoose.connect("mongodb+srv://UduakSam:Johnuduak001@@cluster0.i0xsk36.mongodb.net/?retryWrites=true&w=majority/todolistDB", {useNewUrlParser: true});

app.get("/",function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/resume", function(req,res){
  res.render("resume");
});







app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
