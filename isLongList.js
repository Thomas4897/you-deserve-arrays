const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter an array:");
const array = JSON.parse(prompt("> "));
console.log("");

LongerThan10 = array.length >= 10;

console.log(LongerThan10);
