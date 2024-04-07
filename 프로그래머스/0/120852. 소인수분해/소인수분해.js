function solution(n) {
    let answer = [];
    // 약수 2부터 시작
    let startNumber = 2;
    
    while (n != 1) {
        if (n % startNumber == 0) {
            answer.push(startNumber)
            while (n % startNumber == 0) {
                n = n / startNumber; 
            }
        }
        startNumber ++;
    }
    return answer;
}