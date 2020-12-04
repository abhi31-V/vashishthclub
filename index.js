
const express = require('express');
// var bodyParser = require('body-parser');

// const mo=require("mongoose");
// // const url='mongodb://localhost/abhidb'
const app = express()
const port =process.env.PORT||3000
// mo.connect(url,{useNewUrlParser:true})
// const con=mo.connection
// con.on('open',function()
// {
//   console.log("connected......")
// })
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// var s =mo.Schema
// var nameSchema = new mo.Schema({
  
//   _id: String,
//   lastNameName: String
//  });
//  var User = mo.model("User", nameSchema);
 
// const partial=require("pa")
const User=require("./db/request")
require('./db/record')
const al=require('./routes/home')
app.use('/',al)
const p=require('path')
const o=p.join(__dirname,'views/')
app.use(express.static('images/'));
console.log(o)
app.set('view engine','hbs')
// app.get('/', (req, res) => {
//   res.render(o+'index')
// })
// app.post("/addname", (req, res) => {
//   var myData = new User({
//     _id: req.body.firstName,
//     lastNameName: req.body.lastName
//   } );
//   console.log(myData)
//   myData.save()
//   .then(item => {
//   res.redirect('/');
//   })
//   .catch(err => {
//   res.status(400).send("unable to save to database");
//   });
//  });


// app.get('/', (req, res) => {
//   res.render(o+'home')
// })
// app.get('/show',(req,res)=>
// { User.find({lastName:""},(err,docs)=>{
//   res.render(o+'/show',{
//     title:"web page",
//     user:docs})
//  console.log(docs)
// })})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
