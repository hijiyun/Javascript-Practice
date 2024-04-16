function solution(arr) {
    const arrLength = arr.length
    return arr.reduce((acc, val)=>acc+val, 0) / arrLength;
}