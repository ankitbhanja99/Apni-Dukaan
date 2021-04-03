const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 10000
  },
  price: {
    type: String,
    maxlength: 20,
    trim: true,
    required: true
  },
  category: {
    type: String,
    lowercase: true,
    required: true
  },
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
});

module.exports = mongoose.model('product', productSchema);
