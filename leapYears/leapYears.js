const leapYears = function(y) {
	//Tricky question it should be divisible by 4 and if it is divisible by 100 it should it is not a leap year but if it is divisible by 400 it is a leap year;
	return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
};

module.exports = leapYears;
