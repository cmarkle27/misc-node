var http = require('http');
var fs = require('fs');

fs.readFile(__dirname + '/alerts.json', 'ascii', function (err, json) {

	if (err) {
		throw err; 
	}   

	var alerts = JSON.parse(json);
	console.log(alerts[1].title);

});

console.log('Reading File...');