var conn = node.createProcess("/mongodb/bin/mongo");
var CRLF = "\n";
var callbacks = [];

conn.addListener("output", function (data) {
  var result = data;
  puts(result);
});

this.db = function(db_name) {
  var cmd = "use " + db_name + CRLF;
  conn.write(cmd);
}

this.showDatabases = function() {
  var cmd = "show dbs" + CRLF;
  conn.write(cmd);
}

this.run = function(command) {
  conn.write(command + CRLF);
}