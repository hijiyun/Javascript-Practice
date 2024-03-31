function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (getDivisorsCount(i) > 2) answer++;
    }
    return answer;
}

function getDivisorsCount(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            count += (i * i === num) ? 1 : 2;
        }
    }
    return count;
}