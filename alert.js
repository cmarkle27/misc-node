var exec = require("child_process").exec;

  exec("afplay Alert.mp3",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
    	console.log(stdout);
    });