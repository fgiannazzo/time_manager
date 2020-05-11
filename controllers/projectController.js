const Project = require('../models/projectModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const APIFeatures = require('./../utils/apiFeatures');

exports.createProject = factory.createOne(Project);
exports.deleteProject = factory.deleteOne(Project);
exports.updateProject = factory.updateOne(Project);

exports.getProjects = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.userId) filter = { user: req.params.userId };

  // EXECUTE QUERY
  const features = new APIFeatures(Project.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  // explain process of query mongo:
  // const doc = await features.query.explain();
  const doc = await features.query;

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc
    }
  });
});
