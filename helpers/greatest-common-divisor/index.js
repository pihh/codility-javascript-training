// LCM is the smallest positive integer that is divisible by both a and b.[1]
//  GCD of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. For example, the gcd of 8 and 12 is 4.[1][2

// FOR 2
function gcd(a,b)
{
if (b == 0)
  {return a}
else
  {return gcd(b, a % b)}
}

// FOR 2
function lcm(a,b) {
  return (a*b)/gcd(a,b);
}



// FOR ARRAYS
function gcdA(array) {
  // Greatest common divisor of a list of integers
  var n = 0;
  for(var i=0; i<array.length; ++i)
    n = gcd(array[i], n);
  return n;
}
function lcmA(array) {
  // Least common multiple of a list of integers
  var n = 1;
  for(var i=0; i<array.length; ++i)
    n = lcm(array[i], n);
  return n;
}

// EXTRAS
 function xgcd(a,b)
 {
 if (b == 0)
   {return [1, 0, a]}
 else
   {
    temp = xgcd(b, a % b)
    x = temp[0]
    y = temp[1]
    d = temp[2]
    return [y, x-y*Math.floor(a/b), d]
   }
 }


function binaryGCD(a,b,res) {
  if (a == b) {
    return res * a;
  } else if (a % 2 == 0  && b % 2 == 0) {
    return binaryGCD(a / 2, b / 2, 2 * res);
  } else if (a % 2 == 0) {
    return binaryGCD(a / 2, b, res);
  } else if (b % 2 == 0){
    return binaryGCD(a, b / 2, res);
  } else if( a > b ){
    return binaryGCD(a - b, b, res);
  }else{
    return binaryGCD(a, b - a, res);
  }
}
