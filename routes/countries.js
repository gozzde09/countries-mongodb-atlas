var express = require("express");
var router = express.Router();

// var mongoose = require("mongoose");
var CountryModel = require("../models/CountryModel.js");

//GET
router.get("/", function (req, res, next) {
  CountryModel.find().then(function (countries) {
    res.json(countries);
  });
});

// POST
router.post("/", function (req, res, next) {
  CountryModel.create(req.body).then(function (post) {
    res.json(post);
  });
});

// UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await CountryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error("PUT error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//DELETE
router.delete("/:id", function (req, res, next) {
  CountryModel.findByIdAndDelete(req.params.id, req.body).then(function (post) {
    res.json(post);
  });
});
module.exports = router;
