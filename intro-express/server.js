//(1) load the express module
const express = require('express');
const path = require('path');
// (2))xpress is a function that return a object that can handle all the http/server stuff
const app = express(); // app is now that object that can handle all the http/server stuff
const TodoDB = require('./data/todo-db'); // requiring our custom module
// TodoDB is our model, model is a represention of our data
// models are always capitalized


app.set('view engine', 'ejs'); // declares what template engine we are using
app.set('views', path.join(__dirname, 'views')); // where are views directory is located
// __dirname, is a variable that is always where the file currently running is

app.get('/todos', function(req, res){
	res.render('todos/index', {
		name: 'jim',
		todos: TodoDB.getAll() // return the todos array
	}) // keys on this object are variable names inside of the template (todos/index)
})

// app.get listens for a get request from the client (browser)
// `/` is localhost:3000 -> www.google.com or facebook.com
app.get('/', function(req, res){ // req is short for request, res is short for response
 res.render('home') // don't have to give it a filepath just the name of the file
})

app.get('/fruits', function(req, res){
	console.log(req)
	res.send('<h2>fruits route is setup</h2>')// res.send is just for simple messages
})


//(3) setting up our server to listen on port 3000 on our computer 
// be able to listen for http requests from the browser(client) at this location
app.listen(3000, function() {
	console.log("Listening on port 3000")
}) 
