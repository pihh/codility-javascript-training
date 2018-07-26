/**
 * Strategy:
      - Define area: A * B
      - Define perimeter: 2A + 2B

      That said, the greatest number possible sharing the area is  √n
      So, the greatest possible area is N * N and the smallest perimeter possible is 4N

      So, knowing the N, let's get the divisors ( N %  √n--) starting from the end ( the nearest to 4N will be 2N + 2N-1)
      The first divisor ever will close the equation with the smallest perimeter.
 */
function solution(N){

  let min = 0;
  let sqrt = Math.ceil(Math.sqrt(N));

  for(sqrt; sqrt > 0; sqrt--){
   	if(N % sqrt === 0){
      let side = N/sqrt;
     	return sqrt*2 + (side)*2;
    }
  }
  return min; // FALLBACK in case of 1 or 0

}
