const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

const thirdElement = array[3];
const lastElement = array[array.length - 1];

if (array.length < 4) {
	console.log("The last Element is: " + lastElement);
} else console.log("The third Element is: " + thirdElement);
