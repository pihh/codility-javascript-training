/**
 * Correctness 100% , Performance 28%; Score 66;
 * Understanding the problem
    get the peaks
    check if can put all flags in one array start by the maximum number of arrays and decrement.
 */
function check(k,peaks, peek_count){
  if (k ===1) return k;

  let prev = peaks[0];
  let rest = k - 1;

  let i = 1;

  while(i< peek_count){
    let current = peaks[i];
    if(current - prev >= k){
      prev = current;
      rest--;

      // consumed all the flags;
      if(rest === 0){
        return 1;
      }
    }
    i++;
  }
  return 0;
}

function solution(A){
  // max number of peaks = Array.length /2
  let peeks = Array(Math.ceil(A.length/2));
  let peekCount = 0;

  for(let i = 1; i < A.length -1; i++) {
    if (A[i-1] < A[i] && A[i] > A[i+1]) {
      peeks[peekCount] = i;
      peekCount++;
    }
  }

  if(peekCount === 0) return 0;

  let maxFlags = 0;
  for(let i = peekCount; i > 0; i--){
    let ret = check(i,peeks,peekCount);
    if(ret != 0){
      maxFlags = i;
      break;
    }
  }

  return maxFlags;
}
