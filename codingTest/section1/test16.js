function solution(s){  
    let answer;
    // console.log(s.indexOf("good"))
    answer = s.filter((v, i)=>{
        if(s.indexOf(v) === i) return true
    })


    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));