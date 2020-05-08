const catchAsync = require('./../utils/catchAsync');

exports.getIndex = catchAsync(async (req, res) => {
  // const data = await Readings.find();
  // res.status(200).render('index', {
  //   title: 'Homepage',
  //   data: {
  //     temp: data.temp,
  //     humidity: data.humidity
  //   }
  // });
  res.status(200).json({
    status: 'success',
    message: 'future home of something cool.'
  });
});
