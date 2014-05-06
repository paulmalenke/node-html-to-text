var path = require('path');

var htmlToText = require('../lib/html-to-text');

console.log('fromString:')
var text = htmlToText.fromString('<h1>Hello World</h1>', {
	wordwrap: 130
});
console.log(text);
console.log();

console.log('Test that excluding works:')
var doNotDisplay = htmlToText.fromString('<h1>(<a href="#!" data-html-to-text-no-display></a> <h1 data-html-to-text-no-display>Do not display me</h1>)</h1>', {
  wordwrap: 130
});
console.log(doNotDisplay);
console.log();

console.log('fromFile:');
htmlToText.fromFile(path.join(__dirname, 'test.html'), {
	tables: ['#invoice', '.address', '.replacements']
}, function(err, text) {
	if (err) return console.error(err);
	console.log(text);
});