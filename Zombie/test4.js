var Zombie = require("zombie");
var assert = require("assert");
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

describe("visit", function() {
  before(function(done) {
    this.browser = new Browser();
    this.browser
      .visit("/promises")
      .then(done, done);
  });

  it("should load the promises page", function() {
    assert.equal(this.browser.location.pathname, "/promises");
  });
});
