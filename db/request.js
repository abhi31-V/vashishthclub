var bodyParser = require('body-parser');
const express = require('express');
const app = express()
const mo=require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 var s =mo.Schema
 var nameSchema = new mo.Schema({
   
   name: String,
   pass: String,
 
 
  });
  var User = mo.model("User", nameSchema);
  module.exports=User