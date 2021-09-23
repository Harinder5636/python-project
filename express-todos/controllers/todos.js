const res = require('express/lib/response');
const Todo = require('../models/todo'); // < Models are always capitalized
// models are a representation of our data



module.exports = {
	index: index,
	show: show,
	new: newTodo,
	create: create
  };

function create(req, res){
	console.log(req.body, " <--- will be the contents of the form");
	Todo.create(req.body); // <-- Model says create a new Todo in the database
	//for posts we usually redirect the client to the index page
	res.redirect('/todos') // /todos is a route, tells the client to make a request to /todos
}
  
// since new is a reserved keyword call the function newResourceName
// in our case newTodo
function newTodo(req, res){
	res.render('todos/new') // <-- looks in our views folder
}


function index(req, res) { // <--- index says getAll of whatever the resource in this case todos
	res.render('todos/index', {
	  todos: Todo.getAll(),
	  mostRecentTodos: req.time
	});
}

function show(req, res){
	console.log(req.params)
	res.render('todos/show', {
		todo: Todo.getOne(req.params.id) // <- where is the .id coming from ?
	})
}
