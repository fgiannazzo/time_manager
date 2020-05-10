const catchAsync = require('./../utils/catchAsync');

exports.getIndex = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'future home of something cool.'
  });
});
