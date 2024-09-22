const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: [String], // Array of strings for tags
    required: false,
    default: []
  },
  cloudinaryUrl: {
    type: String,
    required: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;