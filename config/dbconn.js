const mongoose = require('mongoose');
require('dotenv/config');

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.createConnection(
  process.env.DB_STRING,
  dbOptions,
  err => {
    if (!err) {
      console.log('db connected successfully!');
    } else {
      console.error('Oops! an error occured', err);
    }
  }
);

module.exports = connection;
