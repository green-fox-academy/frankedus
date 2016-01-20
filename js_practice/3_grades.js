'use strict';

var grades = [4, 3, 5, 2, 5, 4, 1, 3, 5];

function countFives(grades) {
	var output = 0;
	for (var i = 0; i < grades.length; i++) {
		if (grades[i] === 5) {
			output += 1;
		}
	}
	return output;
}

console.log(countFives(grades))


function countFives2(grades) {
	var output = 0;
	grades.forEach(function(grade) {
		if (grade === 5) {
			output += 1;
		}
	});
	return output
}

console.log(countFives2(grades))