var fs = require('fs');
var server = require('http').createServer();
var url = require('url');

var homePage = fs.readFileSync(__dirname + '/public/index.html', 'utf8');

function showIndex(res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(homePage);
}

function show404(res) {
	res.writeHead(404);
	res.end('404 file not found');
}

server.on('request', function(req, res) {
	var pathname = url.parse(req.url).pathname;
	if (pathname === '/') {
		showIndex(res);
	} else {
		show404(res)
	}
});

server.listen(8888);
console.log('basic html server started');