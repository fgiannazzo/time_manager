const mongoose = require('mongoose');

const timelogSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  dateString: {
    type: String
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

timelogSchema.pre(/^find/, function(next) {
  this.populate('project').populate({
    path: 'project',
    select: '_id'
  });
  this.populate('project').populate({
    path: 'project',
    select: 'name'
  });
  next();
});

const Timelog = mongoose.model('Timelog', timelogSchema);

module.exports = Timelog;
