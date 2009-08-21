var mongo = require("../mongo.js");

function runDemo() {
  mongo.showDatabases();
}

function onLoad() {
  setTimeout(runDemo, 1000);
}
