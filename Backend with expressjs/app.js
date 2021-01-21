const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const url = require('url')
var request = require('request')
var bodyparser = require('body-parser')
var http = require('http')

var http = require('http');

var http = require('http');
var cors = require('cors');
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(cors({
  origin: 'http://localhost:3000'
}));

const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/makesoftdb', {useNewUrlParser: true,
useUnifiedTopology: true,}).then(() => console.log("connection successful...."));

const loginschema = new mongoose.Schema({
  email : String,
  password : String
});

const signupschema = new mongoose.Schema({
  email : String,
  name : String,
  phone : String,
  password : String
});

const contactschema = new mongoose.Schema({
  email : String,
  name : String,
  message : String,
});

const Login = new mongoose.model("Login",loginSchema);
const Signup = new mongoose.model("Signup",signupSchema);
const Contact = new mongoose.model("Contact",contactSchema);

app.post("/contact", (req, res) => {
  var name= req.body.user.name;
  var email =req.body.user.email;
  var msg= req.body.user.msg;
  const reactcontact = new Contact({
    name : name,
    email : email,

    message : msg
  });
  reactcontact.save(),
  console.log(`${name}`)
  res.send(name)
});

app.post("/login", (req, res) => {
  var email= req.body.user.email;
  var pswd= req.body.user.pswd;
  console.log(`${email}`)
  const reactlogin = new Login({
    email : email,
    password : pswd
  });
  reactlogin.save(),
  
  res.send(email)
});

app.post("/signup", (req, res) => {
  var email= req.body.user.email;
  var name= req.body.user.name;
  var phone= req.body.user.phone
  var pswd= req.body.user.pswd;
  console.log(`${email}`)
  console.log(`${phone}`)
  const reactsignup = new Playlist({
    name : name,
    email : email,
    phone : phone,
    password : pswd
  });
  reactsignup.save();
  

  res.send(email)
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})