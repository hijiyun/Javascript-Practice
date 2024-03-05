// function solution(box, n) {
//     let box1 = Math.floor(box[0] / n)
//     let box2 = Math.floor(box[1] / n)
//     let box3 = Math.floor(box[2] / n)
//     var answer = box1 * box2 * box3;
//     return answer;
// }

function solution(box, n) {
    let result = box.map((single) => Math.floor(single / n))
    return result.reduce((acc, cur)=>acc*cur, 1)
}

