function solution(price, money, count) {
    let finalPrice = 0;
    
    for (let i = 1; i<=count; i++){
        finalPrice += price * i
    }
    return money > finalPrice ? 0 : finalPrice-money
}