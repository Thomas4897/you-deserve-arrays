const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

lastElement = array[array.length - 1];

console.log("The last Item from is: " + lastElement);
