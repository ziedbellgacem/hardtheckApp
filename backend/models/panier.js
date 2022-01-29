const mongoose = require("mongoose");
const schema = mongoose.Schema;
const panierSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: schema.Types.ObjectId,
    ref: "Product",
  },
});
module.exports = mongoose.model("Panier", panierSchema);
