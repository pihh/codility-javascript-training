
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let exists = 0;

    // remove negatives from the array. Can't have a line with negative size
    // Not sure about 0
    A = A.filter(el => el > -1);
    A.sort((a,b) => a - b);

    for(let i = 2; i < A.length ; i++) {

        if((A[i-2] + A[i-1]) > A[i] ) {
            exists = 1;
            break;
        }
    }

    return exists;

}