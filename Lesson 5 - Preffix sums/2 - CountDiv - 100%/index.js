/**
  Write a function:

  function solution(A, B, K);

  that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

  { i : A ≤ i ≤ B, i mod K = 0 }

  For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

  Assume that:

  A and B are integers within the range [0..2,000,000,000];
  K is an integer within the range [1..2,000,000,000];
  A ≤ B.
  Complexity:

  expected worst-case time complexity is O(1);
  expected worst-case space complexity is O(1).
*/

// Gets how many numbers from 0 to "to" are divisible by K
// Example: 3/2 -> returns 1.5 -> that rounds to 1
function allDivisible(to,K){
    return Math.floor(to/K);
}

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let fromA = allDivisible(A,K);
    let fromB = allDivisible(B,K);

    // Edge case in cases like ([0,1,2], or [6,7,8,9,10,11],2) fromA and fromB
    // will give you 1 element in common (first example: 0, second example 6)
    // in that case + 1 shold be added to the reduction
    let isFirstDivisible = (A % K === 0) ? 1 : 0;

    return fromB - fromA + isFirstDivisible;
}
