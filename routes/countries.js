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
router.put("/:id", function (req, res, next) {
  CountryModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    function (updatedPost) {
      res.json(updatedPost);
    }
  );
});

//DELETE
router.delete("/:id", function (req, res, next) {
  CountryModel.findByIdAndDelete(req.params.id, req.body).then(function (post) {
    res.json(post);
  });
});
module.exports = router;
