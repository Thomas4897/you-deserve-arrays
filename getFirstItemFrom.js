const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

console.log(array);
firstElement = array[0];

console.log("The first Item from is: " + firstElement);
