// function fractionalAddition(num, den, max){
//     for (let i=1; i<=num; i++){
//         num%i === 0 && den%i === 0 ? max = i : null
//     }
//     return max
// }

// function solution(numer1, denom1, numer2, denom2) {
//     let num = numer1 * denom2 + numer2 * denom1
//     let den = denom1 * denom2
//     let maximum = 1
//     let sum = fractionalAddition(num,den,maximum) // 분수 덧셈 함수
//     return [num / sum, den / sum]
// }

function max(a, b) {
  return b === 0 ? a : max(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  let num = numer1 * denom2 + numer2 * denom1;
  let den = denom1 * denom2;
  let maxValue = max(num, den);
  num /= maxValue;
  den /= maxValue;
  return [num, den];
}