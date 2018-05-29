var express = require("express");
var burger = require("../models/burger");

var PORT = process.env.PORT || 3000;

var app = express();

//change public folder to whats holding assets
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//need to fix this route
var routes = require("./controllers/catsController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

module.exports = routes;