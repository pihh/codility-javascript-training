
function solution(A){
	let depressionStart;
	let localMin;
  let maxMin = 0;
  let hasEndedOnce = false;

  const reset = function(){
    depressionStart = false;
    localMin = 100000000;
  }

  // setup
  reset();

  // track
  for(let i = 1; i < A.length; i++){
   	const a = A[i - 1];
    const b = A[i];

    if(!depressionStart){
     	if(a > b) depressionStart = a;
      localMin = b;
    }

    if(depressionStart){
      if(b < localMin) localMin = b;
      if(b > a){
        hasEndedOnce = true;
       	let currentMin = Math.min(depressionStart, b) - localMin;
        if(currentMin > maxMin) maxMin = currentMin;
        if(b >= depressionStart) reset();
      }
    }
  }

  return (hasEndedOnce) ? maxMin : 0;
}
