function solution(arr){
    let answer=arr;
    let sum = arr.reduce((a, b) => a+b, 0)
    let flag = 0;
    for (let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if((sum-(arr[i]+arr[j]))===100){
                arr.splice(j, 1); //j번째 있는 거 1개 제거해라.
                arr.splice(i, 1); //i번째 있는 거 1개 제거해라.
                flag = 1;
                break;
            }
        }
        if(flag == 1) break;
    }
    return answer;
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));