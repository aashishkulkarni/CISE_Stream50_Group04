const mongoose = require("mongoose");

const article = new mongoose.Schema({
  title: String,
  authors: String,
  source: String,
  pubyear: String,
  doi: String,
  claim: String,
  evidence: String,
  status: {
    type: String,
    default: 'pending'
  }
});

const artickeMode = mongoose.model("article", article);

module.exports = artickeMode;
