var http = require("http");  

var s = http.createServer(function(request, response) {  
	response.writeHead(200, { "Content-Type": "text/html" });  
	response.write("Hello Bitches!\n");
	
	setTimeout(function(){
		response.end("Suckit!\n");
	}, 5000);
});

s.listen(8080);  

console.log("Server running at http://localhost:8080/");