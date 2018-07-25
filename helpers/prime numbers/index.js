/**
 * FIND ALL PRIME NUMBERS SMALLER THAN N - for numbers < than 10.000.000
 * the idea is if a number is a prime we can mark all multiples of it until n
 */
 const generatePrimes = (max) => {
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

/**
 * Prime factores is the decomposition of a composite number in prime NUMBERS
 */
function findPrimeFactors (num) {

    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}
/**
  CHECK IF IS A SEMI PRIME
*/
function checkSemiprime(num)
{
    let cnt = 0;

    for (let i = 2; cnt < 2 && i * i <= num; ++i)
        while (num % i == 0)
            num /= i, ++cnt; // Increment count
                             // of prime numbers

    // If number is greater than 1, add it to
    // the count variable as it indicates the
    // number remain is prime number
    if (num > 1)
        ++cnt;

    // Return '1' if count is equal to '2' else
    // return '0'
    return cnt == 2;
}


/**
 * FACTORIZATION
 */
 function factor(n) {
  if (isNaN(n) || !isFinite(n) || n%1!=0 || n==0) return ''+n;
  if (n<0) return '-'+factor(-n);
  var minFactor = leastFactor(n);
  if (n==minFactor) return ''+n;
  return minFactor+'*'+factor(n/minFactor);
 }

 // find the least factor in n by trial division
 function leastFactor(n) {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n==0) return 0;
  if (n%1 || n*n<2) return 1;
  if (n%2==0) return 2;
  if (n%3==0) return 3;
  if (n%5==0) return 5;
  var m = Math.sqrt(n);
  for (var i=7;i<=m;i+=30) {
   if (n%i==0)      return i;
   if (n%(i+4)==0)  return i+4;
   if (n%(i+6)==0)  return i+6;
   if (n%(i+10)==0) return i+10;
   if (n%(i+12)==0) return i+12;
   if (n%(i+16)==0) return i+16;
   if (n%(i+22)==0) return i+22;
   if (n%(i+24)==0) return i+24;
  }
  return n;
 }


/**
 * @desc: Checks for
 */
function divisors(n){
  let i = 1;
  let count = 0;
  let divisors = [];
  while(i*i <n){
    if (n % i == 0) {
      count +=2;
      divisors.push(i);
    }
    i++;
  }

  return {
    count: count,
    divisors: divisors
  }
}

/**
 * @desc: Checks for primality
 */
function primality(n){
  let i = 2;
  while(i*i <= n){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
