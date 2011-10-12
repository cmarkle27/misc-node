// Works with node.js 0.4.7
var sys = require("sys"),  
    http = require("http");  

http.createServer(function(request, response) {  
        response.setHeader("200", {"Content-Type": "text/html"});  
        response.write("Hello Marek!");  
        response.end(); 
}).listen(8080);  

sys.puts("Server running at http://localhost:8080/");