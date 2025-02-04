const findTheOldest = function(myArray) {
	return myArray.map(item => (
	{ name: item.name, 
	  age: (item.yearOfDeath != undefined? 
	  item.yearOfDeath : new Date().getFullYear()) - item.yearOfBirth }))
	  .reduce((prev, curr) => (prev.age > curr.age) ? prev : curr )
};

// Do not edit below this line
module.exports = findTheOldest;
