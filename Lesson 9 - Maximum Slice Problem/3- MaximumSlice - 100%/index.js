/**
 * @desc: 100% score
 * EDGE CASES:
      - 0 elements
      - minimum or maximum possible values
      - Array with 1 element
    Strategy: notice that it has to have at least 1 element. instead of 0, it should have a minimum limit of the next element
 */
function solution(A) {
  function kadane(arraySeq) {
    const minimumPossibleValue = - 2147483648;

    let maxEndingHere = A[0]; // EDGE
    let maxSoFar = maxEndingHere;
		let limit = 0;

    for(let i = 1; i < arraySeq.length; i++) {
      let el = A[i];
      maxEndingHere = Math.max(el,maxEndingHere + el);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    // EDGE
    if(Math.abs(maxSoFar) > Math.abs(minimumPossibleValue)) {
      if(maxSoFar > 0) {
        return minimumPossibleValue;
      }
      return Math.abs(minimumPossibleValue);
    }

    return maxSoFar;
  }

  if(A.length === 0) { return 0; }   // EDGE
	if(A.length === 1){ return A[0]; } // EDGE
  return kadane(A);
}


solution([3,2,-6,4,0] ); // 356
solution([0]);
solution([0,1,2]);
solution([-1,-2,-3,-4,-5,-6]); // -3
