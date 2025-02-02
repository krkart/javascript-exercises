const add = function(a, b) {
	if (isNaN(Number(a)) || isNaN(Number(b))) {
		return "ERROR"
	} else {
		return Number(a) + Number(b)
	}
};

const subtract = function(a, b) {
	if (isNaN(Number(a)) || isNaN(Number(b))) {
		return "ERROR"
	} else {
		return Number(a) - Number(b)
	}
};

// Skips other types of array item(s) and Returns only the sum of numbers from the given array
const sum = function(arr) {
	if (Array.isArray(arr)) {
		return arr.filter((num) => !isNaN(parseInt(num)))
							.reduce((acc, num) => { return acc + num }, 0);
	} else {
		return "ERROR"
	}
};

// Skips other types of array item(s) and Returns only the product of numbers from the given array
const multiply = function(arr) {
	if (arr instanceof Array) {
		if (arr === []) {
			return 0
		} else {														
			return arr.filter((num) => !isNaN(parseInt(num)))
								.reduce((acc, num) => { return acc * num }, 1);
		}
	} else {
		return "ERROR"
	}
};

// Returns both the power of +ve & -ve values
const power = function(a, b) {
	if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
		return "ERROR"
	} else {
		if (parseInt(b) === 0) {
			return 1
		} else {
			let pow = 1;
			for(let i=1; i<=Math.abs(parseInt(b)); i++) {
				pow *= a;
			}
			// if (isNegativeInteger(parseInt(b))) {
			if (parseInt(b) < 0) {
				return 1/pow
			} else {
				return pow
			} 
		}
	}
};

const factorial = function(a) {
	if (isNaN(parseInt(a))) {
		return "ERROR"
	} else {
		a = Math.abs(parseInt(a));
		if (a === 0) {
			return 1
		} else {
			return a * factorial(a-1)
		}	
	}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
