function solution(numbers, k) {
    let currentIndex = 1; 
    for (let i = 0; i < k - 1; i++) { 
        currentIndex += 2;
        if(currentIndex > numbers.length) currentIndex -= numbers.length
    }
    return currentIndex; 
}
