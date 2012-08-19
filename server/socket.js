var connect = require("connect"),
	io = require("socket.io").listen(1337);

connect(connect['static'](__dirname + "/www")).listen(8000);

io.sockets.on("connection", function(socket) {

  socket.on("setName", function(data) {
    var userName = data.firstName + " " + data.lastName;
    socket.emit("nameSet", {userName: userName});
    console.log(userName);
  });

  setTimeout(function() {
	socket.emit("drawTime", { "xc" : 200, "yc" : 231 });
  }, 5000);

});