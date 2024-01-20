// 0 < angle < 90 == 예각
// 90 == 직각
// 90 < angle < 180 == 둔각
// 180 == 평각

function solution(angle) {
    if( 0<angle && angle<90){
        return 1
    }else if(90 == angle){
        return 2
    }else if(90<angle && angle<180){
        return 3
    }else if( 180 == angle){
        return 4
    };
}