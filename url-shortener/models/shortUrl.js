const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  // create table
  full: {
    // column
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate, // = () => shortId.generate() // generate short url
  },
  clicks: {
    type: Number,
    required: true,
    default: 0, // start from 0
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema); // export model (model name, schema)
// model name here should 1. capital letter 2. singular(mongod automatically transfer to plural)
