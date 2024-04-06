function solution(my_string) {
    let regex = /\d/g; 
    let result = my_string.match(regex);
    result = result.map(Number); 
    result.sort((a, b) => a - b); 
    return result;
}