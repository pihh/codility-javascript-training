/**
 * Max sub array  in one array: Use Kadane
 */

 /**
    Array with all max sum from index to end ( starting at i )
  */
  var sumsL = A.map(i => 0);
  var sumsR = A.map(i => 0);

  for (var iL = 0, iR = A.length-1; iR >= 2; iL++, iR--) {
      sumsL[iL] = Math.max(0, sumsL[iL-1] + A[iL]);
      sumsR[iR] = Math.max(0, sumsR[iR+1] + A[iR]);
  }
