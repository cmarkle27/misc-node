var Browser = require("zombie");
var assert = require("assert");

describe("visit", function() {
  it("should load the login page", function() {
    this.browser = new Browser();
    this.browser
      .visit("http://localhost/")
      .then(function() {
		this.browser
		.fill("username", "armbiter@example.com")
		.pressButton("Logcin", function() {
			return true;
		});
		});
  });
  });

//   it("should load the login page", function() {
//     assert.equal(browser.text("title"), "Ldddogin");
//   });
// });
/*
describe("dfsfsf", function() {

	it("should load the login page", function() {

		var zombie = new Browser({debug:false});


		zombie.visit("http://localhost/", function(error, browser, status) {
		
			assert.equal(browser.text("title"), "Lsogin");

		browser
			.fill("username", "chris@cxalloy.com")
			.fill("password", "jmunch72")
			.pressButton("Login", function() {
				assert.equal(browser.text("title"), "Dashboard");
			});

		});

		//assert.equal(zombie.text("title"), "Lsogin");

	});
});*/


/*describe("login", function() {
	it("should load the login page", function() {

		this.browser = new Browser();

		//should.strictEqual("foo", "bar");
    
		this.browser.visit("http://localhost/", function(error, browser, status) {
			
			//assert.equal(browser.text("title"), "Login");
			//
			should.strictEqual(foo, bar);

			browser
				.fill("userndadame", "chris@cxalloy.com")
				.fill("password", "jmunch72")
				.pressButton("Login", function() {
					assert.equal(browser.text("title"), "Dashboard");
				});

		});


  });
});*/