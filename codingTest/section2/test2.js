function solution(arr){
  answer = 0;
  arr[0] ? answer += 1 : ''
  for (let i=1; i<arr.length; i++){
    if(arr[i]>arr[i-1]) answer += 1
    else if(arr[i] === arr[i-1]) answer -= 1
  }
  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));