// Works with node.js 0.4.7
var http = require("http");  

http.createServer(function(request, response) {  
        response.setHeader("200", {"Content-Type": "text/html"});  
        response.write("Hello Marek!");  
        response.end(); 
}).listen(8080);  

console.log("Server running at http://localhost:8080/");