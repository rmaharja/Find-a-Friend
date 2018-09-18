var friendsData = require("../data/friendsData");

module.exports = function (app){

  // Setting up route for api
app.get("/api/friends", function(req,res){
  res.json(friendsData);
});

app.post ("/api/friends", function (req, res){
  res.json(req.body)
})




// End module exports
}