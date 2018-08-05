/**
 * SECOND TRY - Sorted array has all sizes in order
 *
 */
 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');


 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');


  function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
     let count = 0;
  		A = A.sort((a,b) => a-b);

    function isTriangle(P,Q,R){
      return P + Q > R && Q + R > P && R + P > Q;
    }
    for(let P = 0; P < A.length -2; P++){
      let Q = P+1;
      let R = P+2;
      while(R < A.length && Q < R ){
        if(isTriangle(A[P],A[Q],A[R])){
         //  console.log('ISTRIANGLE');
          count+= R-Q; // I wasn't counting this step - all between Q and R are triangles
          R++;
        }else if(Q < R -1){
          Q++;
        }else{
         Q++;
         R++;

        }
      }
    }
    return count;
  }

 solution([10,2,5,1,8,12]);
/**
 * First try
 * CORRECTNESS 100%
 * PERFORMANCE 0
 * SCORE 63%
 * N^3 INSTEAD OF N^2
 */
const Combinations = function() {};

Combinations.getCombinations = function(array, size, start, initialStuff, output) {
  if (initialStuff.length >= size) {
		output.push(initialStuff);
	} else {
		for (let i = start; i < array.length; ++i) {
			Combinations.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
		}
	}
	return output;
}

Combinations.getAllPossibleCombinations = function(array, size) {
	let output = [];
  return Combinations.getCombinations(array, size, 0, [], output);
}

function testForTriangle(p,q,r){
    return p + q > r && q + r > p && r + p > q;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let allPossibleCombinations = Combinations.getAllPossibleCombinations(A,3);
    let count = 0;

    allPossibleCombinations.forEach(combination => {
        if(testForTriangle(combination[0],combination[1],combination[2])){
            count++;
        }
    });

    return count;
}
