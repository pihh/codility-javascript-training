/**
  MAGICAL EXPLANATION: https://stackoverflow.com/questions/141525/what-are-bitwise-shift-bit-shift-operators-and-how-do-they-work
 * Bitwise JS
 * AND &
 * OR  |
 * XOR ^ - exclusive OR
 * NOT ~
 * SHIFT LEFT <<
 * SHIFT RIGHT >>
 * ZERO SHIFT RIGHT FILL >>>

 // Counting binary
  0 - 0
  1 - 1   - 2^0
  2 - 10  - 2^1
  4 - 100 - 2^2
  8 - 1000- 2^3
  ...

  // Shift Usage
  Extract the green part of hexadecimal :
  FF2200 - 24 bit values - 8 green , 8 red , 8 blue
  GREEN -> Shift 8 >> , and & 11111111
  111111110011001100000000 >> 8 = 1111111100110011
  1111111100110011
  0000000011111111
  0000000000110011 = 255

  var color = 0xFF3300
  var noBlue = color >> 8
  var green = noBlue & 255
 */

 function dec2Bin(n){
  	return (n > 0) ? n.toString(2): (n >>> 0).toString(2); // coerced to uint32
 }

 function bin2Dec(n){
   return parseInt(n, 2) >> 0;
 }

 function oddOrEven(n){ // return 1 for odd
   return n&1;
 }

 function solution(){
   let n = 6;
   return {
     'odd': oddOrEven(1),
     'even': oddOrEven(2),
     'dec2bin': dec2Bin(n),
     'bin2Dec': bin2Dec(dec2Bin(n)),
     'n.toString(2)': n.toString(2), // returns unsigned binary
     '&': 10 & 6,  // 1010 & 110 -> 0010 (where 1 and 1 stays 1, rest stays 0)
     '|': 10 | 6,  // 1010 | 110 -> 1110 (where there is 1 it goes 1)
     '^': 10 ^ 6,	// 1010 ^ 110 -> 1100 (when both are different, it goes 1. Same ^ Same = 0 , 0 ^ Same = Same)
     '~': ~n,      // ~6 -> -7 ; ~-6 -> 5(shifts sign and subtracts 1; (n * -1) - 1
     '>>': 42 >> 4, // 101010 >> 4 -> 10 (removes the first x )
     '<<': 7  << 1 // 111 << 1 -> 1110  (adds x 0's to the left) shift 1 to the left is the same that multiply by 2
   }
 }

 solution();
