function fractionalAddition(num, den, max){
    for (let i=1; i<=num; i++){
        num%i === 0 && den%i === 0 ? max = i : null
    }
    return [num / max, den / max]
}

function solution(numer1, denom1, numer2, denom2) {
    let num = numer1 * denom2 + numer2 * denom1
    let den = denom1 * denom2
    let maximum = 1
    
    return fractionalAddition(num,den,maximum) // 분수 덧셈 함수
}