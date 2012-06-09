var http = require('http');
var fs = require('fs');

fs.readFile(__dirname + '/basic.htm', 'ascii', function (err, html) {

	if (err) {
		throw err; 
	}   

	console.log(html);
});

console.log('Reading File...');