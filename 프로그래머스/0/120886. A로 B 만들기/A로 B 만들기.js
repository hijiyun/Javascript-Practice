function solution(before, after) {
    const reversee = (constant) => constant.split("").sort().join("")
    return reversee(before) === reversee(after) ? 1 : 0
}