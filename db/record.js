
const express = require('express');
var bodyParser = require('body-parser');

const mo=require("mongoose");
const url='mongodb://localhost/abhidb4'
const app = express()
mo.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>
{
  console.log(`connected......y`)
}).catch((e)=>
{
  console.log("errro")
})




// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//  var s =mo.Schema
//  var nameSchema = new mo.Schema({
   
//    name: String,
//    pass: String,
 
 
//   });
//   var User = mo.model("User", nameSchema);
//   module.exports=User
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//  var s =mo.Schema
// var nameSchema = new mo.Schema({
  
//   Name: String,
//   lastNameName: String,
//   Password: String,
//   _id: String,
//   Phone_no: Number

//  });
//  var User = mo.model("User", nameSchema);
//  module.exports=mo.Mongoose.model('ab',al)