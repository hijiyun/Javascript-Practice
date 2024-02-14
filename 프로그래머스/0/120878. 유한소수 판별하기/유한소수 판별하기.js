function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(a, b) {
    const num = a < b ? a : b;
    let arr = [];
    
    for (let i = 1; i <= num; i++) {
        if (a % i === 0 && b % i === 0) {
            arr.push(i);
        }
    }
    const GCD = Math.max(...arr);

    const denom = b / GCD;

    let factors = [];
    for (let i = 2; i <= denom; i++) {
        if (denom % i === 0) {
            factors.push(i);
        }
    }
        
    const primeFactors = factors.filter(isPrime);

    return primeFactors.every(i => i === 2 || i === 5) ? 1 : 2;
}