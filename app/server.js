// boilerplate
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

/*
app.use= applying to everything (put, get...)
.use= passing middleware
*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



require ( "./routes/apiRoutes") (app);
require ("./routes/htmlRoutes")(app);


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'home.html'));
// });

// app.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname, 'survey.html'));
// });

// // api Tables List
// app.get('/api/friends-list', function (req, res) {
//     return res.json(friends-list);
// });





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
/* 

 */
