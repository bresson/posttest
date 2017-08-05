const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  title: String,
  subtitle: String,
  seller: String
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
