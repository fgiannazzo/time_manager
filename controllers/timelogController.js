const Timelog = require('../models/timelogModel');
const factory = require('./handlerFactory');

exports.createTimelog = factory.createOne(Timelog);
exports.deleteTimelog = factory.deleteOne(Timelog);
exports.updateTimelog = factory.updateOne(Timelog);
exports.getTimelogs = factory.getAll(Timelog);
