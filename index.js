const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb://sergey0692:89023832601k@ds227674.mlab.com:27674/ohdesign_avto', { useNewUrlParser: true }, function (err) 
{
  if (err) throw err;
  console.log('Successfully connected');
});

app.use(bodyParser.json());

app.use("/api", require("./api"));

app.listen(4000, ()=>{
    console.log("server is on");
});