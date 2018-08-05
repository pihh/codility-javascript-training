/*
// caterpillar of total elements greater than S

*/
function caterpillar(A,s){
  let n = A.length;
  let front = 0;
  let total = 0;

  for(let back = 0; back < n ; back++){
    while(front < n && total + A[front] <=s) {
      total += A[front];
      front++;

      if(total ===s) return true;

      total -= A[back];
    }
  }
  return false;
}
