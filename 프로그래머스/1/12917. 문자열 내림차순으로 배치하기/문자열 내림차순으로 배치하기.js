function solution(s) {
    const sortedChars = s.split('').sort((a, b) => {
        if (a > b) return -1; 
        if (a < b) return 1;
        return 0;
    });
    
    return sortedChars.join('');
}