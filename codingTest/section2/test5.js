function solution(arr){ 
    let n = arr.length; 
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[i]<arr[j]) answer[i]++
        }
    }

    return answer;
}

let arr=[87, 92, 92, 100, 76];
console.log(solution(arr));