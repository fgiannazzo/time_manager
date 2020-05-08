const Todo = require('../models/appModel');
const factory = require('./handlerFactory');

exports.createTodo = factory.createOne(Todo);
exports.deleteTodo = factory.deleteOne(Todo);
exports.updateTodo = factory.updateOne(Todo);
exports.getTodos = factory.getAll(Todo);
