/**
 * ROUND 2
 * CORRECTNESS 100%
 * PERFORMANCE 100%
 * SCORE 100%

 * Strategy: Notice that from slices start to plateau we are adding start - i combinations. From there on is a matter of refining it.
 */
 function solution(M, A) {
     // write your code in JavaScript (Node.js 4.0.0)

     const LIMIT = 1000000000;

     var lastPos = [];
     var i = 0;
     var count = 0;
     var start = 0;

     if(A.length === 1) {
         return 1;
     }

     for(i=0; i<=M; i++) {
         lastPos[i] = -1;
     }

     for(i=0; i<A.length; i++) {
         var item = A[i];

         if(lastPos[item] + 1 > start) {
             start = lastPos[item] + 1;
         }

         lastPos[item] = i;
         count += i - start + 1;

         if(count > LIMIT) break;
     }

     return count > LIMIT ? LIMIT : count;
 }


/**
 * CORRECTNESS 100%
 * PERFORMANCE 40%
 * SCORE 70%
 * BRUTE FORCED IT
 */

function solution(M,A){
  /*
  For example, consider integer M = 6 and array A such that:

      A[0] = 3
      A[1] = 4
      A[2] = 5
      A[3] = 5
      A[4] = 2
  There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).

    step 1: 0,0
    step 2: 0,1
    step 3: 0,2
    step 4: hits a break reset at last index

    Will brute force for now
  */
  let count = 0;
  let stop = 1000000000;
  for(let i = 0; i < A.length; i++){
    if(count >= stop) return stop;
    let map = new Map();
    for(let k = i; k < A.length; k++){
      let key = A[k];
      if(!map.has(key)){
        map.set(key,true);
        count++;
      }else{
        break;
      }
    }
  }
  return count;
}
