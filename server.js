var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var massive = require("massive");
var connectionString = "postgres://postgres:89df2g25@localhost:9002/massive_playground";

var port = 9001;

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString});

// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);
http.createServer(app).listen(8080);

var db = app.get('db');

//middleware==========================
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));  //end all of our static front-end files from our server.
//====================================

var newDoc = {
  title : "Mr",
  firstName: "Spencer",
  lastName: "Kekeaheuehehahe"
};

// db.people.save(newDoc, function(err,res){
//   //the table my_documents was created on the fly
//   //res is the new document with an ID created for you
//   console.log(err);
//   console.log(res);
// });
//
// db.bass.findDoc({price : 99.00}, function(err,docs){
//   //1 or more documents returned
//   console.log(docs);
// });

// // Drop table
// db.dropTable('bass', {cascade: true}, function(err, res) {
//   // empty array
//   console.log(err, res);
// });

app.listen(port, function() {
   console.log(`listening on port ${port}`);
});
