const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Todo cannot be empty']
  },
  completed: {
    type: Boolean
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
