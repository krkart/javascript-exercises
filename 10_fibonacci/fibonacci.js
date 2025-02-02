const fibonacci = function(int) {
	int = parseInt(int);
	if (int < 0) {
		return "OOPS"
	} else {
		let [a, b, c] = [0, 1, 0];
		for (let i=1; i<int; i++) {
			c = a + b;
			a = b;
			b = c;
		}
		return int === 1 ? 1: c
	}
};
	
// Do not edit below this line
module.exports = fibonacci;
