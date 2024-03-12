function solution(my_string) {
    const lowerCase = my_string.toLowerCase()
    return lowerCase.split('').sort().join('')
}