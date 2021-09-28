const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

const thirdElement = array[2];
const secondChar = thirdElement[1];

//! Does the same as the two above;
// const secondChar = array[2][1];

const type = isNaN(thirdElement);

if (type === false) {
	console.log("Error: Not A String");
} else console.log("The third Item from is: " + secondChar);
