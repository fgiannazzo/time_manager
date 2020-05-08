const express = require('express');
const appController = require('../controllers/appController');

const router = express.Router();

router.post('/', appController.createTodo);
router.delete('/:id', appController.deleteTodo);
router.patch('/:id', appController.updateTodo);
router.get('/', appController.getTodos);

module.exports = router;
