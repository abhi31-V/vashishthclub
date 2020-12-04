const express = require('express');
const router = express.Router()

const p=require('path')
const o=p.join(__dirname,'../views/')
console.log(o)
router.get('/', (req, res) => {
    console.log('vhhhhhh....')
  res.render(o+'index')
})

router.get('/request',(req,res)=>
{
  res.render(o+'request')
})
router.post('/request', (req,res)=>
{
try{
  var myData = new User({
     
      } );
      console.log(myData)
      myData.save()
      .then(item => {
      res.redirect('/');
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
})

router.get('/about', (req, res) => {
  console.log('vhhhhhh....')
res.render(o+'about')
})
module.exports=router