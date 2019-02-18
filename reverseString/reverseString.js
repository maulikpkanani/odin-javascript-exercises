const reverseString = function(str) {
	let revStr = str.toLowerCase().split('');
	let reverse = revStr.reverse().join();
	return reverse;
};

module.exports = reverseString;
