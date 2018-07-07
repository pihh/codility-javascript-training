"use strict";

/**
  A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

  You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

  The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

  For example, you are given integer X = 5 and array A such that:

    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

  Write a function:

  function solution(X, A);

  that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

  If the frog is never able to jump to the other side of the river, the function should return −1.

  For example, given X = 5 and array A such that:

    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  the function should return 6, as explained above.

  Assume that:

  N and X are integers within the range [1..100,000];
  each element of array A is an integer within the range [1..X].
  Complexity:

  expected worst-case time complexity is O(N);
  expected worst-case space complexity is O(X) (not counting the storage required for input arguments).

 */
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let time = -1; // default value
  let total = X * (X+1) /2; // total of the sum from 1 to X = this formula :)
  let found = [];

  // Using an empty array and filling only some indexes makes it lighter
  // Using the sum of 1 to X to keep track of indexes.

  for (let i = 0; i < A.length; i++ ) {
    let val = A[i];

    // Unsure if this second condition is needed.
    // eitherway I'll prioritize performance
    // for this particular task ...

    // UPDATE: Removed second condition as the exercise says that elements of A range from 1 to X
    if(found[val]) continue;

    found[val] = true;
  	total -= val;

  	// Break execution to avoid unnecessary calculations
  	if (0 === total) {
 	    time = i;
      break;
    }
  }

  return time;

  	/**
    @desc; 90% success on this one.
    NOTE: Might have failed because array is too dense. and the indexOf unecessary calculation

    let time = 0;
    let steps = Array.from({length: X}, (v, k) => k+1);

    for (let i = 0; i < A.length ; i++) {
        let index = steps.indexOf(A[i]);
            console.log(index, A[i]);
        if(-1 === index){ continue; };
      	steps.splice(index,1);

      	if(steps.length === 0) {
        	time = i;
          break;
        }
    }

    return (steps.length === 0)? time : -1;

   */
}
solution(5,[2,1,1,3,4,5]);
solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
solution(2, [1,111,1,1,2]);
solution(0, [])


//solution(5,[2,1,1,3,
