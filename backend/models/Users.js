const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("User", userSchema);
