function gcd(a,b)
{
if (b == 0)
  {return a}
else
  {return gcd(b, a % b)}
}



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
