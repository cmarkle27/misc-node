var server = require('http').createServer();

server.on('request', function(req, res) {
	var body = '<h1>hello jifasnif!!!</h1>';
	res.writeHead(200, {
		'Content-Length': body.length,
		'Content-Type': 'text/html'
	});
	res.write(body);
	res.end();

});

server.listen(8888);
console.log('basic html server started');