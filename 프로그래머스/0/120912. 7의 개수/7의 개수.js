function solution(array) {
    let count = 0;
    for (let num of array) {
        const digits = num.toString().split('');
        for (let digit of digits) {
            if (digit === '7') {
                count++;
            }
        }
    }
    return count;
}