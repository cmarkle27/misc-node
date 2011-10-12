var http = require('http');

var currentIP = "192.168.43.106";

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node\n');
}).listen(8080, currentIP);

console.log('Server running at ' + currentIP);