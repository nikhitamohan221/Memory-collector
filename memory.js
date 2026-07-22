const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Memory = mongoose.model('Memory', memorySchema);
module.exports = Memory;
