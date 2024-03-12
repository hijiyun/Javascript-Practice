function solution(pNumber) {
    const lastNumber = pNumber.slice(pNumber.length-4, pNumber.length)
    const answer = '*'.repeat(pNumber.length - 4).concat(lastNumber)
    return answer
}