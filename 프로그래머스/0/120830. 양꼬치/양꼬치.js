// 1인분     = n * 12000
// 음료수 1개 = k * 2000
// n * 12000 + k * 2000 - (n/10)*2000

function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}