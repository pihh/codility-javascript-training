/**
 * @correct : 100%
 * @performance: 0%
 * @param A
 * @returns {*}
 */
function getLeader(A){
    let el = false;
    let map = {};
    let isOdd = A.length % 2 == 1;
    let addToHalf = (isOdd)? 0:1;
    let half = Math.ceil(A.length/2) + addToHalf;

    if(A.length === 1 ){
        return A[0];
    }

    for(var i = 0; i < A.length; i++) {
        if(map[A[i]] != null) {
            map[A[i]]++

            if(map[A[i]] >= half){
                el = A[i];
                break;
            }
        } else {
            map[A[i]] = 1;
        }
    }

    return el;
}

function slices(A,end){
    let left    = getLeader(A.slice(0,end));
    let right   =getLeader(A.slice(end));
    return [
        left,
        right
    ];
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrays = [];
    let count = 0;
    for(let i = 1; i < A.length; i++){
        let leaders = slices(A,i);
        if(leaders[0] !== false && leaders[0] === leaders[1]){
            count++;
        }
    }
    return count;
}