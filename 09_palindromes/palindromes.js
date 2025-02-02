const palindromes = function (str) {
	let strFiltered = str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
	let strReversed = [...strFiltered].reverse().join('');
	let isPalindrome = strFiltered === strReversed ? true: false;
	return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
