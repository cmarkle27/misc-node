var connect = require("connect");

connect(connect['static'](__dirname + "/www")).listen(8000);