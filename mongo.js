var conn = node.createProcess("/mongodb/bin/mongo");
var CRLF = "\n";
var callbacks = [];

conn.addListener("output", function (data) {
  puts(data);
});

this.showDatabases = function() {
  var cmd = "show dbs" + CRLF;
  conn.write(cmd);
}