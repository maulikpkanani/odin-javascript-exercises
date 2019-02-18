const removeFromArray = function() {
	let args = [...arguments];
	let array = args[0];
	console.log(args);
	console.log(array);
	return array.filter(val => !args.includes(val));
};

module.exports = removeFromArray;
