const Timelog = require('../models/timelogModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const APIFeatures = require('./../utils/apiFeatures');

exports.createTimelog = factory.createOne(Timelog);
exports.deleteTimelog = factory.deleteOne(Timelog);
exports.updateTimelog = factory.updateOne(Timelog);

exports.getTimelogs = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.userId) filter = { user: req.params.userId };

  // EXECUTE QUERY
  const features = new APIFeatures(Timelog.find(filter), req.query)
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
