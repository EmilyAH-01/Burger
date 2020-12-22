var express = require("express");

var router = express.Router();

// Connect next file: burger.js
var burger = require("../models/burger.js");

// Routes

router.get("/", function(req, res) {
  burger.all(function(data) {
    var handlebarsObject = {burgers: data};
    res.render("index", handlebarsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var status = "id = " + req.params.id;

  burger.update({devoured: req.body.devoured }, status, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
