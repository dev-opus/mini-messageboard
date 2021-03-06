const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = require('../config/dbconn');

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

const Message = connection.model('Message', MessageSchema);
module.exports = Message;
