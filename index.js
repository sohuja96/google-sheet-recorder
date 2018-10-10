var config = require('./config.json');
var cj = require('cron').CronJob;
var read = require("./gsheetRead.js").read;
var http = require("http");
const port = 8081
new cj(config.CRON_INTERVAL, function(err) { read(); }, null, true, 'America/Los_Angeles');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(port);
console.log('Server running at', port);
