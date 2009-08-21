var conn = node.createProcess("/mongodb/bin/mongo");
var CRLF = "\n";
var callbacks = [];

conn.addListener("output", function (data) {
  puts(data);
});

this.db = function(db_name) {
  var cmd = "use " + db_name + CRLF;
  conn.write(cmd);
}

this.showDatabases = function() {
  var cmd = "show dbs" + CRLF;
  conn.write(cmd);
}

this.runCommand = function(command) {
  conn.write(command + CRLF);
}