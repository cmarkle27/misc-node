var http = require('http');
var fs = require('fs');

fs.readFile('./basic.htm', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8888);
});
 
console.log('Server running...');