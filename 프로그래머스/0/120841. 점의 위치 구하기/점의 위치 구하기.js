// dot[0]은 x좌표를, dot[1]은 y좌표

// function solution(dot) {
//     if(dot[0] < 0 && dot[1] < 0)
//         return 3
//     if(dot[0] < 0 && dot[1] > 0)
//         return 2
//     if(dot[0] > 0 && dot[1] < 0)
//         return 4
//     if(dot[0] > 0 && dot[1] > 0)
//         return 1
// }

function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;   
}