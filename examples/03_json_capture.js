var mongo = require("../mongo.js");

function runDemo() {
  mongo.db('node-test-03');
  mongo.run("\
  for( var i = 1; i < 1000; i++ ) \
    db.things.save( { x:4, j:i } ) \
  ");
  mongo.run("db.things.count()");
  mongo.run("\
  var cursor = db.things.find(); \
  while (cursor.hasNext()) { \
    print(tojson(cursor.next())); \
  } \
  ");
}

function onLoad() {
  setTimeout(runDemo, 1000);
}