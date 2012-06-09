var cronJob = require('cron').CronJob;
var exec = require("child_process").exec;

var job = new cronJob({
  cronTime: '0 * * * * *',
  onTick: function() {
    // Runs every weekday (Monday through Friday)
    // at 11:30:00 AM. It does not run on Saturday
    // or Sunday.
    var sound = "Alert.mp3";

    exec("afplay " + sound,
	{ timeout: 10000, maxBuffer: 20000*1024 },
	function (error, stdout, stderr) {
		console.log(stdout);
	});
  },
  start: false,
  timeZone: "America/New_York"
});

job.start();