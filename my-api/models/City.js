const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

module.exports = mongoose.model("City", citySchema);
