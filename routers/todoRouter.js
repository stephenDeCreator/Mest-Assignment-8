const router = require('express').Router();
const todoController = require('../controllers/todoControllers');

router.get('/', todoController.getAllTodos);

router.get('/:id', todoController.getSingleTodo);

router.post('/', todoController.createTodo);

router.patch('/:id', todoController.updateTodo);
router.patch('/:id/toggle', todoController.toggleCompleted);

router.delete('/:id', todoController.deleteTodo);

router.delete('/', todoController.deleteAllTodos);

module.exports = router;
