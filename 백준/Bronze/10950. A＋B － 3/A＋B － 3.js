const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const lastNum = Number(input[0]);

for (let i = 1; i <= lastNum; i++) {
  let score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
