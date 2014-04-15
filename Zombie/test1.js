var Zombie = require("zombie");
var assert = require("assert");

function groan(error) {
	console.log("");
	console.log("#########################################################");
	console.log("Unhhhhhhhhhhhh...");
	console.log("#########################################################");
	console.error(error);
	console.log("");
}

zombie = new Zombie();
zombie.on("error", groan);
//zombie.debug = true;

// --------------------------------------------------------------------


// still not quite right!!!!!!!!

zombie.visit("http://localhosxt", function(e, zombie) {

	// if (zombie.error) {
	// 	console.dir("Errors reported:", zombie.errors);
	// }
	//console.log(e);

	//assert.equal(zombie.text("title"), "Login");



	//zombie.pressButton("Login");

});


	//.then(function() {
		

	// assert.equal(zombie.text("title"), "Ldogin");


	// }, groan);

// zombie
// 	.visit("http://localhost")
// 	.then(function() {
// 		// Login page loaded
// 		return assert.equal(zombie.text("title"), "Login");
// 	}, groan)


// 	.then(function() {
// 		// Bad login
// 		zombie.fill("username", "chris@cxalloy.com");
// 		zombie.fill("password", "sffsfs");

// 		return zombie.pressButton("Login");

// 	}, groan)
// 	.then(function() {
// 		console.log(zombie.text(".alert-box"));
// 		return assert.equal(zombie.text(".alert-box"), "Mogin Failed");
// 	}, groan);

	// .then(function() {
	// 	// Bad Form
	// 	//zombie.fill("username", "");
	// 	//zombie.fill("password", "");

	// 	return zombie.pressButton("Login", function() {
	// 		console.log(zombie.text(".alert-box"));
	// 	});
	// }, groan)
// zombie
// 	.visit("http://localhost")
// 	.then(function() {
// 		//assert.equal(zombie.text("title"), "Deferred zombies");

// 		zombie.fill("username", "chris@cxalloy.com");
// 		zombie.fill("password", "sffsfs");

// 		return zombie.pressButton("Login");
// 	})
// 	.then(function() {
// 		//console.log(zombie.text("title"));
// 		console.log(zombie.text(".alert-box"));
// 		//assert.equal(true, false, "Ouch"); // this no working???
// 	});

//assert.equal(zombie.text("H1"), "Deferred zombies", "gd"); // this no working???