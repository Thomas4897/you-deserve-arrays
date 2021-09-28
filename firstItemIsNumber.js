const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

firstElement = array[0];

const type = isNaN(firstElement);

if (type === true) {
	console.log(false);
} else [console.log(true)];
