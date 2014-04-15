// Require
fs = require('fs');

fs.watch("/Users/markle976/Sites/TQ/trunk/tests/", function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});