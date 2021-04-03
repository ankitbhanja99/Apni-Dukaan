const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [
        {
            productID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                trim: true,
                required: true,
                min: [1, 'Quantity can not be less then 1.'],
                default: 1
            },
        }
    ],
});
  
  module.exports = mongoose.model('Cart', cartSchema);