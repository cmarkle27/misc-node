var Zombie = require("zombie");
var assert = require("assert");

var zombie = new Zombie({debug:false});

zombie.on("error", function(error) {
	console.log(error);
	process.exit(1);
});

process.on('uncaughtException', function (err) {
	console.log("############################# Unghhhhhhh... #############################");
	console.log("");
	console.dir(err);
	console.log("");
});

// --------------------------------------------------------------------

// Login
zombie.visit("http://localhost/", function(error, browser, status) {
	
	assert.equal(browser.text("title"), "Login");

	browser
		.fill("username", "chris@cxalloy.com")
		.fill("password", "jmunch72")
		.pressButton("Login", function() {
			assert.equal(browser.text("title"), "Dashboard");
		});

});
