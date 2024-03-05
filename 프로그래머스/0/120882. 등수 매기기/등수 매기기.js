//1. 평균구하기
//2. 내림차순으로 정렬
//3. index값에 1을 더해줌

function solution(score) {
    let avg = score.map((arr) => (arr[0] + arr[1]) / 2)
    let sorted = avg.slice().sort((a,b) => b-a)
    return avg.map((val)=>sorted.indexOf(val)+1)
}