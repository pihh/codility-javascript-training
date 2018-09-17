/**
 * FIRST ATTEMPT - order and track the mininums
 * CORRECTNESS 50
 * PERFORMANCE 60
 * SCORE 54
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // Get the prev minumum
    // Get the prev minumum
    if(A.length === 0) return 0;

    A = A.map(el => (el < 0)? el*-1 : el);
    A.sort((a,b) => b-a);

    let sum = A[0];

    for(let i = 1 ; i < A.length ; i++){
        sum -= A[i];
        if(sum <= 0) {
            i++;
          	if(A[i]) {
            	sum += A[i];
            }
        }
    }
    return Math.abs(sum);
}

/**
 * THIRD ATTEMPT - TIMEOUT
 * CORRECTNESS - 100%
 * PERFORMANCE - 20%
 * SCORE: 63%
 */

 // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A){

    if(A.length === 0) return 0;

    let currentValues = [A[0],A[0]*-1];

    for(let i = 1; i < A.length; i++){
        let tmpCurrentValues = [];
        currentValues.forEach(cV => {
            const a = Math.abs(cV + A[i]);
            const b = Math.abs(cV - A[i]);

            if(tmpCurrentValues.indexOf(a) == -1) tmpCurrentValues.push(a);
            if(tmpCurrentValues.indexOf(b) == -1) tmpCurrentValues.push(b);
        });

        currentValues = tmpCurrentValues;

    }

    //currentValues = currentValues.map(el => Math.abs(el));

    return Math.min(...currentValues);
  //return currentValues;
}
