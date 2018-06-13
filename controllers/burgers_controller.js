var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burgers: data});
  });
});
//create new burger
router.post("/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new burger
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result){
    console.log(result);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
