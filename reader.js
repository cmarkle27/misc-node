var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
      var stream = fs.createReadStream(__dirname + '/data.txt');
          stream.on('error', function (err) {
                    res.statusCode = 500;
                            res.end(String(err));
                                });
              stream.pipe(res);
});
server.listen(8000);
