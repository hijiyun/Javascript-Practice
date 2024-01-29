function solution(today, terms, privacies) {
    // 결과를 저장할 배열
    const result = [];

    // 개인정보 수집 약관마다 반복
    for (let idx = 0; idx < privacies.length; idx++) {
        const privacy = privacies[idx];
        // 개인정보 수집 일자와 약관 종류를 분리
        const [privacyDate, privacyType] = privacy.split(' ');

        // 약관 종류에 따른 유효기간
        const termInfo = terms.find((term) => term.includes(privacyType));
        const addMonth = Number(termInfo.split(' ')[1]);

        // 개인정보 수집 일자를 Date 객체로 변환
        const privacyMonth = new Date(privacyDate);
        // 약관 종류에 따른 유효기간을 더해서 계산
        privacyMonth.setMonth(privacyMonth.getMonth() + addMonth);

        // 오늘 날짜와 유효기간 비교 후 결과에 추가
        if (privacyMonth <= new Date(today)) {
            result.push(idx + 1);
        }
    }

    return result;
}