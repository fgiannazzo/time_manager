const dotenv = require('dotenv');
const mongoose = require('mongoose');

// eslint-disable-next-line prettier/prettier
process.on('uncaughtException', err => {
  console.log('UNHANDLED EXCEPTION. SHUTTING DOWN...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB Connection Successful'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

// eslint-disable-next-line prettier/prettier
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION. SHUTTING DOWN...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
