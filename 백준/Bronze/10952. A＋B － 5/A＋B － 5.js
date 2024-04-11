const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i <= input.length - 1; i++) {
  let [A, B] = input[i].split(" ");
  const result = Number(A) + Number(B);
  if (result === 0) break;
  else {
    console.log(result);
  }
}
