/*
Tucker Kent
kent_a03c.js
19WI_INFO_2124_WW
Thoendel
Created 18 December 2019
*/

let preambleString = "When in the course of human events"; // variable is declared and initialized with a string value

let preambleLiteral = `
The preamble is:
\t${preambleString}

Does the preamble contain 'a'?
\t${preambleString.includes("a")}
`; // placed the template literal in variable preambleLiteral for ease of logging it

console.log(preambleLiteral); // output text of preambleLiteral to terminal
