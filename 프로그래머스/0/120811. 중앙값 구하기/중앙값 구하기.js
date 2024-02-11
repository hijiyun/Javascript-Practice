function solution(array) {
    array.sort((a,b)=>a-b)
    let mid = Math.floor(array.length/2)
    return array[mid]
}