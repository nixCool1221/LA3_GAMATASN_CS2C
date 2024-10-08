// Prompt the user to input the limit of the double loop
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

for (let i = 0; i <= maxLimit; i++) {
  for (let j = 0; j <= maxLimit; j++) {
    console.log(`[${i}] [${j}] Added value is ${i + j}`);
  }
}