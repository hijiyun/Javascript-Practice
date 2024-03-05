// function solution(n) {
//     let nString = n.toString().split("").map(Number)
//     let sum = 0;

//     for (let i = 0; i < nString.length; i++) {
//         sum += nString[i]
//     }

//     return sum
// }

function solution(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10; 
        n = Math.floor(n / 10); 
    }

    return sum;
}