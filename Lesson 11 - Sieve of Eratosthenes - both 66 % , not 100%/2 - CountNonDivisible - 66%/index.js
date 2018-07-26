/**
100% not mine
*/
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    const divisors = A.map(e => 0);

    for (let i = 0; i<A.length; i++) {
        let e = A[i];
        for (let j = i+1; j<A.length; j++) {
            let f = A[j];
            if (f % e === 0) {
                divisors[j]++;
            }
            if (e % f === 0) {
                divisors[i]++;
            }
        }
    }

    const res = divisors.map(e => A.length - e - 1);
    return res;


}

/**
 * THIRD ATTEMPT
 *   Improved it by adding to the hasmap if the number has been tracked and skip computations
 * Correctness: 100%
 * Performance: 25%
 * Score: 66%;
 *
 * NO IMPROVEMENT
 */
 function generatePrimes(max){
    // Make array of length max and fill with true
    const sieve = new Array(max).fill(true)

    // Iterate from 2 until square root of max
    for (let i = 2; i < Math.sqrt(max); i++) {
      // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
      // from there as NOT a prime
      if (sieve[i]) {
        for (let j = Math.pow(i, 2); j < max; j += i) {
          sieve[j] = false
        }
      }
    }

    // Now we can reduce our sieve to only the Prime indexes that are true
    return sieve.reduce((primes, isPrime, i) => {
      if (isPrime && i > 1) {
        primes.push(i)
      }

      return primes
    }, [])
 }

 function mapOcurrences(A){
   let map = {}; // Not using maps because of pointer exceptions
   A.forEach(a => {
       if(!map[a]) map[a] = 0;
       map[a]++;
   });
   return map;
 }
 function isDivisible(N, X){
   return N % X == 0;
 }

 function solution(A){
   let primes = generatePrimes(Math.max(...A));
   let map = mapOcurrences(A);
   let result = Array(A.length).fill(0);
	 let tracked = {};

   for(let i = 0; i < A.length; i++){
     let a = A[i];
     if(tracked[a] || tracked[a] === 0){
       result[i] = tracked[a];
     }
     let count = A.length - map[a];
     if(count === 0){

     }else if(a === 1 ) {
       // ...
     }else if(primes.indexOf(a) > -1){
       count -= map[1] || 0;
     }else {
       let keys = Object.keys(map);
       for(let k = 0; k < keys.length; k++){
         let key = parseInt(keys[k]);
         let value = map[key];

         if(key >= Math.sqrt(a)) {
           break;
         }

         if(isDivisible(a,key)){
           count -= map[key];
         }
       }
     }
     result[i] = count;
     tracked[a] = count;
   }
   return result;
 }


/**
 * AT FIRST ATTEMPT I FAILED: I didn't loose enough time to understand it, and I didn't write it in the paper, and so on
 *   That's what I get for not thinking
 * Correctness: 100%
 * Performance: 25%
 * Score: 66%;
 * Second attempt:
 *  - generate primes up to Array's max
 *  - map the number occurences
 *  - for each number in the array, the result will be the length of A - the occorences of itself and - occorrences of 1
 *  - if is a composite number, we need to track if the number has divisors ( I used % )

 */
 function generatePrimes(max){
    // Make array of length max and fill with true
    const sieve = new Array(max).fill(true)

    // Iterate from 2 until square root of max
    for (let i = 2; i < Math.sqrt(max); i++) {
      // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
      // from there as NOT a prime
      if (sieve[i]) {
        for (let j = Math.pow(i, 2); j < max; j += i) {
          sieve[j] = false
        }
      }
    }

    // Now we can reduce our sieve to only the Prime indexes that are true
    return sieve.reduce((primes, isPrime, i) => {
      if (isPrime && i > 1) {
        primes.push(i)
      }

      return primes
    }, [])
 }

 function mapOcurrences(A){
   let map = {}; // Not using maps because of pointer exceptions
   A.forEach(a => {
       if(!map[a]) map[a] = 0;
       map[a]++;
   });
   return map;
 }
 function isDivisible(N, X){
   return N % X == 0;
 }

 function solution(A){
   let primes = generatePrimes(Math.max(...A));
   let map = mapOcurrences(A);
   let result = Array(A.length).fill(0);


   for(let i = 0; i < A.length; i++){
     let a = A[i];
     let count = A.length - map[a];
     if(count === 0){

     }else if(a === 1 ) {
       // ...
     }else if(primes.indexOf(a) > -1){
       count -= map[1] || 0;
     }else {
       let keys = Object.keys(map);
       for(let k = 0; k < keys.length; k++){
         let key = parseInt(keys[k]);
         let value = map[key];

         if(key >= a) {
           break;
         }

         if(isDivisible(a,key)){
           count -= map[key];
         }
       }
     }
     result[i] = count;
   }
   return result;
 }
