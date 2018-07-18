/**
 * SECOND SOLUTION
 * Correctness 100%;
 * Performance 100%
 * NOTE:
    - Ok, so the minimum is 0 allways (0,1,2) throws 0
    - when building the 0 to i array:
        - notice that first 0 doesn't count, and first doesn't count (0,1) -> [0,0...]
        - the localMinimum must be 0 (?)
    - when building the i to end array:
        - notice that the last and last-1 don't count (0, 9,10) -> [...0,0]
        - the localMinimum must be 0 (?)
 */
 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');

 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)

   	let maxSum0toI 	= A.map(el => 0);
   	let maxSumItoEnd = A.map(el => 0);
   	let max = 0;

   	// Build sums from 0 to i
   	for(let i = 1; i < A.length -2 ; i++){
   		maxSum0toI[i] = Math.max(0,maxSum0toI[i-1] + A[i]);
     }

   	// Build sums from end to 0
   	for(let i = A.length -2; i > 1; i--){
       maxSumItoEnd[i] = Math.max(0, maxSumItoEnd[i+1] + A[i]);
     }

   	// Validate;
     for(let i = 1; i < A.length -1 ; i++){
   		max = Math.max(max,maxSum0toI[i-1] + maxSumItoEnd[i+1]);
     }

   	return max;
 }
/**
 FIRST SOLUTION :
 100% Correctness,
 28% Performance;
*/
function modifiedKadane(array) {
    var maxEndingHere = 0,
        maxSoFar = 0,
        arrayMEHTracker = [],
        arrayLargestSubarray = [],
        arrayLargestSubarrayIndexes = [0,0],
        localMin = Number.MAX_SAFE_INTEGER;

    array.forEach(function(el,i) {
        maxEndingHere = Math.max(0,maxEndingHere + el);
        if (maxEndingHere > 0) {
            arrayMEHTracker.push(el);
        } else {
            arrayMEHTracker.length = 0;
            arrayLargestSubarrayIndexes[0] = i;
            localMin = el;
        }

        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (maxSoFar === maxEndingHere) {
            arrayLargestSubarray = arrayMEHTracker.slice(0);
            arrayLargestSubarrayIndexes[1] = i;
        }
        if(localMin > el) {
          localMin = el;
        }
    });

    return {
        localMin: localMin,
        indexes: arrayLargestSubarrayIndexes,
        array: arrayLargestSubarray,
        sum: maxSoFar
    };
}

function _solution(A){
  if (A.length < 4) return {
    max:0,
    iMin: 0,
    iMax:0
  }; // edge
  // remove first and last entries since they will never be counted
  A.shift();
  A.pop();

  let backup = A.slice(0);

  let kadaneGlobal = modifiedKadane(A);
  let globalMin = kadaneGlobal.localMin;
  let indexOfMin = A.indexOf(globalMin);
  backup.splice(indexOfMin,1);

  let kadaneGlobalUpdated = modifiedKadane(backup);

  return {
    max: kadaneGlobalUpdated.sum,
    iMin: kadaneGlobal.indexes[0],
    iMax: kadaneGlobal.indexes[1]
  }
}

function solution(A){
  let globalMax = _solution(A);
  let leftMax = _solution(A.slice(0, globalMax.iMax)).max;
  let rightMax = _solution(A.slice(globalMax.iMin, A.len)).max ;


  return Math.max(...[globalMax.max, leftMax, rightMax,0]);
}
