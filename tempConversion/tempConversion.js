const ftoc = function(f) {
	const cl = (f - 32) * (5 / 9);
	//Math.round(number*10)/10 is a pretty good method to convert the number with one decimal places
	return Math.round(cl * 10) / 10;
};

const ctof = function(c) {
	const f = c * (9 / 5) + 32;
	return Math.round(f * 10) / 10;
};

module.exports = {
	ftoc,
	ctof
};
