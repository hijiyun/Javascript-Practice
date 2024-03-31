function solution(my_string) {
    // 숨어있는 숫자를 저장할 변수 초기화
    let hiddenSum = 0;
    
    // 숫자를 저장할 임시 문자열 초기화
    let numStr = '';
    
    // 문자열을 순회하면서 숨어있는 숫자를 찾음
    for (let char of my_string) {
        // 문자가 숫자인 경우 숫자 문자열에 추가
        if (!isNaN(char)) {
            numStr += char;
        } else {
            // 숫자 문자열이 비어있지 않으면 숨어있는 숫자로 판단하여 hiddenSum에 더하고 초기화
            if (numStr !== '') {
                hiddenSum += parseInt(numStr);
                numStr = '';
            }
        }
    }
    
    // 마지막으로 숫자가 있는지 확인 후 hiddenSum에 더함
    if (numStr !== '') {
        hiddenSum += parseInt(numStr);
    }
    
    return hiddenSum;
}