const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); done via express.json
const cors = require('cors');

const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// Require Rouiter Files
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');
const timelogRouter = require('./routes/timelogRoutes');

// 1) GLOBAL MIDDLEWARES

const app = express();

app.enable('trust proxy');

app.use(cors());

// app.options('*', cors());

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// SET SECURITY HTTP HEADERS
app.use(helmet());

// DEVELOPMENT LOGGING
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// READ DATA FROM BODY AND LIMIT IT TO 10KB TO PREVENT ATTACKS
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// 3) Routes (using mounted routers through middleware declarations)
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/timelogs', timelogRouter);

app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

// ERROR HANDLING
app.use(globalErrorHandler);

module.exports = app;
