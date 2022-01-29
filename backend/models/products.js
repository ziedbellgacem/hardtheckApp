const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productShema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  pictureUrl: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productShema);
