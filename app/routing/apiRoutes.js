var tableData = require("../data/friends.js");

app.get("/api/friends", function(req,res){
  res.json(friendsData);
})