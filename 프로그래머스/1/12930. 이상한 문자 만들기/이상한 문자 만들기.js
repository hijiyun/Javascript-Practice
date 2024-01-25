function solution(s) {
    return s.split(' ').map((word)=>{
        return [...word].map((char, i)=> (i % 2 ===0 ? char.toUpperCase():char.toLowerCase())).join('')
    }).join(' ')
}

