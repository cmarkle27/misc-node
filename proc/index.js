console.log(process.cwd());
process.chdir('/');
console.log(process.cwd());

console.log('');

var arg1 = process.argv[2];
console.log(arg1);

if (arg1 === '--show') {
	console.log(process.env);
}

console.log('');

if (arg1 === '--exit') {
	console.log('eroror');
	process.exit();
}

setTimeout(function(){
	console.log('timed out.');
}, 30000);

process.on('SIGKILL', function(){
	console.log('WHHYYYYYYYYYYY!!!!!');
	process.exit();
});