function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, cost) => {
        if (budget >= cost) {
            budget -= cost;
            count++;
        }
        return count;
    }, 0);
}