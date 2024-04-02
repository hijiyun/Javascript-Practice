function solution(i, j, k) {
  let count = 0;

  for (let num = i; num <= j; num++) {
    let digits = String(num).split('');

    for (let digit of digits) {
      if (digit === String(k)) {
        count++;
      }
    }
  }

  return count;
}
