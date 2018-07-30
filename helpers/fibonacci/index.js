// FIRST
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// IS FIBONACCI ??
//Equation modified from http://www.geeksforgeeks.org/check-number-fibonacci-number/
function isFibonacci(numberToCheck)
{
  function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
	};

  // numberToCheck is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
  // is a perferct square
  return isPerfectSquare(5*numberToCheck*numberToCheck + 4) ||
           isPerfectSquare(5*numberToCheck*numberToCheck - 4);
}

// MATH FIB - UNRELIABLE WHEN IT COMES TO PROGRAMMING EXERCISES
function fib(n){
  let sqrt = Math.sqrt(5);
  let left =  Math.pow((1 + sqrt) / 2, n);
  let right =  Math.pow((1 - sqrt) / 2, n);
  return Math.round((left - right) / sqrt);
};


// ES6 FIB - JUST FOR SHOW
function fib(n, prev = 0, current = 1) {
  return !n ? prev + current : fib(--n, current, prev+current)
}


// RETURNS THE NTH F
function fib(n){
  if(n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// FIBONNACI MESMOIZED
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo;
}

fibonacci();


// FIB GENERATOR JUST FOR SHOW
function* fibGenerator() {
  let current = 1;
  let a = 1;
  let b = 1;

  yield 1;

  while (true) {
    current = b;

    yield current;

    b = a + b;
    a = current;
  }
}

let sequence = fibGenerator();
sequence.next().value; // 1
sequence.next().value; // 1
sequence.next().value; // 2
sequence.next().value; // 3

// RETURNS THE FIB ARRAY
function fibArray(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr
}

// FIB ARRAY UP TO NUMBER - WORKS FINE
function fibArray(num){
    var current = 2;

    var arr = [0,1,1];

    while(current<=num){
        current++;
        var next = arr[current-1]+arr[current-2];
        arr.push(next);
    }

    return arr;

}
