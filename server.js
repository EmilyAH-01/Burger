// Use Express
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Use the 'public' folder
app.use(express.static("public"));

// JSON setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Handlebars
var exphbs = require("express-handlebars");

// Set main.handlebars as base HTML file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
