const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 60
  },
  productID: {
    type: String,
    trim: true,
    required: true
  },
  productTitle: {
    type: String,
    trim: true,
    required: true
  },
  commentBody: {
    type: String,
    trim: true,
    required: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Comment', commentSchema);
