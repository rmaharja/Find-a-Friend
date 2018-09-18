// boilerplate
console.log ("Starting Server...")
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

/*
app.use= applying to everything (put, get...)
.use= passing middleware
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Sets the html and api routes.
require ("./app/routing/apiRoutes") (app);

require ("./app/routing/htmlRoutes")(app);




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
/* 

 */
