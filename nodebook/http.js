var http = require("http");

var requestCount = 0;

http.createServer(function(request, response) {
	console.log("Request received.");
	requestCount++;
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello HTTP World!!!");
	response.write("Number of requests: "+ requestCount);
	response.end();
}).listen(8888);

console.log("Server Started...");
console.log(process);