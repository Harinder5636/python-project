var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todos')



/* GET users listing. */
router.get(' /', todoController.index);
router.get('/new', todoController.new); // <--- define /new before the /:id so the new doesn't
// get captured by the params
router.get('/:id', todoController.show);
router.post('/', todoController.create);
// :id <- param, we can access that variable in the controller by using the req object


// in the server we have app.use('/users', userRouter) so every route is prepended with /users in this 
// module

module.exports = router;