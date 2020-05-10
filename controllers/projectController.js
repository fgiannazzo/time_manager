const Project = require('../models/projectModel');
const factory = require('./handlerFactory');

exports.createProject = factory.createOne(Project);
exports.deleteProject = factory.deleteOne(Project);
exports.updateProject = factory.updateOne(Project);
exports.getProjects = factory.getAll(Project);
