const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  googleId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving the user
AuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare the provided password with the hashed password
AuthSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

exports.Auth = mongoose.model("Auth", AuthSchema);
