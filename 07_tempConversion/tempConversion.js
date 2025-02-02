const convertToCelsius = function(fah) {
	if (!Number(fah)) return "ERROR";
	let cel = (fah - 32) * (5/9);
	if (cel === 0) { return 0; } else { return cel.toFixed(1); }
};

const convertToFahrenheit = function(cel) {
	if (!Number(cel)) return "ERROR";
	let fah = (cel*1.8) + 32;
	if (fah === 0) { return 0; } else { return fah.toFixed(1); }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
