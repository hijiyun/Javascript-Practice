function solution(my_string, num1, num2) {
  let num1InStr = my_string[num1]
  let num2InStr = my_string[num2]
  let splitArr = my_string.split('')
  
  splitArr[num1] = num2InStr
  splitArr[num2] = num1InStr
   
  return splitArr.join('');
}