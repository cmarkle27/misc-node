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

browser = new Zombie();

browser.visit("http://localhost", function(e, browser) {

	//console.log(e);
	//browser.wait(2000);

	//assert.equal(browser.text("title"), "Mogin");

	//browser.then(function() {

		// Login page is loaded
		//return assert.equal(zombie.text("title"), "Mogin");
		
		zombie.pressButton("Login", function() {
			console.log(zombie.text(".alert-box"));
			assert.equal(zombie.text("title"), "Welcome To Brains Depot");
		});

	//}, groan);

}, groan);


// browser.visit("http://localhost", function(err, browser) {
//   if (err) {
//     console.log(err.message);
//   } else {
//     //console.log(browser.html());
//     browser.pressButton("Login", function(err, browser) {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log(browser.lastResponse);
//         browser.dump();
//       }
//     });
//   }
// });