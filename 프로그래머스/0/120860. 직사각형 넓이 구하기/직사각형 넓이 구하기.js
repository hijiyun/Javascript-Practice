function solution(dots) {
    dots.sort()
    let height = Math.abs(dots[0][1] - dots[1][1])
    let width = Math.abs(dots[0][0] - dots[2][0])
    return width * height
}