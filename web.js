var http = require('http');

function handleRequest(request, response) {
	var body = "Hellr!";
	var contentLength = body.length;
	response.writeHead(200, {
		'Content-Length' : contentLength,
		'Content-Type' : 'text/plain'
	});
	response.end(body);
}

var server = http.createServer(handleRequest);
server.listen(8080);