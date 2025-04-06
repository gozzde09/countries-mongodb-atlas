var mongoose = require("mongoose");

var CountrySchema = new mongoose.Schema(
  {
    country_name: String,
    country_description: String,
    country_capital: String,
    country_language: String,
    country_flag: String,
  },
  {
    collection: "countries",
  }
);

module.exports = mongoose.model("CountryModel", CountrySchema);
