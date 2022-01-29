const mongoose = require("mongoose");
const schema = mongoose.Schema;
const commentSchema = new schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: schema.Types.ObjectId,
    ref: "Product",
  },
});
module.exports = mongoose.model("Comment", commentSchema);
