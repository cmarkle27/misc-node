var connect = require("connect");

connect(connect.static(__dirname + "/www")).listen(8000);

console.log("Connect Http Server Started.");