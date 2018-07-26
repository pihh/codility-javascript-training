/**
 * First Attempt - Brute forced
 * Correctness 100%
 * Performance 33%
 * Score 69;
 */

function findPrimeFactors (num) {

    var primeFactors = [];

  	function push(num){
     if(primeFactors.indexOf(num) === -1){
      	primeFactors.push(num);
     }
    }
    while (num % 2 === 0) {
        push(2);
        num = num / 2;
    }

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        push(num);
    }
    return JSON.stringify(primeFactors);
}

function solution(A,B){
    let count = 0;
 	for(let i = 0; i < A.length; i++) {
 	    count += (findPrimeFactors(A[i]) == findPrimeFactors(B[i])) ? 1 : 0;
 	}
 	return count;
}
