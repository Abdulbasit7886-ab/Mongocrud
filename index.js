//import express & mongoose
const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const routes = require('./router/mongo.router')

app.use(express.json());
app.use('/', routes)


const port=3000; 

app.get('/', (req,res)=>{
	res.send('Hello World')
});


app.listen( port, ()=>{
	console.log(`Server is listening at port: ${port}`);
})

module.exports = {
	app
  }
  