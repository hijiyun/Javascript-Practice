function solution(my_string) {
    const moums = ['a','e','i','o','u']
    let result = '';
        for (let moum of my_string) {
        if (!moums.includes(moum)) {
            result += moum;
        }
    }
    return result;
}

