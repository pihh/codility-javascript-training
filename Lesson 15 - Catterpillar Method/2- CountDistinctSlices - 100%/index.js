/**
 * ROUND 2
 *
 *
 *
 * IDEA
  []
  all combinations:
  [0,0][0,1][0,2][0,3][0,4]
  [1,1][1,2][1,3][1,4]
  [2,2][2,3][2,4]
  [3,3][3,4]
  [4,4]

  total = 15
  There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).

  KIND OF WHAT I WAS TRYING BUT WORKING LOOOL
  
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
// function solution(M,A) {
//   let count = 0;
//   let max = 1000000;
//
//   for(let i = 0; i < A.length; i++){
//     let map = new Map();
//     let key = A[i];
//     count += A.length - i;
//     if(!map.has(key)){
//       map.set(key);
//     }else{
//       map.delete(key);
//       let untilEnd = A.length - i ;
//       let upToNow = i - 1;
//       count -= untilEnd * upToNow;
//     }
//
//     if(count >= max){
//       return count;
//     }
//   }
//
//   return count;
// }



  // Strategy
  // 0 - has (0,0 to 0,N oportunities ) - in this case 5 (0,0;0,1;0,2;0,3;0,4)
  // 1 - has N - 1 (4) oportunities
  // 2 - has N - 2 (3) oportunities
  // 3 - hit plateau so 0 looses N - 3 (2) oportunities , 0 looses (2) , 1 looses 2, 2 looses 3 - track this in map



/**
 * CORRECTNESS 100%
 * PERFORMANCE 40%
 * SCORE 70%
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
