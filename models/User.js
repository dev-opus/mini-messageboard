const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = require('../config/dbconn');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  salt: String,
  hash: String,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports.User = connection.model('User', UserSchema);
