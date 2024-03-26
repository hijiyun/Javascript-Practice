function solution(numbers) {
  const engStr = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  engStr.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index)}) 
  
  return Number(numbers)
}