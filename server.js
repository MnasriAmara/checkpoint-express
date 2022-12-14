const express=require('express')
const app=express()
const fs = require("fs");
const path=require('path');
const { nextTick } = require('process');
const port=3000



//create middleware

app.use((req, res, next) => {
  var dateObj=new Date();
  var hours = dateObj.getHours();
  var day = dateObj.getDay();
  if ((hours < 9 || hours > 19 || day == 0 || day == 6)) {
   return res.send('<h1> We Are Closed </h1>');
  }
   else {
   return next()
  };
});

// home page
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/views/home.html');
}).get('/services', function (req, res) {
  res.sendFile(__dirname+'/views/services.html');
}).get('/contact', function (req, res) {
  res.sendFile(__dirname+'/views/contact.html');
}).use(express.static(path.join(__dirname , "/views")));


app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });