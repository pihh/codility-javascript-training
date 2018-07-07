/**
  Discover the unpaired element in array
  Used a bitwise operator to solve this.
  https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821

  HACK:
  a ^ b;
  a = 5 = 0101
  b = 3 = 0011;
  a ^ b = 0110 = 6;

  a ^ 0 = a;
  a ^ a = 0;

  significa que a cada duas entradas o bitwise vai a zero.
  como são duplicados e só 1 está single.
*/

function solution(A){

  let result = 0;

  for (let element of A) {
    // Apply Bitwise XOR to the current and next element
    result ^= element
  }

  return result

  /** NOTE: SLOW Solution
  let map = {};
  let i = 0;
  let len = A.length;

  for(let a of A){
    if(!map.hasOwnProperty(a)){
      map[a] = 0;
    }
    map[a]++;
  }

  return parseInt(Object.keys(map).filter(el => {
    if(map[el] == 1) return el;
  }));
  */
}
