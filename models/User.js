const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 30,
    required: true
  },
  gender: {
    type: String,
    trim: true,
    maxlength: 30,
    required: true
  },
  accType: {
    type: String,
    required: true
  },
  phoneNum: {
    type: Number,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    default: new Array(1)
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("User", userSchema);
