const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= input.length - 1; i++) {
  const [A, B] = input[i].split(" ");
  let result = Number(A) + Number(B);

  console.log(`Case #${i}: ${A} + ${B} = ${result}`);
}
