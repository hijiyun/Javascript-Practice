// emergency 배열안에 인덱스 번호에 순위가 매겨지는거임
// 그 순위는 숫자가 클수록 높은 (내립차순임) 등수가 매겨지는거임
// 1. 배열 복사본에 있는 수들을 내림차순으로 정렬
// 2. 배열 복사본 인덱스 번호 + 1 을 해주면 순위가 완성됨


function solution(emergency) {
    let sorted = [...emergency].sort((a,b) => b-a);
    return emergency.map(v=>sorted.indexOf(v)+1)
}


