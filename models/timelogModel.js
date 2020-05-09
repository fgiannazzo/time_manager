const mongoose = require('mongoose');

const timelogSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  timeOfDay: {
    type: String
  },
  timeSpentString: {
    type: String
  },
  timeSpentInt: {
    type: Number
  },
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    required: [true, 'Timelog must be associated to a Project!']
  }
});

const Timelog = mongoose.model('Timelog', timelogSchema);

module.exports = Timelog;
