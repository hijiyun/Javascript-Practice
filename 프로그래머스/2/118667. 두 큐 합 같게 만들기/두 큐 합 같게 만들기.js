function sum(q){
    return q.reduce((prev, cur) => prev + cur, 0);
}

const solution = (q1, q2) => {
  let sum1 = sum(q1)
  let sum2 = sum(q2)
  let half = (sum1 + sum2) / 2;
  let q = [...q1, ...q2];
  let q1Pointer = 0;
  let q2Pointer = q1.length;

  for (let cnt = 0; cnt < q1.length * 3; cnt++) {
    if (sum1 === half) return cnt;
    sum1 = sum1 > half ? sum1 - q[q1Pointer++ % q.length] : sum1 + q[q2Pointer++ % q.length];
  }

  return -1;
};