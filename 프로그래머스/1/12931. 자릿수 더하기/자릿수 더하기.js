function solution(n)
{
    return String(n).split('').reduce((arr, val) => arr+Number(val),0);
}