function solution(money) {
    let americano = 5500;
    let glass = Math.floor(money / americano)
    let change = money % americano
    
    let answer = [glass, change];
    
    return answer;
}