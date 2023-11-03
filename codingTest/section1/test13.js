function solution(s){  
    let answer="", max=Number.MIN_SAFE_INTEGER;
    for (let x of s){
        if(x.length > max){
            max = x.length;
            answer = x;
        }
    }

    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));


// 1. max 변수 만들기 
// 2. s.length<max 로 for문으로 비교하면서 mxa에 누적
// 3. 최종 max가 return 되도록 !