var watch = require('watch');

watch.createMonitor('/Users/markle976/Sites/TQ/trunk/.svn', function (monitor) {
   // monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    monitor.on("created", function (f, stat) {
      // Handle file changes
      console.log('c');
    })
    monitor.on("changed", function (f, curr, prev) {
      // Handle new files
      console.log('ch');
    })
    monitor.on("removed", function (f, stat) {
      // Handle removed files
      console.log('rm');
    })
});