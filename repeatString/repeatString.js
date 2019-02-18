const repeatString = function(str, n) {
	let repeat = '';
	if (n >= 0) {
		for (let i = 0; i < n; i++) {
			repeat += str;
		}
	} else {
		repeat = 'ERROR';
	}
	return repeat;
};

module.exports = repeatString;
