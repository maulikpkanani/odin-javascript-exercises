//parameters are fixed as min and max
const sumAll = function(min, max) {
	//check if both the parameters are negative numbers
	if (min < 0 || max < 0) {
		return 'ERROR';
	}
	//check if both parameters are not a number
	if (typeof min != 'number' || typeof max != 'number') {
		return 'ERROR';
	}
	//To change the values use temp
	const temp = min;
	if (min > max) {
		min = max;
		max = temp;
	}

	//Set the counter
	let count = 0;
	//Loop through the range form min to  max
	for (i = min; i <= max; i++) {
		count += i;
	}
	//Finally don't forget to return the count
	return count;
};

module.exports = sumAll;
