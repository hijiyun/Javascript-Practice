function max(a,b,max) {
    for (let i = 1; i<= b; i++){
    if(a%i ===0 && b%i ===0) max = i;
    }
    return max
}

function solution(a, b) {
    let maximum = 1
    let m = max(a,b,maximum) // 최대공약수 구하기
    b = b/m
    while(b%2 === 0) b = b/2
    while(b%5 === 0) b = b/5
    return b === 1 ? 1 : 2;
}