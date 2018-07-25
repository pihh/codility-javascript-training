/**
 * SECOND ATTEMPT
 * Correctness 100% - BRUTE FORCE
 * Performance 40%
 * Score: 66%
 */
 // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function checkSemiPrime(num)
{
    let cnt = 0;

    for (let i = 2; cnt < 2 && i * i <= num; ++i)
        while (num % i == 0)
            num /= i, ++cnt;

    if (num > 1)
        ++cnt;

    return cnt == 2;
}
function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res = [];

    for(let k = 0; k < P.length; k++){
        let semiPrimesCount = 0;
        let limit = Math.min(Q[k], N);
        for(let i = P[k]; i <= limit; i++){
            if(checkSemiPrime(i)) semiPrimesCount++;
        }
        res.push(semiPrimesCount);
    }

    return res;
}

/**
 * FIRST ATTEMPT
 * Correctness 100% - BRUTE FORCE
 * Performance 20%;
 * Task Score 55%
 */

 // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function getPrimes(max){
   max = Math.ceil(max/2) + 1;
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
function getSemiPrimes(max){
    let primes = getPrimes(max);
    let semiPrimes = [];

    for(let i = 0; i< primes.length ; i++){
        let res = 0;
        let k = i;
        while(res <= max){
            res = primes[i] * primes[k];
            if(res <= max) semiPrimes.push(res);
            k++;
        }
    }

    semiPrimes = semiPrimes.sort((a,b) => a -b);
    return semiPrimes;
}
function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let semiPrimes = getSemiPrimes(N);
    let res = [];
    for(let i = 0; i < P.length; i++){
        let count = semiPrimes.filter(el => {
            return el >= P[i] && el <= Q[i];
        });
        res.push(count.length);
    }

    return res;
}
